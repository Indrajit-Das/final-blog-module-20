import { CreateToken } from "@/utils/jwtTokenHelper";
import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

export async function POST(req) {
    BigInt.prototype.toJSON = function () {
        return this.toString();
    };
    try {
        let reqBody = await req.json();
        const prisma = new PrismaClient();
        const result = await prisma.users.findUnique({ where: reqBody });

        if (result === null) {
            return NextResponse.json({
                status: "Invalid username or password.",
                data: result,
            });
        } else {
            // Set token
            let token = await CreateToken(
                result["email"],
                result["id"],
                result["firstName"]
            );
            const expirationDate = new Date(Date.now() + 24 * 60 * 60 * 1000);
            const formattedExpiration = expirationDate.toUTCString();
            const cookieString = `token=${token}; expires=${formattedExpiration}; path=/; HttpOnly; Secured`;
            return NextResponse.json(
                {
                    status: "Login Success",
                    token: token,
                },
                {
                    status: 200,
                    headers: { "Set-Cookie": cookieString },
                }
            );
        }
    } catch (error) {
        return NextResponse.json({
            status: "Login Fail",
            data: error.toString(),
        });
    }
}

//Logout / token remove
export async function GET(req, res) {
    const expirationDate = new Date(Date.now() - 24 * 60 * 60 * 1000);
    const formattedExpiration = expirationDate.toUTCString();
    const cookieString = `token=${""}; expires=${formattedExpiration}; path=/`;
    return NextResponse.json(
        {
            status: "Logout Success",
            data: "",
        },
        { status: 200, headers: { "Set-Cookie": cookieString } }
    );
}
