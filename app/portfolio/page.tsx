import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Portfolio | Danielle Salinetro",
  description: "Enhance Branding Portfolio",
};

export default function Page() {
  return (
    <main className="min-h-[80vh]">
      <div className="relative w-full" style={{ paddingTop: "62vh" }}>
        <iframe
          src="PASTE_YOUR_FIGMA_SITE_URL_HERE"
          className="absolute inset-0 h-full w-full border-0"
          allow="fullscreen; clipboard-write"
          loading="lazy"
          title="Enhance Branding Portfolio"
        />
      </div>
    </main>
  );
}
