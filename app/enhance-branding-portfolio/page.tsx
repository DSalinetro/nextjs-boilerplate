// app/enhance-branding-portfolio/page.tsx
import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { ChevronLeft, ExternalLink } from 'lucide-react';
import { LINKS } from '../../lib/links';

export const metadata: Metadata = {
  title: 'Enhance Branding Portfolio | Danielle Salinetro',
  description: 'A focused hub for Danielle’s Enhance Branding Portfolio.',
};

export default function Page() {
  return (
    <main className="mx-auto max-w-5xl px-4 py-8 sm:py-10">
      <div className="relative mb-8 flex items-center justify-center">
        <Link href="/design" className="absolute left-0 inline-flex items-center gap-1 text-[#D49670] hover:underline" aria-label="Back to portfolio home">
          <ChevronLeft className="h-4 w-4" />
          Back home
        </Link>
        <span className="text-sm font-semibold tracking-wide text-[#D49670]">Danielle Salinetro</span>
      </div>

      <header className="mb-6 text-center sm:mb-8">
        <h1 className="text-3xl font-semibold tracking-tight text-neutral-900 sm:text-4xl">Enhance Branding Portfolio</h1>
        <p className="mx-auto mt-2 max-w-2xl text-sm text-neutral-600 sm:text-base">
          A collection of empathy-driven branding work hosted on Figma.
        </p>
      </header>

      <section className="overflow-hidden rounded-2xl border border-neutral-200/70 bg-white shadow-sm">
        <div className="relative aspect-[16/9] w-full bg-neutral-50">
          <Image
            src="/images/enhance-branding-card.png"
            alt="Enhance Branding Portfolio cover image"
            fill
            className="object-cover"
            priority
            sizes="(min-width:1024px) 960px, (min-width:640px) 80vw, 100vw"
          />
        </div>

        <div className="p-5 text-center sm:p-6">
          <p className="text-sm text-neutral-700 sm:text-base">
            Explore visual identities, systems, and artifacts developed with a human-centered lens.
          </p>
          <div className="mt-4">
            <a
              href={LINKS.enhanceBrandingSite}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl border border-[#D49670] bg-[#D49670] px-5 py-2.5 font-medium text-white shadow-sm transition hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D49670]/40"
              aria-label="Open Enhance Branding Portfolio (opens in a new tab)"
            >
              Open Enhance Branding Portfolio
              <ExternalLink className="h-4 w-4" />
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
