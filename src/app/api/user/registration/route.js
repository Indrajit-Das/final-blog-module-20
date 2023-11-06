import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

export async function POST(req) {
    BigInt.prototype.toJSON = function () {
        return this.toString();
    };
    try {
        const prisma = new PrismaClient();
        const reqBody = await req.json();
        reqBody.otp = "0";
        reqBody.avater = "0";
        let result = await prisma.users.create({
            data: reqBody,
        });
        return NextResponse.json({
            status: "Registration Success",
            data: result,
        });
    } catch (error) {
        return NextResponse.json({
            status: "Registration Fail",
            data: error.toString(),
        });
    }
}

// Delete Registered User
export async function DELETE(req) {
    BigInt.prototype.toJSON = function () {
        return this.toString();
    };
    try {
        const prisma = new PrismaClient();
        const { searchParams } = new URL(req.url);
        let id = searchParams.get("id");
        let result = await prisma.users.delete({
            where: {
                id: id,
            },
        });
        return NextResponse.json({
            status: "Successfully Removed User",
            data: result,
        });
    } catch (error) {
        return NextResponse.json({
            status: "Removed User Fail",
            data: error.toString(),
        });
    }
}
