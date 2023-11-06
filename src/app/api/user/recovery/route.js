import { SendMailer } from "@/utils/emailHelper";
import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

export async function POST(req) {
    BigInt.prototype.toJSON = function () {
        return this.toString();
    };

    try {
        const reqBody = await req.json();
        const prisma = new PrismaClient();
        const countUser = await prisma.users.count({ where: reqBody });

        if (countUser === 1) {
            let code = Math.floor(100000 + Math.random() * 900000);
            let updateOtp = await prisma.users.update(
                {
                    where: reqBody,
                    data: {
                        otp: code.toString(),
                    },
                },
                { status: 200, headers: { email: reqBody["email"] } }
            );

            //Send Mail
            let toEmail = reqBody["email"];
            let subject = "6 Digit OTP has been send";
            let text = `Your OTP is ${code}`;
            SendMailer(toEmail, subject, text);

            return NextResponse.json({
                status: "6 Digit OTP send",
                data: updateOtp,
            });
        } else {
            return NextResponse.json({ status: "Invalid User" });
        }
    } catch (error) {
        return NextResponse.json({ status: "Fail", data: error.toString() });
    }
}

//Verify OTP
export async function PUT(req) {
    BigInt.prototype.toJSON = function () {
        return this.toString();
    };

    try {
        const resBody = await req.json();
        const prisma = new PrismaClient();
        let findUser = await prisma.users.findUnique({ where: resBody });
        if (findUser === null) {
            return NextResponse.json({
                status: "Email or OTP dosen't match. Try again later.",
            });
        } else {
            return NextResponse.json({
                status: "OTP verify success",
            });
        }
    } catch (error) {
        return NextResponse.json({ status: "Fail", data: error.toString() });
    }
}

//Reset Password
export async function PATCH(req) {
    BigInt.prototype.toJSON = function () {
        return this.toString();
    };

    try {
        const resBody = await req.json();
        const prisma = new PrismaClient();
        let findUser = await prisma.users.findUnique({
            where: { email: resBody["email"] },
        });
        const checkPassword = () => {
            if (resBody["password"] === resBody["confirmPassword"]) {
                return resBody["password"];
            } else {
                return "0";
            }
        };
        let newNassword = checkPassword();
        if (findUser === null || newNassword === "0") {
            return NextResponse.json({
                status: "Password dosen't match!. Try again.",
            });
        } else {
            const updatePassword = await prisma.users.update({
                where: { email: resBody["email"] },
                data: {
                    password: newNassword,
                    otp: "0",
                },
            });
            return NextResponse.json({
                status: "Successfully updated password",
                data: updatePassword,
            });
        }
    } catch (error) {
        return NextResponse.json({ status: "Fail", data: error.toString() });
    }
}
