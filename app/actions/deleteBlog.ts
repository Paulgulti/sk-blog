"use server"

import { prisma } from "@/lib/db"
import { auth } from "@clerk/nextjs/server"
import { revalidatePath } from "next/cache"

export default async function deleteBlog(blogId : string): Promise<{
    error?: string,
    success?: string
}> {
    const {userId} = await auth()

    if(!userId) {
        return { error: "user not found"}
    }

    try {
        const deletePost = await prisma.post.delete({
            where: { id: blogId }
        })

        revalidatePath("/dashboard")

        return { success: "Blog successfully deleted" }
    } catch (error) {
        return { error: "database error" }
    }
}