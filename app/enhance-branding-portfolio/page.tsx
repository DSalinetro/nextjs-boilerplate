import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Enhance Branding Portfolio | Danielle Salinetro",
  description: "Branding work hosted on Figma Make.",
};

export default function Page() {
  return (
    <main className="min-h-screen">
      <iframe
        src="https://daniellesalinetrodesign.figma.site/"
        className="w-full h-screen border-0"
        loading="lazy"
        allow="fullscreen; clipboard-write"
        title="Enhance Branding Portfolio"
      />
    </main>
  );
}
