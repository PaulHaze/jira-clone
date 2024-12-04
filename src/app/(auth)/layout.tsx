import { Button, Logo } from '@/components/ui';

type AuthLayoutProps = {
  children: React.ReactNode;
};

export default function AuthLayout({ children }: AuthLayoutProps) {
  return (
    <main className="min-h-screen bg-base-200">
      <div className="mx-auto mb-4 max-w-lg bg-base-200 px-6 md:px-8 xl:px-0">
        {/* NAV */}
        <div className="flex items-center justify-between py-4">
          {/* LOGO */}
          <div className="flex items-center">
            <Logo className="h-8 w-8 text-primary" />
            <h3 className="ml-2 font-black text-primary">JiraCloned</h3>
          </div>

          {/* BUTTON */}
          <Button variant={'neutral'}>Sign In</Button>
        </div>
        {children}
      </div>
    </main>
  );
}
