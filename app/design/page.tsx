'use client';

import Link from 'next/link';

export default function Home() {
  return (
    <main className="min-h-screen grid place-items-center bg-white">
      <div className="mx-auto w-full max-w-3xl px-6 text-center">
        <h1 className="text-4xl font-semibold tracking-tight">Danielle Salinetro</h1>
        <p className="mt-3 text-neutral-700">
          Creative Designer & Researcher — explore my work below.
        </p>

        <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
          <Link
            href="/design"
            aria-label="Open Portfolio"
            className="rounded-2xl px-5 py-3 text-white shadow transition hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D49670]/40"
            style={{ backgroundColor: '#D49670' }} // brand accent
          >
            Open Portfolio
          </Link>

          <a
            href="https://linktr.ee/daniellesalinetro"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Open Linktree (opens in a new tab)"
            className="rounded-2xl border px-5 py-3 transition hover:bg-neutral-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-300"
          >
            Linktree
          </a>
        </div>
      </div>
    </main>
  );
}
