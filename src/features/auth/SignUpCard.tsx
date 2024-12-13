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

export function SignUpCard() {
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
            min={8}
            max={256}
          />

          <Button className="w-full">Log In</Button>
        </form>
      </CardContent>

      <Separator className="bg-radial mb-8 mt-2 from-secondary to-transparent opacity-40" />
      <CardContent className="mb-6 space-y-7">
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
    </Card>
  );
}
