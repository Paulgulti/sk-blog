import { prisma } from "@/lib/db";
import { notFound } from "next/navigation";

export default async function getPost(id: string) {
    const post = await prisma.post.findUnique({
        where: { id },
    })

    if(!post) {
        return notFound()
    }

    return post
}