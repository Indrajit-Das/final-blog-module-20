import PlainLayout from "@/components/master/PlainLayout";
import { ServiceCard } from "@/components/service/ServiceCard";
import { PrismaClient } from "@prisma/client";

async function getData() {
    const prisma = new PrismaClient();
    let allService = prisma.services.findMany();
    return allService;
}

export default async function Service() {
    let services = await getData();
    return (
        <PlainLayout>
            <div className=" container mx-auto py-10 px-6 md:lg:px-0">
                <section>
                    <h1 className=" text-center text-5xl uppercase font-extrabold text-indigo-700">
                        Our Services
                    </h1>
                    <p className=" py-5">

                        Jhalmuri is a popular and beloved street food in India and Bangladesh, known for its delicious simplicity and bold flavors. This delectable snack is made from puffed rice mixed with an assortment of spices, herbs, and vegetables, offering a burst of taste and texture in every bite. Common ingredients include chopped onions, green chilies, roasted peanuts, mustard oil, and an array of spices like turmeric and cumin. What sets jhalmuri apart is its ability to strike a harmonious balance between tangy, spicy, and savory flavors, making it a favorite among those who crave a quick and satisfying snack while strolling through bustling markets or enjoying leisurely evenings with friends. It's a delightful culinary experience that encapsulates the essence of street food culture in South Asia.
                    </p>
                </section>
                <ServiceCard services={services} />
            </div>
        </PlainLayout>
    );
}
