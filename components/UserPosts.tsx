import getUserPost from '@/app/actions/getUserPosts'
import React from 'react'
import { toast } from 'react-toastify';
import BlogCard from './BlogCard';
import { currentUser } from '@clerk/nextjs/server';

const UserPosts = async () => {

  const { data, error } = await getUserPost();
  const user = await currentUser();
  const id = user?.id

  if (error) {
    return toast.error(error)
  }

  return (
    <>

      {data && data?.length > 0 ?
        <>
          <ul className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3'>
            {data && data.map(blogs =>
              <BlogCard key={blogs.id} blogs={blogs} id={id} />)}
          </ul>

        </> :
        <>
          <h3>You haven't created posts yet</h3>
        </>}
    </>
  )
}

export default UserPosts
