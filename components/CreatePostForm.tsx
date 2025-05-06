"use client"
import createBlog from "@/app/actions/createBlog"
import { Button } from "./ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card"
import { Input } from "./ui/input"
import { Label } from "./ui/label"
import { Textarea } from "./ui/textarea"
import { redirect } from "next/navigation"
import { toast } from "react-toastify"

const CreatePostForm = () => {

  async function clientFunction(formData: FormData) {
    const {blogData, error} = await createBlog(formData)

    if (error) {
      toast.error(error)
    } else {
      toast.success("Post submitted successfully")
      redirect("/dashboard")
    }

  }

  // async function handleSubmit() {
  //   const {} = await createBlog(formData: FormData)
  // }
  return (
    <div>
      <Card className="w-lg mx-auto">
        <CardHeader>
          <CardTitle>Create your post</CardTitle>
          <CardDescription>Share your thoughts with the world</CardDescription>
        </CardHeader>
        <CardContent>
          <form action={clientFunction}>
            <div className="mb-4 flex flex-col gap-2">
              <Label htmlFor="title">Title</Label>
              <Input type="text" name="title" id="title" placeholder="title"/>
            </div>
            <div className="mb-4 flex flex-col gap-2">
              <Label htmlFor="content">Content</Label>
              <Textarea name="content" id="content" placeholder="content"/>
            </div>
            <div className="flex justify-between">
              <Button >Publish</Button>
              <Button>Save to drafts</Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}

export default CreatePostForm
