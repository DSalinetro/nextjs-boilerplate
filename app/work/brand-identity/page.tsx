import Link from 'next/link';

export default function Page() {
  return (
    <main className="max-w-4xl mx-auto px-6 py-16">
      <Link href="/#portfolio" className="text-sm text-gray-500 hover:text-[#d4967d]">
        &larr; Back to Portfolio
      </Link>

      <h1 className="mt-4 text-4xl font-bold">Brand Identity Portfolio Collection</h1>
      <p className="text-gray-600 mb-6">
        Selected identities across music, science, sustainability, hospitality, and tech.
      </p>

      <img src="/images/branding.png" alt="Brand Identity Collection" className="w-full rounded-xl border mb-6" />

      {/* Link to the GitHub repo as requested */}
      <a
        href="https://github.com/DSalinetro/branding-portfolio"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block px-4 py-2 rounded-lg border text-[#d4967d] hover:bg-[#d4967d] hover:text-white transition"
      >
        View GitHub Repository
      </a>
    </main>
  );
}
