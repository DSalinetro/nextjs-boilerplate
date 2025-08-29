// app/work/hearts-and-minds/page.tsx
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
// import { notFound } from "next/navigation"; // optional if you want to 404 temporarily

export const metadata = {
  title: "Hearts & Minds | Danielle Salinetro",
  description: "Branding case study preview for Hearts & Minds.",
};

export default async function Page({
  searchParams,
}: {
  // Next 15 can pass searchParams as a Promise — accept that shape
  searchParams?: Promise<Record<string, string | string[] | undefined>>;
}) {
  // Normalize search params (works whether Promise or undefined)
  const sp = (await searchParams) ?? {};
  const businessParam = Array.isArray(sp.business) ? sp.business[0] : sp.business;

  // 🔒 Single on/off switch for any dev-only artifacts
  const SHOW_BUSINESS = false;

  // Only show dev tools when the toggle is on AND ?business=true
  const showBusinessTools = SHOW_BUSINESS && businessParam === "true";

  // If you temporarily want to 404 while iterating, uncomment:
  // return notFound();

  return (
    <main className="mx-auto max-w-5xl px-6 py-12">
      {/* Back link */}
      <nav className="mb-6">
        <Link
          href="/work"
          className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground transition-colors"
        >
          <ArrowLeft className="mr-1 h-4 w-4" />
          Back to portfolio
        </Link>
      </nav>

      <header className="mb-8">
        <h1 className="text-3xl font-semibold tracking-tight">Hearts &amp; Minds</h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Community-focused brand exploration (preview).
        </p>
      </header>

      <section className="overflow-hidden rounded-2xl border bg-white/50 shadow-sm">
        <div className="relative aspect-[16/9] w-full">
          {/* Click-to-enlarge: opens the original image in a new tab */}
          <a
            href="/images/hearts-minds/hero.jpg"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Open full-size Hearts & Minds hero image"
            className="group block h-full w-full"
          >
            <Image
              src="/images/hearts-minds/hero.jpg" // points to public/images/hearts-minds/hero.jpg
              alt="Hearts & Minds hero"
              width={1600}
              height={900}
              className="h-full w-full object-cover"
              priority
            />
            {/* Subtle badge appears on hover */}
            <span className="pointer-events-none absolute bottom-3 right-3 rounded-full bg-black/60 px-3 py-1 text-xs text-white opacity-0 transition-opacity group-hover:opacity-100">
              Click to enlarge
            </span>
          </a>
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

      {/* If you re-add letterhead/business-card later, wrap them like this:
      {SHOW_BUSINESS && (
        <>
          // ...your letterhead / business-card JSX...
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
