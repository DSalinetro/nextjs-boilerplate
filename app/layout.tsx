import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Danielle Salinetro — Empathy by Design",
  description: "Portfolio",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        {/* TEMP: Tailwind CDN so the site is styled right away */}
        <script src="https://cdn.tailwindcss.com"></script>
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
