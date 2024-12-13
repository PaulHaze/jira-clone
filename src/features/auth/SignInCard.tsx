'use client';

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  Input,
  Button,
  Separator,
} from '@/components/ui';

import { GoogleLogo, GitHubLogo } from '@/components/ui/logos';

export function SignInCard() {
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
        <form className="space-y-5">
          <Input
            required
            placeholder="Email"
            type="email"
            value={''}
            onChange={() => {
              console.log('email');
            }}
          />
          <Input
            required
            value={''}
            placeholder="Password "
            type="password"
            onChange={() => {
              console.log('pwd');
            }}
          />

          <Button className="w-full">Log In</Button>
          <Separator className="bg-radial from-secondary to-transparent opacity-50" />
          <Button className="w-full">
            Log In with Google
            <div className="ml-0.5 h-7 w-7 opacity-90">
              <GoogleLogo />
            </div>
          </Button>
          <Button className="w-full">
            Log In With Github
            <div className="ml-0.5 h-6 w-6 opacity-90">
              <GitHubLogo />
            </div>
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}
