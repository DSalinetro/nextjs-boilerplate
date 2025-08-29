// app/layout.tsx
import './globals.css';
import type { ReactNode } from 'react';
import ClientToaster from '../components/ClientToaster'; // adjust to './components/ClientToaster' if components/ is inside /app

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        {/* Skip link for keyboard users */}
        <a href="#content" className="skip-link">Skip to content</a>

        {/* Focus target for skip link (not <main> to avoid nested <main>) */}
        <div id="content" tabIndex={-1}>
          {children}
        </div>

        <ClientToaster />
      </body>
    </html>
  );
}
