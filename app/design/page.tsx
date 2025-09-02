'use client';

import Link from 'next/link';
import Image from 'next/image';

export default function DesignPage() {
  return (
    <main className="min-h-screen px-6 py-12">
      {/* Hero */}
      <header className="mx-auto mb-10 max-w-4xl text-center">
        <h1 className="text-4xl font-semibold tracking-tight">Portfolio</h1>
        <p className="mx-auto mt-3 max-w-2xl text-neutral-700">
          Selected work in branding, systems, and storytelling.
        </p>
      </header>

      {/* Cards grid */}
      <section className="mx-auto grid max-w-5xl gap-6 sm:grid-cols-2">
        {/* Enhance Branding Portfolio card */}
        <article className="overflow-hidden rounded-2xl border border-neutral-200/70 bg-white shadow-sm">
          <Link href="/enhance-branding-portfolio" className="block">
            <div className="relative aspect-[16/10] w-full bg-neutral-50">
              <Image
                src="/images/enhance-branding-card.png"
                alt="Preview for the Enhance Branding Portfolio"
                fill
                className="object-cover"
                sizes="(min-width:1024px) 560px, (min-width:640px) 50vw, 100vw"
                priority
              />
            </div>
            <div className="p-5">
              <h2 className="text-lg font-medium">Enhance Branding Portfolio</h2>
              <p className="mt-1 text-sm text-neutral-600">
                A Figma-hosted collection of identity systems and applications.
              </p>
              <div className="mt-3">
                <span className="inline-flex items-center rounded-xl bg-[#D49670] px-4 py-2 text-sm font-medium text-white">
                  View case
                </span>
              </div>
            </div>
          </Link>
        </article>

        {/* (Optional) Add more cards later */}
      </section>
    </main>
  );
}
