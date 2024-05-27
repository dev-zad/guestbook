// hooks/useAuth.ts
"use client";
import { useEffect, useState } from 'react';

interface User {
  id: string;
  username: string;
  email: string;
  role: 'admin' | 'user';
}

export function useAuth() {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      // Your authentication logic goes here
      // Example: Fetch user data from localStorage or an authentication provider
      const userFromLocalStorage = localStorage.getItem('user');
      if (userFromLocalStorage) {
        setUser(JSON.parse(userFromLocalStorage));
      }
      setLoading(false);
    }
  }, []);

  return { user, loading };
}
