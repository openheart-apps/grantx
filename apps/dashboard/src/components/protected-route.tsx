// src/components/ProtectedRoute.tsx
'use client';
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/contexts/AuthContext';

interface ProtectedRouteProps {
  children: React.ReactNode;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children }) => {
  const { user, loading } = useAuth();
  const router = useRouter();
  const [isRedirecting, setIsRedirecting] = useState(true);

  useEffect(() => {
    if (loading) return; // Wait for loading to finish

    // Redirect logic
    if (!user && !['/auth/signin', '/auth/signup'].includes(window.location.pathname)) {
      router.push('/auth/signin');
    } else {
      setIsRedirecting(false);
    }
  }, [loading, user, router]);

  if (isRedirecting || loading) return <p>Loading...</p>; // Or any loading indicator

  return <>{children}</>;
};

export default ProtectedRoute;
