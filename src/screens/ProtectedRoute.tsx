"use client";

import { useEffect, ReactNode } from 'react';
import { useAuth } from '../hooks/useAuth'; // Update the import path

interface ProtectedRouteProps {
  children: ReactNode;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children }) => {
  const { user, loading } = useAuth();

  useEffect(() => {
    if (typeof window !== 'undefined') { // Ensure the code runs on client-side only
      if (!loading && (!user || user.role !== 'admin')) {
        window.location.href = '/'; // Redirect to the homepage if the user is not authenticated or does not have the 'admin' role
      }
    }
  }, [user, loading]);

  return <>{children}</>;
};

export default ProtectedRoute;