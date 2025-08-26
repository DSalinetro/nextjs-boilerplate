// app/layout.tsx
import type { Metadata } from 'next';
import './globals.css';
import AccessibilitySwitcher from '../components/AccessibilitySwitcher';

export const metadata: Metadata = {
  title: 'Danielle Salinetro — Empathy by Design',
  description: 'Portfolio',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="antialiased">
        {/* Skip to content (appears when focused) */}
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3
                     focus:z-[10000] focus:rounded-xl focus:bg-white focus:px-3 focus:py-2
                     focus:text-black"
        >
          Skip to content
        </a>

        {/* Main content wrapper for skip link target */}
        <div id="main">{children}</div>

        <AccessibilitySwitcher />
      </body>
    </html>
  );
}
