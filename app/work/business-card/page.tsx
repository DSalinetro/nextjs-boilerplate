'use client';
import Link from 'next/link';

export default function BusinessCard() {
  return (
    <main className="max-w-4xl mx-auto px-6 py-10">
      <Link href="/#portfolio" className="text-sm text-gray-500 hover:text-[#d4967d]">&larr; Back to Portfolio</Link>
      <h1 className="mt-4 text-3xl font-bold">Professional Business Card</h1>
      <p className="text-gray-600 mt-1">Clean, elegant business card design with typography and layout.</p>

      <div className="mt-6 rounded-xl border bg-white p-3">
        <img src="/images/business-card.png" alt="Business Card" className="w-full rounded-lg"/>
      </div>
    </main>
  );
}
