// app/resume/page.tsx
'use client';

import Link from 'next/link';
import { useCallback } from 'react';

const PDF_PATH = '/resume_web.pdf'; // place your redacted PDF (no phone) in /public as resume_web.pdf

export const metadata = {
  title: 'Resume – Danielle Salinetro',
  description:
    'Web-safe resume with direct PDF actions. Phone number omitted on the page; use email/LinkedIn for phone by request.',
};

export default function ResumePage() {
  const handlePrint = useCallback(() => {
    // Open the PDF in a new tab and invoke the browser print dialog
    const w = window.open(PDF_PATH, '_blank', 'noopener,noreferrer');
    if (!w) return; // popup blocked
    // Some browsers fire load on the <embed> inside the PDF viewer; a small delay is a safer fallback.
    const tryPrint = () => {
      try {
        w.focus();
        w.print();
      } catch {
        // best-effort; if blocked the user can print from the viewer UI
      }
    };
    // Delay to let the viewer initialize
    setTimeout(tryPrint, 600);
  }, []);

  return (
    <main className="min-h-screen bg-white">
      <section className="mx-auto max-w-3xl px-6 py-16">
        {/* Header */}
        <header className="mb-8">
          <h1 className="text-3xl font-bold tracking-tight">Danielle Salinetro</h1>
          <p className="mt-2 text-neutral-600">
            Creative Designer & Researcher — Empathy-driven Branding, UX & Content
          </p>

          {/* Web-safe contact (no phone on-page) */}
          <div className="mt-4 flex flex-wrap gap-3">
            <a
              href="mailto:dsalinetro@pm.me"
              className="inline-flex items-center rounded-lg border px-3 py-2 text-sm font-medium hover:bg-neutral-50"
            >
              Email me
            </a>
            <a
              href="https://linkedin.com/in/danielle-salinetro"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center rounded-lg border px-3 py-2 text-sm font-medium hover:bg-neutral-50"
            >
              LinkedIn
            </a>
            <Link
              href="/design#contact"
              className="inline-flex items-center rounded-lg bg-[#D49670] px-3 py-2 text-sm font-semibold text-white hover:opacity-90"
            >
              Request phone number
            </Link>
          </div>

          <p className="mt-2 text-xs text-neutral-500">
            For privacy, my phone number isn’t displayed on this page. I’m happy to share it on request.
          </p>
        </header>

        {/* Actions: Download / Open / Print */}
        <div className="mb-6 flex flex-wrap gap-3">
          <a
            href={PDF_PATH}
            download
            className="inline-flex items-center rounded-lg border px-3 py-2 text-sm font-medium hover:bg-neutral-50"
          >
            Download PDF
          </a>
          <a
            href={PDF_PATH}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center rounded-lg border px-3 py-2 text-sm font-medium hover:bg-neutral-50"
          >
            Open PDF
          </a>
          <button
            type="button"
            onClick={handlePrint}
            className="inline-flex items-center rounded-lg border px-3 py-2 text-sm font-semibold hover:bg-neutral-50"
          >
            Print
          </button>
        </div>

        {/* Web-friendly resume summary (no phone) */}
        <section className="prose prose-neutral max-w-none">
          <h2>Summary</h2>
          <p>
            Human-centered designer blending research, storytelling, and brand systems to create empathetic,
            high-impact work across digital and print.
          </p>

          <h2>Core Skills</h2>
          <ul>
            <li>Brand Identity & Systems</li>
            <li>UX Research & Content Strategy</li>
            <li>Visual Storytelling & Art Direction</li>
            <li>Data Visualization & Presentation Design</li>
          </ul>

          <h2>Selected Experience</h2>
          <ul>
            <li>
              <strong>Creative Designer / Researcher</strong> — Independent (—Present)<br />
              Led brand ecosystems, UX concepts, and content for multi-industry clients; shipped empathy-driven
              case studies and portfolio artifacts.
            </li>
            {/* Add additional roles/achievements here */}
          </ul>

          <h2>Education & Certifications</h2>
          <ul>
            <li>Google UX Certificate — In progress</li>
            <li>CPTC — In progress</li>
            {/* Add more as needed */}
          </ul>
        </section>

        {/* Tip box */}
        <div className="mt-10 rounded-xl border bg-neutral-50 p-4 text-sm text-neutral-700">
          Make sure the downloadable PDF is a redacted web version (no phone). Put it at
          <code className="mx-1 rounded bg-white px-1 py-0.5">/public/resume_web.pdf</code>.
        </div>
      </section>
    </main>
  );
}
