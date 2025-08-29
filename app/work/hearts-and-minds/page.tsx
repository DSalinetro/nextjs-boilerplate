// app/work/hearts-and-minds/page.tsx
import Image from "next/image";
import { notFound } from "next/navigation";

export const metadata = {
  title: "Hearts & Minds | Danielle Salinetro",
  description: "Branding case study preview for Hearts & Minds.",
};

export default function Page({
  searchParams,
}: {
  searchParams: Record<string, string>;
}) {
  // 🔒 Single on/off switch for *any* business artifacts or dev tools
  const SHOW_BUSINESS = false;

  // Optional gated tools exist, but now also require SHOW_BUSINESS = true
  const showBusinessTools = SHOW_BUSINESS && searchParams?.business === "true";

  // If you temporarily want to 404 while iterating, uncomment:
  // return notFound();

  return (
    <main className="mx-auto max-w-5xl px-6 py-12">
      <header className="mb-8">
        <h1 className="text-3xl font-semibold tracking-tight">Hearts &amp; Minds</h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Community-focused brand exploration (preview).
        </p>
      </header>

      <section className="overflow-hidden rounded-2xl border bg-white/50 shadow-sm">
        <div className="relative w-full">
          <Image
            src="/images/hearts-minds/hero.jpg" // points to public/images/hearts-minds/hero.jpg
            alt="Hearts & Minds hero"
            width={1600}
            height={900}
            className="w-full h-auto object-cover"
            priority
          />
        </div>
        <div className="p-6">
          <h2 className="text-xl font-medium">Project Overview</h2>
          <p className="mt-2 text-sm text-muted-foreground">
            A clean, empathetic visual system exploring typography, color, and messaging for
            community trust. Artifacts (business tools, letterhead, and card) are hidden for
            now and will return once finalized.
          </p>
        </div>
      </section>

      {/* If you ever re-add letterhead/business-card blocks, wrap them like this:
      {SHOW_BUSINESS && (
        <>
          // ...your letterhead / business-card JSX goes here...
        </>
      )}
      */}

      {showBusinessTools ? (
        <section className="mt-10">
          <div className="rounded-xl border bg-emerald-50/40 p-4 text-sm">
            <p className="font-medium">Business tools (dev-only)</p>
            <p className="text-muted-foreground">
              Export views and print nodes are available here during development.
            </p>
          </div>
        </section>
      ) : null}
    </main>
  );
}
