"use client";
import { Button } from '@/components/ui/button';
import React from 'react';
import { toast, Toaster } from 'sonner';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from '@hookform/resolvers/zod';

// Define your form schema
const schema = z.object({
  username: z.string().nonempty({ message: 'Username is required' }),
  password: z.string().nonempty({ message: 'Password is required' }),
});

export function LeftSide() {
  // Initialize the form hook
  const form = useForm({
    resolver: zodResolver(schema),
  });

  const onSubmit = async (data: any) => {
    const { username, password } = data;

    // Hardcoded username and password
    const hardcodedUsername = 'admin';
    const hardcodedPassword = 'password';

    if (typeof window !== 'undefined') {
      if (username === hardcodedUsername && password === hardcodedPassword) {
        // If the submitted username and password match the hardcoded values,
        // "authenticate" the user and store their data in local storage
        const userData = {
          id: '1',
          username: 'admin',
          email: 'admin@example.com',
          role: 'admin',
        };
        localStorage.setItem('user', JSON.stringify(userData));
        window.location.href = '/inbox-page';
      } else {
        console.error('Failed to log in');
        toast.error('Invalid username or password');
      }
    }
  };

  return (
    <div className="flex flex-col w-full items-center justify-center h-[100vh] bg-basewhite-100 ">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          <FormField
            control={form.control}
            name="username"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Username</FormLabel>
                <FormControl>
                  <Input placeholder="Username" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Password</FormLabel>
                <FormControl>
                  <Input type="password" placeholder="Password" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit">Submit</Button>
        </form>
      </Form>
      <Toaster />
    </div>
  );
}
