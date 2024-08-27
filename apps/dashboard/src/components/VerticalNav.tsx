import { useState, useEffect } from 'react';
import { supabase } from '@/lib/supabaseClient';
import { User } from '@supabase/supabase-js';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { Logs, Cable, KeyRound, Settings, BookOpen, LogOut } from "lucide-react";

const VerticalNavbar = () => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const fetchUser = async () => {
      const { data: { session }, error } = await supabase.auth.getSession();
      if (error) {
        console.error('Error fetching session:', error.message);
        setLoading(false);
        return;
      }
      if (session?.user) {
        setUser(session.user);
      } else {
        router.push('/auth/signin'); // Redirect to sign-in if not authenticated
      }
      setLoading(false);
    };

    fetchUser();
  }, [router]);

  const handleLogout = async () => {
    const { error } = await supabase.auth.signOut();
    if (error) {
      console.error('Error during logout:', error.message);
      return;
    }
    router.push('/auth/signin'); // Redirect to sign-in after logout
  };

  return (
    <nav className="w-64 min-h-screen text-white p-5 flex flex-col justify-between border-r border-zinc-700">
      <div>
        <div className="mb-8">
          <Link href="/" legacyBehavior>
            <a className="text-3xl font-bold bg-gradient-to-r from-white to-zinc-400 bg-clip-text text-transparent">
              Grantx
            </a>
          </Link>
        </div>
  
        <div className="space-y-4">
          <Link href="/applications" legacyBehavior>
            <a className="flex items-center w-full text-zinc-400 py-2 px-4 rounded hover:bg-neutral-900 hover:text-zinc-200 scroll-m-20 text-md font-medium tracking-tight">
              <Cable className="mr-2 w-4 h-4" /> 
              APIs
            </a>
          </Link>
          <Link href="/profile" legacyBehavior>
            <a className="flex items-center w-full text-zinc-400 py-2 px-4 rounded hover:bg-neutral-900 hover:text-zinc-200 scroll-m-20 text-md font-medium tracking-tight">
              <Logs className="mr-2 w-4 h-4" /> 
              Audit Logs
            </a>
          </Link>
          <Link href="/root-key" legacyBehavior>
            <a className="flex items-center w-full text-zinc-400 py-2 px-4 rounded hover:bg-neutral-900 hover:text-zinc-200 scroll-m-20 text-md font-medium tracking-tight">
              <KeyRound className="mr-2 w-4 h-4" />  
              Root Key
            </a>
          </Link>
          <Link href="/settings" legacyBehavior>
            <a className="flex items-center w-full text-zinc-400 py-2 px-4 rounded hover:bg-neutral-900 hover:text-zinc-200 scroll-m-20 text-md font-medium tracking-tight">
              <Settings className="mr-2 w-4 h-4" /> 
              Settings
            </a>
          </Link>
          <Link href="/docs" legacyBehavior>
            <a className="flex items-center w-full text-zinc-400 py-2 px-4 rounded hover:bg-neutral-900 hover:text-zinc-200 scroll-m-20 text-md font-medium tracking-tight">
              <BookOpen className="mr-2 w-4 h-4" /> 
              Docs
            </a>
          </Link>
        </div>
      </div>
  
      {user && (
        <div className="border-t-[1px] border-zinc-700 pt-4 mt-4">
          <button
            onClick={handleLogout}
            className="flex items-center w-full text-zinc-400 py-2 px-4 rounded hover:bg-neutral-900 hover:text-zinc-200 text-md font-medium tracking-tight"
          >
            <LogOut className="mr-2 w-4 h-4" /> 
            Logout
          </button>
        </div>
      )}
    </nav>
  );  
};

export default VerticalNavbar;
