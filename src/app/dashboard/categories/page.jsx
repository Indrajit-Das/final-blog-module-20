import AllCategories from "@/components/categories/AllCategories";
import CreateCategoryForm from "@/components/categories/CreateCategoryForm";
import SideLayout from "@/components/master/SideLayout";
import { PrismaClient } from "@prisma/client";
import { headers } from "next/headers";

async function getData(req) {
    const headerList = headers();
    let userId = headerList.get("id");
    const prisma = new PrismaClient();
    let getCatagories = await prisma.categories.findMany({
        where: { usersId: userId },
    });
    return getCatagories;
}

export default async function Categories() {
    const data = await getData();
    return (
        <SideLayout>
            <section>
                <h1 className=" text-center text-lg pb-4 text-indigo-600 underline">
                    Categories Status
                </h1>
                <div className=" flex gap-5 ">
                    <AllCategories data={data} />
                    <div className=" w-full border rounded">
                        <CreateCategoryForm />
                    </div>
                </div>
            </section>
        </SideLayout>
    );
}
