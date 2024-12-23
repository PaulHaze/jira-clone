'use client';
import Link from 'next/link';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  Input,
  Button,
  Separator,
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui';

import { GoogleLogo, GitHubLogo } from '@/components/ui/logos';

const formSchema = z.object({
  email: z.string().email(),
  password: z.string(),
});

export function SignInCard() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const onSubmit = (data: z.infer<typeof formSchema>) => {
    console.log('Form data:', data);
  };
  return (
    <Card className="mx-auto max-w-xs border-base-300">
      <CardHeader className="mb-1 flex-center">
        <CardTitle>
          <h3 className="font-semibold text-primary dark:text-secondary">
            Welcome Back!
          </h3>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
            {/* EMAIL */}
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="opacity-80">Email</FormLabel>
                  <FormControl>
                    <Input
                      required
                      placeholder="Enter your email"
                      type="email"
                      {...field}
                    />
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
                  <FormLabel className="opacity-80">Password</FormLabel>
                  <FormControl>
                    <Input
                      required
                      type="password"
                      placeholder="Choose a password"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Button type="submit" className="w-full">
              Log In
            </Button>
          </form>
        </Form>
      </CardContent>

      <Separator className="mb-8 mt-2 bg-radial from-secondary to-transparent opacity-40" />
      <CardContent className="mb-2 space-y-7">
        <Button variant="secondary" className="w-full">
          Log In with Google
          <div className="ml-0.5 h-7 w-7 opacity-90">
            <GoogleLogo />
          </div>
        </Button>
        <Button variant="secondary" className="w-full">
          Log In With Github
          <div className="ml-0.5 h-6 w-6 opacity-90">
            <GitHubLogo />
          </div>
        </Button>
      </CardContent>
      <Separator className="mb-6 bg-radial from-secondary to-transparent opacity-40" />
      <CardContent className="flex-center">
        <p className="mr-3">Don&apos;t have an account?</p>
        <Link href="/sign-up" className="font-bold text-secondary">
          Sign Up
        </Link>
      </CardContent>
    </Card>
  );
}
