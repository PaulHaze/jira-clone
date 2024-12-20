'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Button, Logo } from '@/components/ui';

export function AuthNav() {
  const pathname = usePathname();
  const isSignUp = pathname === '/sign-up';
  return (
    <nav className="mx-auto flex max-w-xl items-center justify-between bg-base-200 px-6 pt-4 md:px-8 xl:px-0">
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
