import { Logo } from '@/components/ui';

type AuthLayoutProps = {
  children: React.ReactNode;
};

export default function AuthLayout({ children }: AuthLayoutProps) {
  return (
    <div>
      <div className="p-2">
        <Logo className="h-10 w-10 text-primary" />
      </div>
      {children}
    </div>
  );
}
