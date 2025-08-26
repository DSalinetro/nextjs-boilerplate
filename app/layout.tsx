// app/layout.tsx
import './globals.css';
import type { Metadata } from 'next';
import AccessibilitySwitcher from '../components/AccessibilitySwitcher';

export const metadata: Metadata = {
  title: 'Danielle Salinetro — Empathy by Design',
  description: 'Empathy by Design',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="antialiased">
        <AccessibilitySwitcher />
        {children}
      </body>
    </html>
  );
}
