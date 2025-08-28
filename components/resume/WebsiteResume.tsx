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

           {/* Resume Body (embed the exact PDF so it matches 1:1) */}
      <main className="max-w-5xl mx-auto px-4 py-6">
        <div className="w-full h-[calc(100vh-160px)] border rounded-lg overflow-hidden">
          <object
            data="/Danielle-Salinetro-Resume.pdf#view=FitH"
            type="application/pdf"
            className="w-full h-full"
          >
            {/* Fallback if PDF viewer is blocked */}
            <div className="p-6 text-sm text-gray-700">
              Can’t display the PDF here. Please use
              {' '}
              <a className="underline" href="/Danielle-Salinetro-Resume.pdf" target="_blank" rel="noreferrer">
                Open PDF
              </a>
              {' '}or{' '}
              <a className="underline" href="/api/resume/download">
                Download PDF
              </a>.
            </div>
          </object>
        </div>
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
