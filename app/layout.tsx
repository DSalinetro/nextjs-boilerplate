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
        {children}
        <AccessibilitySwitcher />
      </body>
    </html>
  );
}
