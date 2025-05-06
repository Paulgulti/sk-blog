import GetAllPosts from "@/components/GetAllPosts";
import { Skeleton } from "@/components/ui/skeleton";
import { Suspense } from "react";

export default function Home() {
  return (
    <div className="flex p-6">
      <div className="w-1/5">
        <h2>Categories</h2>
      </div>
      <div className="w-4/5">
        <h2 className="mb-4 text-lg font-semibold">Latest posts</h2>
        <Suspense fallback={<Skeleton className="w-full h-[450]" />}>
          <GetAllPosts />
        </Suspense>
      </div>
    </div>
  );
}
