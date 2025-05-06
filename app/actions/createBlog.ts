"use server"
import { prisma } from "@/lib/db";
import { auth } from "@clerk/nextjs/server";
import { revalidatePath } from "next/cache";


interface BlogData {
    title: string,
    content: string,
    published: boolean
}

interface BlogResult {
    blogData?: BlogData
    error?: string
}


export default async function createBlog(formData: FormData): Promise<BlogResult> {
    const titleValue =formData.get("title")
    const contentValue =formData.get("content")

    if(!titleValue || titleValue === "" || !contentValue || contentValue === "") {
        return { error: "An important field skipped" }
    }

    const title: string = titleValue?.toString();
    const content: string = contentValue?.toString();

    const {userId} = await auth();

    if (!userId) {
        return { error: "User not found" }
    }

    try {
        const blogData: BlogData = await prisma.post.create({
            data: {
                authorId: userId,
                title: title,
                content: content,
            }
        })

        revalidatePath("/dashboard")
        return { blogData: blogData }
        
    } catch (error) {
        return { error: "Database error" }
    }
    
}