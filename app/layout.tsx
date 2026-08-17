import type { Metadata } from 'next';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CursorFxLayer from '@/components/CursorFxLayer';
import BottomRegisterBanner from '@/components/BottomRegisterBanner';
import { Providers } from './providers';

export const metadata: Metadata = {
  title: 'InnoSprint 2.0 | 24-Hour Hackathon by D4 Community',
  description:
    'Join 500+ student developers at CGC University on Oct 10–11, 2026 for a 24-hour national hackathon focused on rapid prototyping and innovation.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="min-h-screen bg-[#FAF9F5] font-sans text-[#18181B] antialiased transition-colors duration-200 dark:bg-[#0F0F12] dark:text-zinc-100 overflow-x-hidden relative">
        <Providers>
          <CursorFxLayer />
          <Navbar />
          <main>{children}</main>
          <BottomRegisterBanner />
          <Footer />
        </Providers>
      </body>
    </html>
  );
}