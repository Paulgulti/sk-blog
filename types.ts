export interface Author {
    id: string,
    clerkUserId: string,
    name: string | null,
    email: string,
    imageUrl: string | null,
    createdAt: Date,
    updatedAt: Date
}
export interface BlogPost {
    id: string,
    title: string,
    content: string,
    published: boolean,
    authorId: string,
    createdAt: Date
}

