import { Button } from "@/components/ui/button"
import { Skeleton } from "@/components/ui/skeleton"
import UserPosts from "@/components/UserPosts"
import Link from "next/link"
import { Suspense } from "react"

const page = () => {
    return (
        <div className="px-4">
            <div className="flex justify-between items-center mt-4 ">
                <h2 className="text-lg font-semibold">Your posts</h2>
                <Button asChild>
                    <Link href="/dashboard/createpost">Create Post</Link>
                </Button>
            </div>
            <div className="mt-4">
                <Suspense fallback={<Skeleton className="w-full h-[300]" />}>
                    <UserPosts />
                </Suspense>
            </div>

        </div>
    )
}

export default page
