export default function Letterhead() {
  return (
    <main className="max-w-4xl mx-auto px-6 py-16">
      <a href="/portfolio" className="text-sm text-gray-500 hover:text-gray-800">← Back to Portfolio</a>
      <h1 className="mt-4 text-4xl font-bold">Corporate Letterhead System</h1>
      <p className="mt-3 text-gray-600">Cohesive letterhead system maintaining brand standards and hierarchy.</p>

      <div className="mt-8 rounded-xl overflow-hidden shadow">
        <img src="/images/letterhead.png" alt="Letterhead design" className="w-full h-auto" />
      </div>
    </main>
  );
}
