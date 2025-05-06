"use client"
import { Author, BlogPost } from '@/types'
import React from 'react'
import { Button } from './ui/button'
import deleteBlog from '@/app/actions/deleteBlog'
import { toast } from 'react-toastify'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from './ui/card'
import Link from 'next/link'


const BlogCard = ({ blogs, id }:
  { blogs: (BlogPost & { author: Author }), id: string | undefined }) => {

  async function handleDelete(blogId: string) {
    const { success, error } = await deleteBlog(blogId);

    if (success) {
      toast.success(success)
    } else {
      toast.error(error)
    }
  }
  // console.log(blogs.author.name);

  return (
    <li className=''>
      <Link href={`post/${blogs.id}`}>
        <Card className='h-[200]'>
          <CardHeader>
            <CardTitle>Title: {blogs.title}</CardTitle>
          </CardHeader>
          <CardContent>
            <p className='line-clamp-2'>{blogs.content}</p>
          </CardContent>
          <CardFooter>
            <div className='flex justify-between'>
              <p>
                {new Intl.DateTimeFormat("en-US", {
                  year: 'numeric',
                  month: 'short',
                  day: 'numeric',
                }).format(blogs.createdAt)}
              </p>
              {id && id === blogs.authorId ?
                (
                  // <Button>x</Button>
                  <></>
                ) : (
                  <></>
                )}
            </div>
          </CardFooter>
        </Card>

      </Link>
    </li>
  )
}

export default BlogCard
