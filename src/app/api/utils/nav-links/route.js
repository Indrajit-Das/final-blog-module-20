import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

export async function POST(req) {
    BigInt.prototype.toJSON = function () {
        return this.toString();
    };

    try {
        const reqBody = await req.json();
        const prisma = new PrismaClient();
        let createNavLinks = await prisma.navLinks.create({
            data: reqBody,
        });
        return NextResponse.json({
            status: "Successfully Created Nav-Links ",
            data: createNavLinks,
        });
    } catch (e) {
        return NextResponse.json({
            status: "Fail",
            data: e.toString(),
        });
    }
}
