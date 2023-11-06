import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

export async function POST(req) {
    BigInt.prototype.toJSON = function () {
        return this.toString();
    };

    try {
        const reqBody = await req.json();
        const prisma = new PrismaClient();
        let createManagie = await prisma.managements.create({
            data: reqBody,
        });
        return NextResponse.json({
            status: "Successfully create Mamber",
            data: createManagie,
        });
    } catch (e) {
        return NextResponse.json({
            status: "Fail",
            data: e.toString(),
        });
    }
}
