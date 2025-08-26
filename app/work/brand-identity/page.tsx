'use client';
import Link from 'next/link';

export default function BrandIdentityPage() {
  return (
    <main className="max-w-4xl mx-auto px-6 py-16">
      <Link href="/design#portfolio" className="text-sm text-gray-500 hover:text-[#d4967d]">
        &larr; Back to Portfolio
      </Link>

      <h1 className="mt-4 text-4xl font-bold">Brand Identity Portfolio Collection</h1>
      <p className="mt-3 text-gray-600">
        Selected identities across music, science, sustainability, hospitality, and tech.
      </p>

      <a
        href="https://dsalinetro.github.io/branding-portfolio/"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block mt-6 rounded-lg px-5 py-3 bg-[#d4967d] text-white font-semibold hover:bg-[#c47f64]"
      >
        Visit the live collection
      </a>
    </main>
  );
}
