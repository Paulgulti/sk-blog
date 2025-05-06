"use server"

import { prisma } from "@/lib/db";
import { Author, BlogPost } from "@/types"
import { auth } from "@clerk/nextjs/server"

export default async function getUserPost(): Promise<{
    data?: (BlogPost & {author: Author} )[] ,
    error?: string
}> {
    const {userId} =  await auth();

    if(!userId) {
        return { error: "user not found" }
    }

    try {
        const userPosts = await prisma.post.findMany({
            where: { authorId: userId },
            include: { author: true },
            orderBy: { createdAt: "desc" }
        })
    
        return { data: userPosts}
    } catch (error) {
        return { error: "database error" }
    }
}