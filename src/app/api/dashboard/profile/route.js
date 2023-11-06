import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

export async function PATCH(req) {
    BigInt.prototype.toJSON = function () {
        return this.toString();
    };

    try {
        const prisma = new PrismaClient();
        const resBody = await req.json();
        let userId = resBody["userId"];
        const updateUser = await prisma.users.update({
            where: { id: userId },
            data: {
                firstName: resBody["firstName"],
                lastName: resBody["lastName"],
                email: resBody["email"],
                password: resBody["password"],
                avater: resBody["avater"],
            },
        });
        return NextResponse.json({
            status: "Successfully updated profile.",
            data: updateUser,
        });
    } catch (error) {
        return NextResponse.json({
            status: "Fail",
            data: error.toString(),
        });
    }
}
