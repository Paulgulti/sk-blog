import Link from "next/link"
import { Button } from "./ui/button"
import { SignedIn, SignedOut, SignInButton, SignUpButton, UserButton } from "@clerk/nextjs"
import { checkUser } from "@/lib/checkUser"

const Navbar = async () => {

    const user = await checkUser()
    return (
        <div className="flex justify-between items-center py-2 px-4">
            <h1 className="text-2xl font-bold cursor-pointer">Sk <span className="text-blue-300">Blog</span></h1>
            <div className="flex gap-6">
                <Link className=" hover:text-blue-300"
                    href="/" >Home</Link>
                <Link className=" hover:text-blue-300"
                    href="/dashboard">Dashboard</Link>
            </div>
            <div className="flex items-center gap-2">
                <SignedOut>
                    <Button asChild>
                        <SignInButton>Sign in</SignInButton>
                    </Button>
                    <Button asChild variant={"secondary"}>
                        <SignUpButton>Sign up</SignUpButton>
                    </Button>
                </SignedOut>
                <SignedIn>
                    <UserButton/>
                </SignedIn>
            </div>
        </div>
    )
}

export default Navbar
