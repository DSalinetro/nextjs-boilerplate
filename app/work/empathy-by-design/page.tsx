'use client';
import Link from 'next/link';

export default function EmpathyByDesign() {
  return (
    <main className="max-w-5xl mx-auto px-6 py-10">
      <div className="flex items-center justify-between">
        <Link href="/#portfolio" className="text-sm text-gray-500 hover:text-[#d4967d]">&larr; Back to Portfolio</Link>
        <a href="https://daniellesalinetro.design" target="_blank" rel="noopener noreferrer" className="text-[#d4967d] hover:underline">
          Portfolio Site <span aria-hidden>↗</span>
        </a>
      </div>

      <h1 className="mt-4 text-3xl font-bold">Empathy by Design — Hero Artwork</h1>
      <p className="text-gray-600 mt-1">Ongoing series exploring warmth, compassion and emotional resonance.</p>

      {/* banner image requested: moody-library.png */}
      <div className="mt-6 rounded-xl overflow-hidden">
        <img src="/images/moody-library.png" alt="Empathy by Design banner" className="w-full object-cover"/>
      </div>

      {/* small gallery tiles */}
      <div className="mt-6 grid sm:grid-cols-2 gap-4">
        <img src="/images/Flowers.png" alt="Flowers" className="w-full rounded-lg object-cover"/>
        <img src="/images/field-of-flowers.png" alt="Field of flowers" className="w-full rounded-lg object-cover"/>
      </div>
    </main>
  );
}
