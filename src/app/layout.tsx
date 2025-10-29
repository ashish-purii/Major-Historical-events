import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import { SiteHeader } from '@/components/SiteHeader';
import { FloatingBadge } from '@/components/FloatingBadge';
import { Toaster } from "@/components/ui/toaster";

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Major Historical Events',
  description: 'An exploration of pivotal moments in history, by Ashish Puri.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full dark" suppressHydrationWarning={true}>
      <body suppressHydrationWarning={true} className={`${geistSans.variable} ${geistMono.variable} antialiased flex flex-col min-h-screen bg-background`}>
        <SiteHeader />
        <main className="flex-grow container mx-auto px-4 py-8">
          {children}
        </main>
        <FloatingBadge />
        <Toaster />
      </body>
    </html>
  );
}
