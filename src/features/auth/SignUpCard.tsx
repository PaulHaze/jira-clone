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
} from '@/components/ui';

import { GoogleLogo, GitHubLogo } from '@/components/ui/logos';

const formSchema = z.object({
  name: z.string(),
  email: z.string().email(),
  password: z.string().min(8).max(256),
});

export function SignUpCard() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      email: '',
      password: '',
    },
  });
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
        <form className="space-y-5">
          <Input
            required
            placeholder="Enter your name"
            type="text"
            value={''}
            onChange={() => {
              console.log('name');
            }}
          />
          <Input
            required
            placeholder="Enter your email"
            type="email"
            value={''}
            onChange={() => {
              console.log('email');
            }}
          />
          <Input
            required
            value={''}
            placeholder="Choose a password"
            type="password"
            onChange={() => {
              console.log('pwd');
            }}
            min={8}
            max={256}
          />

          <Button className="w-full">Sign Up</Button>
        </form>
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
