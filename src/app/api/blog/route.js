import { PrismaClient } from "@prisma/client";
import { headers } from "next/headers";
import { NextResponse } from "next/server";

export async function POST(req) {
    BigInt.prototype.toJSON = function () {
        return this.toString();
    };

    try {
        const headerList = headers();
        let userId = headerList.get("id");
        console.log(userId);
        const reqBody = await req.json();
        const prisma = new PrismaClient();
        reqBody.usersId = parseInt(userId);
        let createBlog = await prisma.blogs.create({
            data: reqBody,
        });
        return NextResponse.json({
            status: "successfully Created blog.",
            data: createBlog,
        });
    } catch (e) {
        return NextResponse.json({
            status: "Fail",
            data: e.toString(),
        });
    }
}
