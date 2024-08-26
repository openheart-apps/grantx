'use client'
import { useEffect, useState } from 'react';
import { supabase } from '@/lib/supabaseClient';
import { useRouter } from 'next/navigation';
import { Card, CardContent, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

export default function HelloPage() {
  const [user, setUser] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const fetchUser = async () => {
      const { data: { session } } = await supabase.auth.getSession();
      if (session?.user) {
        setUser(session.user);
      } else {
        router.push('/auth/signin'); // Redirect to sign-in if not authenticated
      }
      setLoading(false);
    };

    fetchUser();
  }, [router]);

  if (loading) return <div>Loading...</div>;

  return (
    <div className="flex items-center justify-center min-h-screen mt-10 mb-10">
      <Card className="w-[400px] border-none my-8">
        <CardContent>
          {user ? (
            <CardTitle>Hello, {user.email}!</CardTitle>
          ) : (
            <CardTitle>Loading...</CardTitle>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
