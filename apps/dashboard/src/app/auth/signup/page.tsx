import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";
import { FaGoogle, FaGithub, FaArrowLeft } from "react-icons/fa";

export default function Signup() {
  return (
    <div className="flex items-center justify-center min-h-screen mt-10 mb-10">
      <Link href={`${process.env.NEXT_LANDING_PAGE_URL}`} className="absolute top-4 left-4 flex items-center text-zinc-400 mt-4 ml-4">
        <FaArrowLeft className="mr-2" /> Home
      </Link>
      <Card className="w-[500px] border-none my-8"> 
        <CardHeader className="mb-4"> 
          <CardTitle>Create a GrantX account</CardTitle>
          <CardDescription>Already have an account? <Link className="text-blue-400" href={`${process.env.NEXT_PUBLIC_BASE_URL}/auth/signin`}>Login here</Link></CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col gap-2 mb-4">
            <Button className="w-full mb-2" variant="outline">
              <FaGithub className="inline mr-2" /> GitHub
            </Button>
            <Button className="w-full" variant="outline">
              <FaGoogle className="inline mr-2" /> Google
            </Button>
          </div>
          <form>
            <div className="grid w-full items-center gap-4">
              <div className="flex flex-col space-y-1.5 mb-4 text-zinc-400"> {/* Added bottom margin */}
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" placeholder="hey@harshbhat.me" required />
              </div>
              <div className="flex flex-col space-y-1.5 text-zinc-400">
                <Label htmlFor="password">Password</Label>
                <Input
                  id="password"
                  type="password"
                  placeholder="••••••••••••"
                  required
                />
              </div>
            </div>
          </form>
        </CardContent>
        <CardFooter className="flex mt-4"> {/* Added top margin */}
          <Button className="w-full">Sign Up</Button>
        </CardFooter>
      </Card>
    </div>
  );
}
