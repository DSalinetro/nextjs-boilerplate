import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Empathy by Design — Danielle Salinetro",
  description:
    "Creative Designer & Researcher specializing in empathy-driven branding, UX, and content.",
  openGraph: {
    title: "Empathy by Design — Danielle Salinetro",
    description:
      "Creative Designer & Researcher specializing in empathy-driven branding, UX, and content.",
    url: "https://daniellesalinetro.design",
    siteName: "Empathy by Design",
    images: [{ url: "/images/og-hero.jpg", width: 1200, height: 630 }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Empathy by Design — Danielle Salinetro",
    description:
      "Creative Designer & Researcher specializing in empathy-driven branding, UX, and content.",
    images: ["/images/og-hero.jpg"],
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen`}
      >
        {children}
      </body>
    </html>
  );
}
