import { Logo } from '@/components/ui';

type AuthLayoutProps = {
  children: React.ReactNode;
};

export default function AuthLayout({ children }: AuthLayoutProps) {
  return (
    <div>
      <div className="flex items-center p-2">
        <Logo className="h-8 w-8 text-primary" />
        <h2 className="ml-2 font-black text-secondary">Jira Cloned</h2>
      </div>
      {children}
    </div>
  );
}
