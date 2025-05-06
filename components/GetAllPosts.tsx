import getAllPosts from "@/app/actions/getAllPosts"
import BlogCard from "./BlogCard";
import { auth, currentUser } from "@clerk/nextjs/server";

const GetAllPosts = async () => {

    const { data, error } = await getAllPosts();

    const user = await currentUser()
    const id = user?.id

    // console.log(id);
    
    if (error) {
        return <h3>{error}</h3>
    }
    
  return (
    <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
        {data?.map(post => <BlogCard key={post.id} blogs={post} id={id} />)}
    </ul>
  )
}

export default GetAllPosts
