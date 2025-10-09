// app/layout.tsx  (SERVER component)
import './globals.css';
import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import { Suspense } from 'react';
import { Analytics } from '@vercel/analytics/react';

// Keep only ONE metadata export in this file
export const metadata: Metadata = {
  title: 'Danielle Salinetro',
  description: 'Portfolio',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        {/* Put *everything* that renders under the layout inside Suspense */}
        <Suspense fallback={null}>
          {children}
        </Suspense>
        <Analytics />
      </body>
    </html>
  );
}
