export default function HeartsAndMinds() {
  return (
    <main className="max-w-4xl mx-auto px-6 py-16">
      <a href="/portfolio" className="text-sm text-gray-500 hover:text-gray-800">← Back to Portfolio</a>
      <h1 className="mt-4 text-4xl font-bold">Hearts & Minds Foundation Identity</h1>
      <p className="mt-3 text-gray-600">Comprehensive identity system focusing on human connection and empathy-driven design.</p>

      <div className="mt-8 rounded-xl overflow-hidden shadow">
        <img src="/images/hearts-and-minds-logo.png" alt="Hearts & Minds" className="w-full h-auto" />
      </div>

      <div className="mt-8">
        <a
          href="https://dsalinetro.github.io/daniellesalinetro.github.io/Hearts-Minds-Foundation.html"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[#d4967d] text-white hover:bg-[#c47f64]"
        >
          View external case study
        </a>
      </div>
    </main>
  );
}
