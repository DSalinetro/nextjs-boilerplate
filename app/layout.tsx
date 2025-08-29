// app/layout.tsx
import './globals.css';
import type { ReactNode } from 'react';
import { Suspense } from 'react';
import ClientToaster from '../components/ClientToaster';
import AdminBar from '../components/AdminBar';

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <a href="#content" className="skip-link">Skip to content</a>
        <div id="content" tabIndex={-1}>
          {children}
        </div>

        <ClientToaster />
        <Suspense fallback={null}>
          <AdminBar />
        </Suspense>
      </body>
    </html>
  );
}
