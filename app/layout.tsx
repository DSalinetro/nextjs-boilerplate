// app/layout.tsx
// app/layout.tsx
export const metadata = {
  metadataBase: new URL('https://daniellesalinetro.design'),
};
import './globals.css';
import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import { Suspense } from 'react';
import Script from 'next/script';
import { Analytics } from '@vercel/analytics/react';

// local components (keep relative imports to avoid alias issues on Vercel)
import ClientToaster from '../components/ClientToaster';
import AdminBar from '../components/AdminBar';
import AccessibilitySwitcher from '../components/AccessibilitySwitcher'; // ← ensure this path matches your project

export const metadata: Metadata = {
  title: 'Danielle Salinetro',
  description: 'Portfolio',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      {/* Initialize accessibility data-* attributes BEFORE hydration to avoid FOUC */}
      <Script id="a11y-init" strategy="beforeInteractive">
        {`
          try {
            // Accept either a single "a11y" JSON blob or individual keys
            const saved = JSON.parse(localStorage.getItem('a11y') || '{}');
            const get = (k) => saved[k] ?? localStorage.getItem(k);

            const flags = {
              dyslexia: get('a11y:dyslexia') === 'true' || get('dyslexia') === 'true' || saved.dyslexia === true,
              highContrast: get('a11y:highContrast') === 'true' || get('highContrast') === 'true' || saved.highContrast === true,
              reduceMotion: get('a11y:reduceMotion') === 'true' || get('reduceMotion') === 'true' || saved.reduceMotion === true,
              cvd: get('a11y:cvd') || saved.cvd || '' // e.g., 'protanopia' | 'deuteranopia' | 'tritanopia'
            };

            const root = document.documentElement;
            if (flags.dyslexia) root.setAttribute('data-dyslexia', 'true');
            if (flags.highContrast) root.setAttribute('data-high-contrast', 'true');
            if (flags.reduceMotion) root.setAttribute('data-reduce-motion', 'true');
            if (flags.cvd && typeof flags.cvd === 'string') root.setAttribute('data-cvd', flags.cvd);
          } catch (e) {
            // no-op
          }
        `}
      </Script>

      <body className="bg-white text-neutral-900 antialiased">
        {/* Accessible skip link */}
        <a href="#content" className="skip-link">Skip to content</a>

        {/* Main content wrapper */}
        <div id="content" tabIndex={-1}>{children}</div>

        {/* Toasts / Admin */}
        <ClientToaster />
        <Suspense fallback={null}><AdminBar /></Suspense>

        {/* Global Accessibility Switcher (fixed bottom-left; handle its z-index inside component) */}
        <AccessibilitySwitcher />

        {/* Vercel analytics */}
        <Analytics />
      </body>
    </html>
  );
}
