// app/resume/page.tsx
import type { Metadata } from 'next';

const RESUME_URL = 'https://daniellesalinetroresume.figma.site/';

export const metadata: Metadata = {
  title: 'Resume | Danielle Salinetro',
  description: 'Latest resume hosted on Figma.',
  openGraph: { title: 'Resume | Danielle Salinetro', url: RESUME_URL },
};

export default function ResumePage() {
  return (
    <main className="min-h-screen p-6">
      <div className="mx-auto max-w-6xl">
        <h1 className="sr-only">Resume</h1>

        {/* Embed the Figma Site */}
        <div className="rounded-xl border border-neutral-200/70 shadow-sm overflow-hidden bg-white">
          <iframe
            src={RESUME_URL}
            title="Danielle Salinetro Resume (Figma)"
            className="w-full h-[85vh] border-0"
            loading="lazy"
            allow="fullscreen; clipboard-write"
          />
        </div>

        {/* Actions */}
        <div className="mt-4 flex gap-3">
          <a
            href={RESUME_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center rounded-2xl px-5 py-3 font-semibold text-white"
            style={{ backgroundColor: '#D49670' }}
          >
            Open in Figma
          </a>
          <a href="/" className="rounded-2xl border px-5 py-3 transition hover:bg-neutral-50">
            Back home
          </a>
        </div>
      </div>
    </main>
  );
}
