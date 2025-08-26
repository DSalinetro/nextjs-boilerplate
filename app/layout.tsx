import type { Metadata } from "next";
import "./globals.css";
// With your repo structure, this relative import is correct:
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
