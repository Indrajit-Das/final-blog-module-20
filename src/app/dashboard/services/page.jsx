import SideLayout from "@/components/master/SideLayout";
import { CrudServices } from "@/components/service/CrudServices";
import { PrismaClient } from "@prisma/client";

async function getData() {
    const prisma = new PrismaClient();
    let allServiceData = await prisma.services.findMany();
    return allServiceData;
}

export default async function DashboardServices() {
    const servicesData = await getData();
    return (
        <SideLayout>
            <section>
                <CrudServices servicesData={servicesData} />
            </section>
        </SideLayout>
    );
}
