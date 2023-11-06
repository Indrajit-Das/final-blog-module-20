const { PrismaClient } = require("@prisma/client");
const { NextResponse } = require("next/server");

export async function POST(req) {
    BigInt.prototype.toJSON = function () {
        return this.toString();
    };

    try {
        const reqBody = await req.json();
        const prisma = new PrismaClient();
        let findSubscriber = await prisma.subscribers.count({
            where: reqBody,
        });

        if (findSubscriber === 0) {
            let newSubscriber = await prisma.subscribers.create({
                data: reqBody,
            });
            return NextResponse.json({
                status: "Subscription Success ",
                data: newSubscriber,
            });
        } else {
            return NextResponse.json({
                status: "Email already exists. Try again with another email!",
            });
        }
    } catch (e) {
        return NextResponse.json({
            status: "Server Error!",
            data: e.toString(),
        });
    }
}
