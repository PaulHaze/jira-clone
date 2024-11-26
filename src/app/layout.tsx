import type { Metadata } from 'next';
import { ThemeProvider } from 'next-themes';
import localFont from 'next/font/local';
import { ThemeToggle } from '@/components/ui';
import '@/styles/main.scss';

const geistSans = localFont({
  src: './fonts/GeistVF.woff',
  variable: '--font-geist-sans',
  weight: '100 900',
});
const geistMono = localFont({
  src: './fonts/GeistMonoVF.woff',
  variable: '--font-geist-mono',
  weight: '100 900',
});

// !CHANGETHIS
export const metadata: Metadata = {
  title: 'CHANGE THIS',
  description: 'CHANGE THIS',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <ThemeProvider>
          <div className="relative">
            <div className="absolute right-2 top-3">
              <div className="h-8 w-8 flex-center">
                <ThemeToggle />
              </div>
            </div>
            {children}
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
