import { Button, Logo } from '@/components/ui';

type AuthLayoutProps = {
  children: React.ReactNode;
};

export default function AuthLayout({ children }: AuthLayoutProps) {
  return (
    <main className="min-h-screen bg-base-200">
      {/* NAV */}
      <div className="mx-auto mb-4 max-w-lg">
        <div className="flex items-center justify-between px-6 pt-4 md:px-8 lg:px-0">
          {/* LOGO */}
          <div className="flex items-center">
            <Logo className="h-8 w-8 text-primary" />
            <h3 className="ml-2 font-black text-primary">JiraCloned</h3>
          </div>

          {/* BUTTON */}
          <Button variant="secondary">Sign In</Button>
        </div>
      </div>
      {children}
    </main>
  );
}
