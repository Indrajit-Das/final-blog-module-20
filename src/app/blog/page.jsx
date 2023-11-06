import { BlogCards } from "@/components/blog/BlogCards";
import PlainLayout from "@/components/master/PlainLayout";
import { PrismaClient } from "@prisma/client";

async function getData() {
    const prisma = new PrismaClient();
    let allBlogs = await prisma.blogs.findMany();
    return allBlogs;
}

export default async function Blog() {
    const blogs = await getData();
    // console.log(blogs);
    return (
        <PlainLayout>
            <section>
                <div className=" container mx-auto">
                    <h1>Blog</h1>
                    <div className="">
                        <BlogCards blogs={blogs} />
                    </div>
                </div>
            </section>
        </PlainLayout>
    );
}
