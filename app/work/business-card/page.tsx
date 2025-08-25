export default function BusinessCard() {
  return (
    <main className="max-w-4xl mx-auto px-6 py-16">
      <a href="/portfolio" className="text-sm text-gray-500 hover:text-gray-800">← Back to Portfolio</a>
      <h1 className="mt-4 text-4xl font-bold">Professional Business Card</h1>
      <p className="mt-3 text-gray-600">Clean, elegant card with sophisticated typography and layout.</p>

      <div className="mt-8 rounded-xl overflow-hidden shadow">
        <img src="/images/business-card.png" alt="Business card design" className="w-full h-auto" />
      </div>
    </main>
  );
}
