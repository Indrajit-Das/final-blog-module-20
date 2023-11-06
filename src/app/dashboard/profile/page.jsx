import SideLayout from "@/components/master/SideLayout";
import UsersProfile from "@/components/profile/UsersProfile";
import { PrismaClient } from "@prisma/client";
import { headers } from "next/headers";
import React from "react";

async function getData() {
    const headerList = headers();
    let userId = headerList.get("id");

    const prisma = new PrismaClient();
    return await prisma.users.findUnique({
        where: { id: userId },
    });
}
export default async function Profile() {
    const data = await getData();
    return (
        <SideLayout>
            <UsersProfile userData={data} />
        </SideLayout>
    );
}
