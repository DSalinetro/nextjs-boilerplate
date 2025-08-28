'use client';

import React from 'react';

export default function WebsiteResume() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Header / Actions (hidden when printing) */}
      <header className="sticky top-0 z-10 bg-white/80 backdrop-blur border-b border-gray-200 print:hidden">
        <div className="max-w-3xl mx-auto px-4 py-4 flex items-center justify-between gap-3">
          <h1 className="text-xl font-semibold tracking-tight">
            Danielle Salinetro — Resume
          </h1>
          <div className="flex items-center gap-2">
            <a
              href="/api/resume/download"
              className="rounded-xl px-3 py-2 border text-sm hover:bg-gray-50"
            >
              Download PDF
            </a>
            <a
              href="/Danielle-Salinetro-Resume.pdf"
              target="_blank"
              rel="noreferrer noopener"
              className="rounded-xl px-3 py-2 border text-sm hover:bg-gray-50"
            >
              Open PDF
            </a>
            <button
              onClick={() => window.print()}
              className="rounded-xl px-3 py-2 text-sm"
              style={{ backgroundColor: '#D49670', color: 'white' }}
            >
              Print
            </button>
          </div>
        </div>
      </header>

      {/* Simple body placeholder (we'll replace with your optimized component later) */}
      <main className="max-w-3xl mx-auto px-4 py-10">
        <section className="mb-6">
          <h2 className="text-2xl font-bold leading-tight">Danielle N. Salinetro</h2>
          <p className="text-sm text-gray-600">
            Kansas City, MO (Remote) · 636.252.5894 ·{' '}
            <a href="mailto:dsalinetro@pm.me" className="underline">dsalinetro@pm.me</a>
          </p>
          <p className="text-sm text-gray-600">
            <a href="https://daniellesalinetro.design" className="underline">
              daniellesalinetro.design
            </a>
          </p>
        </section>

        <section className="space-y-3">
          <h3 className="text-lg font-semibold" style={{ color: '#D49670' }}>Summary</h3>
          <p className="text-sm leading-6 text-gray-800">
            Creative Designer & Researcher with cross-disciplinary experience in mortgage operations,
            brand design, and content marketing. Strengths in research, documentation, and empathetic UX.
          </p>
        </section>
      </main>

      {/* Print-only footer */}
      <footer className="hidden print:block text-center text-xs text-gray-500 my-6">
        © {new Date().getFullYear()} Danielle Salinetro — daniellesalinetro.design
      </footer>

      <style jsx global>{`
        @media print {
          @page { margin: 0.5in; }
          header { display: none !important; }
          a { color: black !important; text-decoration: none !important; }
        }
      `}</style>
    </div>
  );
}
