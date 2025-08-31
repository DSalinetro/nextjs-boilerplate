// app/resume/page.tsx
import type { Metadata } from 'next';
import Link from 'next/link';
import { ChevronLeft, Download, ExternalLink, Printer } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Resume – Danielle Salinetro',
  description:
    'Web-safe resume with direct PDF actions. Phone number omitted on the page; use email/LinkedIn for phone by request.',
};

const PDF_PATH = '/resume_web.pdf'; // keep your redacted PDF in /public as resume_web.pdf

export default function ResumePage() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-10">
      {/* top bar */}
      <div className="mb-6 flex items-center justify-between text-sm">
        <Link
          href="/design"
          className="inline-flex items-center gap-1 text-[#D49670] hover:underline"
        >
          <ChevronLeft className="h-4 w-4" />
          Back home
        </Link>
      </div>

      <h1 className="text-3xl font-semibold tracking-tight">Resume</h1>
      <p className="mt-2 text-neutral-600">
        Download, open in a new tab, or print the PDF. Phone number is omitted here for privacy.
      </p>

      {/* actions */}
      <div className="mt-6 flex flex-wrap gap-3">
        <a
          href={PDF_PATH}
          download
          className="inline-flex items-center gap-2 rounded-xl bg-[#D49670] px-4 py-2 text-white font-medium shadow-sm transition hover:opacity-90"
        >
          <Download className="h-4 w-4" />
          Download PDF
        </a>

        <a
          href={PDF_PATH}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-xl border px-4 py-2 font-medium transition hover:bg-neutral-50"
        >
          <ExternalLink className="h-4 w-4" />
          Open PDF
        </a>

        <a
          href={PDF_PATH}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-xl border px-4 py-2 font-medium transition hover:bg-neutral-50"
        >
          <Printer className="h-4 w-4" />
          Print
        </a>
      </div>

      {/* inline viewer (falls back to link if not supported) */}
      <div className="mt-8 rounded-xl border border-neutral-200/70 bg-white shadow-sm overflow-hidden">
        <object data={PDF_PATH} type="application/pdf" className="h-[80vh] w-full">
          <p className="p-6">
            Your browser can’t display PDFs inline.{' '}
            <a
              href={PDF_PATH}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#D49670] underline"
            >
              Open the PDF
            </a>
            .
          </p>
        </object>
      </div>
    </main>
  );
}
