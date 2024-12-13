import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
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
  username: z.string(),
  email: z.string().trim().min(3, 'Required').email(),
  password: z
    .string()
    .min(8, 'Password must be at least 8 characters long.')
    .max(128, 'Password cannot exceed 128 characters.')
    .regex(/[0-9]/, 'Password must contain at least one number.')
    .regex(
      /[!@#$%^&*(),.?":{}|<>]/,
      'Password must contain at least one special character.',
    ),
});

export function SignUpCard() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: '',
      email: '',
      password: '',
    },
    // mode: 'onChange',
  });

  const onSubmit = (data: z.infer<typeof formSchema>) => {
    console.log('Form data:', data);
  };

  return (
    <Card className="mx-auto max-w-xs border-base-300">
      <CardHeader className="mb-1 flex-center">
        <CardTitle>
          <h3 className="font-semibold text-primary dark:text-secondary">
            Welcome To Jira Cloned!
          </h3>
        </CardTitle>
        <CardDescription className="px-3 pt-1">
          Sign by entering your details below, or buy using one of the single
          sign on providers below.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form className="space-y-5" onSubmit={form.handleSubmit(onSubmit)}>
            {/* USERNAME */}
            <FormField
              control={form.control}
              name="username"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="opacity-80">User name</FormLabel>
                  <FormControl>
                    <Input
                      required
                      placeholder="Enter your name"
                      type="text"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

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
              Sign Up
            </Button>
          </form>
        </Form>
      </CardContent>

      <Separator className="bg-radial mb-8 mt-2 from-secondary to-transparent opacity-40" />
      <CardContent className="mb-6 space-y-7">
        <Button variant="secondary" className="w-full">
          Sign up with Google
          <div className="ml-0.5 h-7 w-7 opacity-90">
            <GoogleLogo />
          </div>
        </Button>
        <Button variant="secondary" className="w-full">
          Sign up with Github
          <div className="ml-0.5 h-6 w-6 opacity-90">
            <GitHubLogo />
          </div>
        </Button>
      </CardContent>
    </Card>
  );
}
