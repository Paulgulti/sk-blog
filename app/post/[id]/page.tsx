import getPost from '@/app/actions/getPost'
import { Button, buttonVariants } from '@/components/ui/button'
import { Card, CardContent, CardHeader } from '@/components/ui/card'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

type Params = {
  id: string
}

const page = async ({ params }: { params: Params }) => {
  const { id } = params
  const post = await getPost(id)

  return (
    <div className='max-w-2/3 mx-auto mt-6'>
      <Link href={'/'} className={buttonVariants({variant: 'secondary'})}>Back to posts</Link>
      <Card className='mt-4'>
        <CardHeader >
          <div className='flex justify-between'>
            <h2 className='text-lg font-semibold'>{post.title}</h2>
            <p>{new Intl.DateTimeFormat("en-Us", {
              year: 'numeric',
              month: "short",
              day: 'numeric',
            }).format(post.createdAt)}</p>
          </div>
        </CardHeader>
        <CardContent>
          <p>{post.content}</p>
        </CardContent>
      </Card>

    </div>
  )
}

export default page
