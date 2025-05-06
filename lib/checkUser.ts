import { currentUser } from "@clerk/nextjs/server";
import { prisma } from "./db";

export async function checkUser() {
    const user = await currentUser()

    //check if a user is logged in

    if (!user) {
        return null;
    }
    
    //check if the logged in user is in the db

    const loggedInUser = await prisma.user.findUnique({
        where: {
            clerkUserId: user.id
        }
    })

    if (loggedInUser) {
        return loggedInUser;
    }

    //if logged in user isn't saved to db

    const newUser = await prisma.user.create({
        data: {
            clerkUserId: user.id,
            name: `${user.firstName} ${user.lastName} `,
            imageUrl: user.imageUrl,
            email: user.emailAddresses[0].emailAddress
        }
    })

    return newUser;
}