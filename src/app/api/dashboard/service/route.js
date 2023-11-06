import { PrismaClient } from "@prisma/client";
import { headers } from "next/headers";
import { NextResponse } from "next/server";

export async function POST(req) {
    BigInt.prototype.toJSON = function () {
        return this.toString();
    };

    try {
        const reqBody = await req.json();
        const prisma = new PrismaClient();
        let createService = await prisma.services.create({
            data: reqBody,
        });
        return NextResponse.json({
            status: "Successfully create service.",
            data: createService,
        });
    } catch (e) {
        return NextResponse.json({
            status: "Fail",
            data: e.toString(),
        });
    }
}

export async function DELETE(req) {
    const { searchParams } = new URL(req.url);
    let serviceId = searchParams.get("id");
    console.log(serviceId);
    try {
        const prisma = new PrismaClient();
        let deleteService = await prisma.services.delete({
            where: {
                id: parseInt(serviceId),
            },
        });
        return NextResponse.json({
            status: "Successfully delete service.",
            data: deleteService,
        });
    } catch (e) {
        return NextResponse.json({
            status: "Fail",
            data: e.toString(),
        });
    }
}
