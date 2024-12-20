import { AuthNav } from '@/features';

type AuthLayoutProps = {
  children: React.ReactNode;
};

export default function AuthLayout({ children }: AuthLayoutProps) {
  return (
    <main className="min-h-screen bg-base-200 pb-20">
      {/* NAV */}
      <AuthNav />
      <div className="flex flex-col items-center justify-center pt-4">
        {children}
      </div>
    </main>
  );
}
