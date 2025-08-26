import Link from 'next/link';

export default function Page() {
  return (
    <main className="max-w-4xl mx-auto px-6 py-16">
      <Link href="/#portfolio" className="text-sm text-gray-500 hover:text-[#d4967d]">
        &larr; Back to Portfolio
      </Link>

      <h1 className="mt-4 text-4xl font-bold">AdorablyInkedxo Brand Ecosystem</h1>
      <p className="text-gray-600 mb-6">
        Sustainable fashion brand with packaging, photography, and a Shopify e-commerce experience.
      </p>

      <img
        src="/images/adorably-inked-xo-brand-ecosystem.png"
        alt="AdorablyInkedxo—brand ecosystem"
        className="w-full rounded-xl border mb-6"
      />

      <a
        href="https://linktr.ee/daniellesalinetro"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block px-4 py-2 rounded-lg border text-[#d4967d] hover:bg-[#d4967d] hover:text-white transition"
      >
        View my Linktree
      </a>
    </main>
  );
}
