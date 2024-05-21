"use client";

import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Form, FormField, FormItem, FormLabel } from "@/components/ui/form";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { Toaster, toast } from "sonner";

const formSchema = z.object({
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  username: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  message: z.string().min(1, {
    message: "Message cannot be empty.",
  }),
});

type FormValues = z.infer<typeof formSchema>;

export function ProfileForm() {
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      username: "",
      message: "",
    },
  });

  async function onSubmit(values: FormValues) {
    try {
      const response = await fetch('/api/messages', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(values),
      });
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      console.log('Message sent successfully');
      toast.success("Message sent successfully!");
    } catch (error) {
      console.error('Error sending message:', error);
      toast.error("Failed to send message.");
    }
  }

  return (
    <div className="h-[100vh] flex items-center">
      <div className="mx-auto flex py-10 px-10">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-2">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Your Email</FormLabel>
                  <Input placeholder="email" {...field} />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="username"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Username</FormLabel>
                  <Input placeholder="username" {...field} />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="message"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Message</FormLabel>
                  <Textarea placeholder="Type your message here." {...field} />
                </FormItem>
              )}
            />
            <Button type="submit">Send a message</Button>
            <Toaster />
          </form>
        </Form>
      </div>
    </div>
  );
}
