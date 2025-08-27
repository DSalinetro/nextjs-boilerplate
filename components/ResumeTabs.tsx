'use client';

import { useState, useMemo } from 'react';
import { useSearchParams } from 'next/navigation';
import Resume from './Resume';
import { CoverLetter } from './CoverLetter';

export default function ResumeTabs() {
  const searchParams = useSearchParams();
  const defaultTab = (searchParams.get('tab') === 'cover-letter') ? 'cover-letter' : 'resume';
  const [tab, setTab] = useState<'resume' | 'cover-letter'>(defaultTab);

  const TabBtn = ({ id, label }: { id: 'resume' | 'cover-letter'; label: string }) => (
    <button
      onClick={() => setTab(id)}
      aria-selected={tab === id}
      className={`px-4 py-2 rounded-lg border text-sm ${tab === id ? 'bg-accent' : 'bg-background hover:bg-muted'}`}
    >
      {label}
    </button>
  );

  // You can later pipe these from the URL if you want:
  const companyName = useMemo(() => '[Company Name]', []);
  const positionTitle = useMemo(() => '[Position Title]', []);
  const hiringManager = useMemo(() => 'Hiring Manager', []);

  return (
    <main className="mx-auto max-w-5xl px-4 py-6">
      <div className="mb-6 flex flex-wrap items-center justify-between gap-3">
        <div className="inline-flex gap-2 rounded-xl p-1 border bg-muted/30">
          <TabBtn id="resume" label="Resume" />
          <TabBtn id="cover-letter" label="Cover Letter" />
        </div>
        <button
          onClick={() => window.print()}
          className="rounded-2xl border px-4 py-2 hover:bg-accent print:hidden"
        >
          Print / Save as PDF
        </button>
      </div>

      <section className={tab === 'resume' ? '' : 'hidden'}>
        <Resume />
      </section>

      <section className={tab === 'cover-letter' ? '' : 'hidden'}>
        <CoverLetter
          companyName={companyName}
          positionTitle={positionTitle}
          hiringManager={hiringManager}
        />
      </section>
    </main>
  );
}
