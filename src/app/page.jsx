import Hero from "@/components/Hero";
import PlainLayout from "@/components/master/PlainLayout";
export default function Home() {
    return (
        <PlainLayout>
            <section>
                <div className=" container mx-auto">
                    <Hero />
                </div>
            </section>
        </PlainLayout>
    );
}
