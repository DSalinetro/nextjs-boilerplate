import type { Metadata } from "next";
import "./globals.css";
// If you used "@/components/…", keep it.
// With your repo structure, a safe relative import is:
import AccessibilitySwitcher from "../components/ui/AccessibilitySwitcher";

export const metadata: Metadata = {
  title: "Empathy by Design",
  description: "Danielle Salinetro — Portfolio",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <AccessibilitySwitcher />
        {children}
      </body>
    </html>
  );
}
