import { NextResponse } from "next/server";
import { headers } from "next/headers";
import { PrismaClient } from "@prisma/client";

export async function GET(req) {
    try {
        const headerList = headers();
        let userId = headerList.get("id");
        const prisma = new PrismaClient();
        let allCategories = await prisma.categories.findMany({
            where: { id: userId },
        });
        return NextResponse.json({
            status: "success",
            data: allCategories,
        });
    } catch (error) {
        return NextResponse.json({
            status: "Fail",
            data: error.toString(),
        });
    }
}
export async function POST(req) {
    try {
        const headerList = headers();
        let userId = headerList.get("id");
        const resBody = await req.json();
        const prisma = new PrismaClient();
        let createCategory = await prisma.categories.create({
            data: { name: resBody["name"], usersId: userId },
        });
        return NextResponse.json({
            status: "Successfully Create Category",
            data: createCategory,
        });
    } catch (error) {
        return NextResponse.json({
            status: "Fail",
            data: error.toString(),
        });
    }
}
export async function PUT(req) {
    try {
        let headerList = headers();
        let email = headerList.get("email");
        let id = headerList.get("id");
        let firstName = headerList.get("firstName");
        return NextResponse.json({
            status: "success",
            email: email,
            id: id,
            firstName: firstName,
        });
    } catch (error) {
        return NextResponse.json({
            status: "Fail",
            data: error.toString(),
        });
    }
}
export async function DELETE(req) {
    try {
        let headerList = headers();
        let email = headerList.get("email");
        let id = headerList.get("id");
        let firstName = headerList.get("firstName");
        return NextResponse.json({
            status: "success",
            email: email,
            id: id,
            firstName: firstName,
        });
    } catch (error) {
        return NextResponse.json({
            status: "Fail",
            data: error.toString(),
        });
    }
}
export async function PATCH(req) {
    try {
        let headerList = headers();
        let email = headerList.get("email");
        let id = headerList.get("id");
        let firstName = headerList.get("firstName");
        return NextResponse.json({
            status: "success",
            email: email,
            id: id,
            firstName: firstName,
        });
    } catch (error) {
        return NextResponse.json({
            status: "Fail",
            data: error.toString(),
        });
    }
}
