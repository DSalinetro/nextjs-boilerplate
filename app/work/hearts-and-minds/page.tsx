'use client';
import Link from 'next/link';

export default function HeartsAndMinds() {
  return (
    <main className="max-w-4xl mx-auto px-6 py-10">
      <Link href="/#portfolio" className="text-sm text-gray-500 hover:text-[#d4967d]">&larr; Back to Portfolio</Link>
      <h1 className="mt-4 text-3xl font-bold">Hearts & Minds Foundation Identity</h1>
      <p className="text-gray-600 mt-1">Comprehensive identity system focusing on human connection and empathy-driven design.</p>

      <div className="mt-6 rounded-xl border bg-white p-3">
        <img src="/images/hearts-and-minds-logo.png" alt="Hearts & Minds" className="w-full rounded-lg"/>
      </div>

      <a
        href="https://dsalinetro.github.io/daniellesalinetro.github.io/Hearts-Minds-Foundation.html"
        target="_blank" rel="noopener noreferrer"
        className="inline-block mt-6 px-3 py-2 rounded-md bg-[#d4967d] text-white hover:bg-[#c47f64]"
      >
        View external case study
      </a>
    </main>
  );
}
