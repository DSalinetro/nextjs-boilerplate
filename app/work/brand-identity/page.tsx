'use client';
import Link from 'next/link';

export default function BrandIdentity() {
  return (
    <main className="max-w-5xl mx-auto px-6 py-10">
      <div className="flex items-center justify-between">
        <Link href="/#portfolio" className="text-sm text-gray-500 hover:text-[#d4967d]">&larr; Back to Portfolio</Link>
        <div className="flex gap-3">
          <a href="https://dsalinetro.github.io/branding-portfolio/" target="_blank" rel="noopener noreferrer" className="text-[#d4967d] hover:underline">GitHub Collection</a>
          <a href="https://daniellesalinetro-portfolio.squarespace.com/config/website" target="_blank" rel="noopener noreferrer" className="text-[#d4967d] hover:underline">Squarespace Gallery</a>
        </div>
      </div>

      <h1 className="mt-4 text-3xl font-bold">Brand Identity Portfolio Collection</h1>
      <p className="text-gray-600 mt-1">Selected identities across music, science, sustainability, hospitality, and tech.</p>

      <div className="mt-6 rounded-xl border bg-white p-3">
        <img src="/images/branding.png" alt="Brand Identity Collection" className="w-full rounded-lg"/>
      </div>
    </main>
  );
}
