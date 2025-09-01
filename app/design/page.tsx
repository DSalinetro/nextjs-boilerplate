// app/design/page.tsx
'use client';

import Link from 'next/link';
import Image from 'next/image';
import { LINKS } from '../../lib/links';

export default function DesignPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Top bar */}
      <div className="mx-auto w-full max-w-6xl px-6 py-8">
        <Link
          href="/"
          className="text-sm font-medium underline underline-offset-4 hover:opacity-80"
          aria-label="Back home"
        >
          ← Back home
        </Link>
      </div>

      {/* Header */}
      <header className="mx-auto w-full max-w-6xl px-6">
        <div className="flex items-end justify-between gap-6">
          <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">
            Portfolio
          </h1>
          {/* Link to the complete external collection */}
          <a
            href={LINKS.portfolioCollection}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-2xl px-4 py-2 text-white shadow transition hover:opacity-90"
            style={{ backgroundColor: '#D49670' }}
          >
            View Complete Portfolio Collection
          </a>
        </div>
        <p className="mt-3 max-w-2xl text-neutral-700">
          Selected work hubs and case studies. Click a card to open the hub.
        </p>
      </header>

      {/* Cards */}
      <section className="mx-auto mt-8 grid w-full max-w-6xl gap-6 px-6 sm:grid-cols-2">
        {/* Enhance Branding Portfolio — internal hub */}
        <Link
          href={LINKS.brandingCollection}
          className="group relative overflow-hidden rounded-2xl border border-neutral-200 bg-neutral-50 shadow-sm transition hover:shadow-md"
          aria-label="Open Enhance Branding Portfolio hub"
        >
          <div className="relative aspect-[4/3] w-full">
            <Image
              src="/images/enhance-branding-card.png"
              alt="Enhance Branding Portfolio cover preview"
              fill
              className="object-cover transition group-hover:scale-[1.02]"
              priority
            />
          </div>
          <div className="p-4">
            <h2 className="text-lg font-semibold">Enhance Branding Portfolio</h2>
            <p className="mt-1 text-sm text-neutral-700">
              Brand color systems, typography, and identity work (opens hub).
            </p>
          </div>
        </Link>

        {/* Empathy Audit — canonical Squarespace */}
        <a
          href={LINKS.empathyAudit}
          target="_blank"
          rel="noopener noreferrer"
          className="group relative overflow-hidden rounded-2xl border border-neutral-200 bg-neutral-50 shadow-sm transition hover:shadow-md"
          aria-label="Open Empathy Audit (Squarespace)"
        >
          <div className="relative aspect-[4/3] w-full bg-neutral-100">
            <div className="absolute inset-0 grid place-items-center text-neutral-400">
              Empathy Audit
            </div>
          </div>
          <div className="p-4">
            <h2 className="text-lg font-semibold">Empathy Audit</h2>
            <p className="mt-1 text-sm text-neutral-700">
              Framework guide (canonical Squarespace page).
            </p>
          </div>
        </a>
      </section>

      {/* Optional: Hearts & Minds link (external Figma site) */}
      <section className="mx-auto w-full max-w-6xl px-6 py-12">
        <a
          href={LINKS.heartsMindsPortfolio}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center rounded-2xl px-5 py-3 text-white shadow transition hover:opacity-90"
          style={{ backgroundColor: '#D49670' }}
        >
          Open Hearts & Minds (Figma)
        </a>
      </section>
    </main>
  );
}
