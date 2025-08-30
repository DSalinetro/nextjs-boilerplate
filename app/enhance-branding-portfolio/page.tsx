'use client';

import Link from 'next/link';
import { ArrowLeft, ExternalLink } from 'lucide-react';

export default function Page() {
  return (
    <main className="min-h-screen bg-white">
      {/* Top bar */}
      <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md border-b border-black/10 bg-white/70">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          {/* LEFT: Back + Brand */}
          <div className="flex items-center gap-6">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-gray-700 hover:text-black"
              aria-label="Back to home"
            >
              <ArrowLeft size={18} /> Back home
            </Link>
            <div className="text-xl font-bold">Danielle Salinetro</div>
          </div>

          {/* RIGHT: Open Figma */}
          <a
            href="https://daniellesalinetrodesign.figma.site/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-[#D49670] font-semibold hover:underline"
          >
            Open in Figma <ExternalLink size={16} />
          </a>
        </div>
      </header>

      {/* Page content */}
      <section className="pt-28 pb-16">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-3">
            Enhance Branding Portfolio
          </h1>
          <p className="text-gray-600">
            A collection of empathy-driven branding work hosted on Figma.
          </p>
          <div className="mt-6">
            <a
              href="https://daniellesalinetrodesign.figma.site/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl border px-4 py-2 font-medium hover:bg-black/5"
            >
              Open Enhance Branding Portfolio <ExternalLink size={16} />
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
