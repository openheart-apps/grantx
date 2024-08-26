'use client';
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
import { useState } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "@/lib/supabaseClient";

export default function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const { data, error: signUpError } = await supabase.auth.signUp({
      email,
      password,
    });

    if (signUpError) {
      setError(signUpError.message);
      return;
    }

    router.push('/applications');
  };

  const handleGitHubSignIn = async () => {
    const { error } = await supabase.auth.signInWithOAuth({
      provider: 'github',
      options: {
        redirectTo: `${process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000'}/applications`,
      },
    });

    if (error) {
      setError(error.message);
    }
  };

  const handleGoogleSignIn = async () => {
    const { error } = await supabase.auth.signInWithOAuth({
      provider: 'google',
      options: {
        redirectTo: `${process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000'}/applications`,
      },
    });

    if (error) {
      setError(error.message);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen mt-10 mb-10">
      <Link href={`${process.env.NEXT_LANDING_PAGE_URL || '/'}`} className="absolute top-4 left-4 flex items-center text-zinc-400 mt-4 ml-4">
        <FaArrowLeft className="mr-2" /> Home
      </Link>
      <Card className="w-[500px] border-none my-8">
        <CardHeader className="mb-4">
          <CardTitle>Create a GrantX account</CardTitle>
          <CardDescription>
            Already have an account? <Link className="text-blue-400" href={`${process.env.NEXT_PUBLIC_BASE_URL || '/auth/signin'}`}>Login here</Link>
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col gap-2 mb-4">
            <Button className="w-full mb-2" variant="outline" onClick={handleGitHubSignIn}>
              <FaGithub className="inline mr-2" /> GitHub
            </Button>
            <Button className="w-full mb-2" variant="outline" onClick={handleGoogleSignIn}>
              <FaGoogle className="inline mr-2" /> Google
            </Button>
          </div>
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <div className="flex flex-col space-y-1.5 mb-4 text-zinc-400">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="hey@harshbhat.me"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="flex flex-col space-y-1.5 text-zinc-400">
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                type="password"
                placeholder="••••••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            {error && <p className="text-red-500">{error}</p>}
            <div className="flex mt-4">
              <Button className="w-full" type="submit">
                Sign Up
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
