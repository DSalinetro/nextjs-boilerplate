import Link from 'next/link';

export default function Page() {
  return (
    <main className="max-w-4xl mx-auto px-6 py-16">
      <Link href="/#portfolio" className="text-sm text-gray-500 hover:text-[#d4967d]">
        &larr; Back to Portfolio
      </Link>

      <h1 className="mt-4 text-4xl font-bold">Professional Business Card</h1>
      <p className="text-gray-600 mb-6">Clean, elegant layout & typography.</p>

      {/* Just a big view, no external link */}
      <img src="/images/business-card.png" alt="Business card" className="w-full rounded-xl border" />
    </main>
  );
}
