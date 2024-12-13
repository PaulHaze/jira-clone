'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Button, Logo } from '@/components/ui';

export function AuthNav() {
  const pathname = usePathname();
  const isSignUp = pathname === '/sign-up';
  return (
    <nav className="flex items-center justify-between py-4">
      {/* LOGO */}
      <div className="flex items-center">
        <Link href="/" className="flex items-center">
          <Logo className="h-8 w-8 text-primary" />
          <h3 className="ml-2 font-black text-primary">JiraCloned</h3>
        </Link>
      </div>

      {/* BUTTON */}
      <Link href={isSignUp ? '/sign-in' : '/sign-up'}>
        <Button variant="neutral">{isSignUp ? 'Sign In' : 'Sign Up'}</Button>
      </Link>
    </nav>
  );
}
