import { ThemeProvider } from 'next-themes';
import { type Metadata } from 'next';
import { Inter } from 'next/font/google';
import { cn } from '@/lib/utils';

import { ThemeToggle } from '@/components/ui';

import '@/styles/main.scss';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Jira Cloned',
  description: 'A clone of Jira',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn(`${inter.className} min-h-screen antialiased`)}>
        <ThemeProvider>
          <div className="relative">
            <div className="absolute bottom-2 right-3">
              <ThemeToggle />
            </div>
            {children}
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
