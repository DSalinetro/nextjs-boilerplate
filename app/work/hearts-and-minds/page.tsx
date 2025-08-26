import Link from 'next/link';

export default function Page() {
  return (
    <main className="max-w-4xl mx-auto px-6 py-16">
      <Link href="/#portfolio" className="text-sm text-gray-500 hover:text-[#d4967d]">
        &larr; Back to Portfolio
      </Link>

      <h1 className="mt-4 text-4xl font-bold">Hearts &amp; Minds Foundation Identity</h1>
      <p className="text-gray-600 mb-6">
        Identity system focused on human connection and empathy-driven design.
      </p>

      <img
        src="/images/hearts-and-minds-logo.png"
        alt="Hearts & Minds Foundation"
        className="w-full rounded-xl border mb-6"
      />

      {/* Open the main external page; users can click its buttons from there */}
      <a
        href="https://dsalinetro.github.io/daniellesalinetro.github.io/Hearts-Minds-Foundation.html"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block px-4 py-2 rounded-lg border text-[#d4967d] hover:bg-[#d4967d] hover:text-white transition"
      >
        Open Hearts &amp; Minds Collection
      </a>
    </main>
  );
}
