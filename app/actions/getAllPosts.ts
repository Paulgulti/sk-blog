"use server"

import { prisma } from "@/lib/db"
import { Author, BlogPost } from "@/types"
import { auth } from "@clerk/nextjs/server"

export default async function getAllPosts(): Promise<{
    data?: (BlogPost & { author: Author})[],
    error?: string, 
}> {

    await new Promise((resolve) => setTimeout( resolve, 2000 ))
    const posts = await prisma.post.findMany({
        where: { published: false },
        include: { author: true },
        orderBy: { createdAt: "desc" }
    }) 
    
    if(!posts || posts.length < 1) {
        return { error: "can't find posts" }
    }
    
    return { data: posts }
}