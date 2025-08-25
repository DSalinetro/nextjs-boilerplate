export default function BrandIdentityCollection() {
  return (
    <main className="max-w-4xl mx-auto px-6 py-16">
      <a href="/portfolio" className="text-sm text-gray-500 hover:text-gray-800">← Back to Portfolio</a>
      <h1 className="mt-4 text-4xl font-bold">Brand Identity Portfolio Collection</h1>
      <p className="mt-3 text-gray-600">Selected identities across music, science, sustainability, hospitality, and tech.</p>

      <div className="mt-8 rounded-xl overflow-hidden shadow">
        <img src="/images/branding.png" alt="Brand identity portfolio grid" className="w-full h-auto" />
      </div>

      <div className="mt-8">
        <a
          href="https://www.daniellesalinetro.design/branding-portfolio-collection"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[#d4967d] text-white hover:bg-[#c47f64]"
        >
          View external collection
        </a>
      </div>
    </main>
  );
}
