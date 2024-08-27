'use client'
import VerticalNavbar from '@/components/VerticalNav';
import { useEffect, useState } from 'react';
import { supabase } from '@/lib/supabaseClient';
import { useRouter } from 'next/navigation';
import { LogOut } from 'lucide-react';
import { Card, CardContent, CardTitle } from '@/components/ui/card';

export default function HelloPage() {
  const [user, setUser] = useState<any>(null);
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

  if (loading) return <div>Loading...</div>;

  return (
    <div className="flex min-h-screen">
      <div className="flex-none flex flex-col justify-center">
        <VerticalNavbar />
      </div>
      <div className="flex-1 flex items-center justify-center">
        <Card className="w-[400px] border-none my-8">
          <CardContent>
            {user ? (
              <>
                <CardTitle>Hello, {user.email}!</CardTitle>
              </>
            ) : (
              <CardTitle>Loading...</CardTitle>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
