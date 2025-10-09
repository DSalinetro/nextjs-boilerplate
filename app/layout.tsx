// app/layout.tsx
import './globals.css';
import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import { Suspense } from 'react';
import Script from 'next/script';
import { Analytics } from '@vercel/analytics/react';

// local components
import ClientToaster from '../components/ClientToaster';
import AdminBar from '../components/AdminBar';
import AccessibilitySwitcher from '../components/AccessibilitySwitcher';

export const metadata: Metadata = {
  metadataBase: new URL('https://daniellesalinetro.design'),
  title: {
    default: 'Danielle Salinetro',
    template: '%s — Danielle Salinetro',
  },
  description: 'Portfolio',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <AccessibilitySwitcher />
        <AdminBar />
        <ClientToaster />
        <Suspense>{children}</Suspense>
        <Analytics />
      </body>
    </html>
  );
}
