import { AuthNav } from '@/features';

type AuthLayoutProps = {
  children: React.ReactNode;
};

export default function AuthLayout({ children }: AuthLayoutProps) {
  return (
    <main className="min-h-screen bg-base-200">
      <div className="mx-auto mb-4 max-w-lg bg-base-200 px-6 md:px-8 xl:px-0">
        {/* NAV */}
        <AuthNav />
        <div className="flex flex-col items-center justify-center pt-10">
          {children}
        </div>
      </div>
    </main>
  );
}
