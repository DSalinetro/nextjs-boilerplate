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

export default function EnhanceBrandingPortfolioPage() {
  return (
    <main className="mx-auto max-w-5xl px-4 py-8 sm:py-10">
      {/* top bar (no "Open in Figma" link) */}
      <div className="relative mb-8 flex items-center justify-center">
        <Link
          href="/design"
          className="absolute left-0 inline-flex items-center gap-1 text-[#D49670] hover:underline"
        >
          <ChevronLeft className="h-4 w-4" />
          Back home
        </Link>

        <span className="text-sm font-semibold tracking-wide text-[#D49670]">
          Danielle Salinetro
        </span>
      </div>

      {/* header */}
      <header className="mb-6 sm:mb-8 text-center">
        <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight text-neutral-900">
          Enhance Branding Portfolio
        </h1>
        <p className="mt-2 max-w-2xl mx-auto text-sm sm:text-base text-neutral-600">
          A collection of empathy-driven branding work hosted on Figma.
        </p>
      </header>

      {/* hero card */}
      <section className="rounded-2xl border border-neutral-200/70 bg-white shadow-sm overflow-hidden">
        <div className="relative aspect-[16/9] w-full bg-neutral-50">
          <Image
            src="/images/enhance-branding-card.png"
            alt="Enhance Branding Portfolio cover image"
            fill
            className="object-cover"
            priority
          />
        </div>

        <div className="p-5 sm:p-6 text-center">
          <p className="text-sm sm:text-base text-neutral-700">
            Explore visual identities, systems, and artifacts developed with a human-centered lens.
          </p>

          {/* brand-colored CTA */}
          <div className="mt-4">
            <a
              href={LINKS.enhanceBrandingSite}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl border border-[#D49670] bg-[#D49670] px-5 py-2.5 text-white font-medium shadow-sm transition hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D49670]/40"
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
