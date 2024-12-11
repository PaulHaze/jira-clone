'use client';

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  Input,
  Button,
  DottedSeparator,
} from '@/components/ui';

export function SignInCard() {
  return (
    <Card className="mx-auto max-w-xs border-base-300">
      <CardHeader className="mb-1">
        <CardTitle>
          <h3 className="font-semibold opacity-85">Welcome Back!</h3>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <form className="space-y-5">
          <Input
            placeholder="Email"
            type="email"
            onChange={() => {
              console.log('email');
            }}
          />
          <Input
            placeholder="Password "
            type="password"
            onChange={() => {
              console.log('pwd');
            }}
          />
          <DottedSeparator className="opacity-50" color="muted" />
          <Button className="w-full">Log In</Button>
          <hr className="opacity-40" />
          <Button className="w-full">Log In with Google</Button>
          <Button className="w-full">Log In With Github</Button>
        </form>
      </CardContent>
    </Card>
  );
}
