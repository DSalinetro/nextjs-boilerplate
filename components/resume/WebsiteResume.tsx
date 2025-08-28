// components/resume/WebsiteResume.tsx
'use client';

import { Download, ExternalLink, Printer, Mail, Phone, MapPin, Linkedin, Globe, BookOpen } from 'lucide-react';

const PDF_PUBLIC_PATH = '/Danielle-Salinetro-Resume.pdf'; // put your PDF in /public with this name
const FORCED_DOWNLOAD_API = '/api/resume/download';        // optional API route (if you created it)

export default function WebsiteResume() {
  const personal = {
    name: 'Danielle Salinetro',
    title: 'Creative Designer & Researcher | Empathy-Driven Branding, UX & Content',
    email: 'dsalinetro@pm.me',
    phone: '636.252.5894',
    location: 'Kansas City, MO (Remote)',
    linkedin: 'linkedin.com/in/danielle-salinetro',
    portfolio: 'daniellesalinetro.design',
    medium: 'medium.com/@dsalinetro',
  };

  const skills = {
    core: ['Brand Identity & Systems', 'UX/UI & Prototyping', 'Content & SEO Copywriting', 'Research & Synthesis', 'Design Systems', 'Accessibility'],
    tools: ['Figma', 'Adobe Creative Suite', 'Next.js + Tailwind', 'Vercel', 'CMS/CRM', 'Data Visualization'],
    extras: ['Notary (MO) / RON', 'Photo Direction', 'Shopify'],
  };

  const experiences: Array<{
    title: string;
    company: string;
    location?: string;
    date: string;
    bullets: string[];
  }> = [
    {
      title: 'Founder & Creative Director',
      company: 'AdorablyInkedxo',
      location: 'Remote',
      date: '2013 — Present',
      bullets: [
        'Built sustainable brand ecosystem: identity, packaging, photography, and Shopify e-commerce.',
        'Led end-to-end creative direction for campaigns, landing pages, and social content.',
        'Applied empathy-driven design to grow engagement and repeat customers.',
      ],
    },
    {
      title: 'Researcher (Property & Market Data)',
      company: "Moody’s (contract)",
      date: '—',
      bullets: [
        'Researched properties (taxes, bankruptcies, square footage, flood zones, HOAs).',
        'Created structured reports and partnered with C-suite for clarity and impact.',
        'Translated complex data into visual briefs and marketing collateral.',
      ],
    },
    {
      title: 'Mortgage Closer / Ops',
      company: 'Multiple lenders incl. Midwest Financial (contract)',
      date: '—',
      bullets: [
        'Reviewed FHA/USDA/VA/Refi/ARM/Fixed/Bridge documents for accuracy and compliance.',
        'Coordinated with title companies; prepared closing disclosures and resolved discrepancies.',
      ],
    },
    {
      title: 'Appraiser Support / Assistant',
      company: 'Independent Appraiser',
      date: '—',
      bullets: [
        'Managed schedules, reporting, and document accuracy with minimal oversight.',
        'Organized research packets and photo references to streamline valuation workflow.',
      ],
    },
  ];

  const educationCerts = [
    'Google UX Design Certificate (in progress)',
    'Published: “The Empathy Audit” & “Empathy in Design: Transforming Struggles into Strength” (Medium)',
  ];

  // Attempt forced-download API first; if missing, fall back to public file with "download" attribute
  const handleDownload = async () => {
    try {
      const res = await fetch(FORCED_DOWNLOAD_API, { method: 'HEAD' });
      const href = res.ok ? FORCED_DOWNLOAD_API : `${PDF_PUBLIC_PATH}?download=1`;
      const a = document.createElement('a');
      a.href = href;
      a.download = 'Danielle-Salinetro-Resume.pdf';
      document.body.appendChild(a);
      a.click();
      a.remove();
    } catch {
      const a = document.createElement('a');
      a.href = `${PDF_PUBLIC_PATH}?download=1`;
      a.download = 'Danielle-Salinetro-Resume.pdf';
      document.body.appendChild(a);
      a.click();
      a.remove();
    }
  };

  return (
    <div className="mx-auto max-w-4xl p-6 bg-background print:bg-white print:p-0">
      {/* Header */}
      <header className="text-center mb-8 print:mb-6">
        <h1 className="mb-1">{personal.name}</h1>
        <h2 className="text-muted-foreground">{personal.title}</h2>

        <div className="mt-4 flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm text-muted-foreground">
          <span className="flex items-center gap-1"><Mail className="h-4 w-4" />{personal.email}</span>
          <span className="flex items-center gap-1"><Phone className="h-4 w-4" />{personal.phone}</span>
          <span className="flex items-center gap-1"><MapPin className="h-4 w-4" />{personal.location}</span>
          <span className="flex items-center gap-1"><Globe className="h-4 w-4" />{personal.portfolio}</span>
          <span className="flex items-center gap-1"><BookOpen className="h-4 w-4" />{personal.medium}</span>
          <span className="flex items-center gap-1"><Linkedin className="h-4 w-4" />{personal.linkedin}</span>
        </div>

        {/* Actions */}
        <div className="mt-6 flex flex-wrap justify-center gap-3 print:hidden">
          <button
            onClick={handleDownload}
            className="inline-flex items-center gap-2 rounded-2xl border px-4 py-2 hover:bg-accent"
          >
            <Download className="h-4 w-4" />
            Download PDF
          </button>
          <a
            href={PDF_PUBLIC_PATH}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-2xl border px-4 py-2 hover:bg-accent"
          >
            <ExternalLink className="h-4 w-4" />
            Open PDF
          </a>
          <button
            onClick={() => window.print()}
            className="inline-flex items-center gap-2 rounded-2xl border px-4 py-2 hover:bg-accent"
          >
            <Printer className="h-4 w-4" />
            Print / Save as PDF
          </button>
        </div>
      </header>

      {/* Divider */}
      <hr className="my-8 border-t border-border/70 print:my-6" />

      {/* Summary */}
      <section className="mb-8 print:mb-6">
        <h3 className="mb-2">Professional Summary</h3>
        <p className="leading-relaxed">
          Creative designer and researcher blending branding, UX, and content strategy to create
          empathetic, business-ready experiences. Comfortable in structured corporate environments
          and lean, hands-off roles. Strengths: discovery & research, systems thinking, clear visual
          storytelling, and shipping polished work quickly.
        </p>
      </section>

      {/* Skills */}
      <section className="mb-8 print:mb-6">
        <h3 className="mb-3">Skills</h3>
        <div className="grid md:grid-cols-3 gap-4">
          <div className="rounded-xl border p-4">
            <h4 className="mb-2 text-muted-foreground">Core</h4>
            <ul className="list-disc ml-5 space-y-1">{skills.core.map((s) => <li key={s}>{s}</li>)}</ul>
          </div>
          <div className="rounded-xl border p-4">
            <h4 className="mb-2 text-muted-foreground">Tools</h4>
            <ul className="list-disc ml-5 space-y-1">{skills.tools.map((s) => <li key={s}>{s}</li>)}</ul>
          </div>
          <div className="rounded-xl border p-4">
            <h4 className="mb-2 text-muted-foreground">Additional</h4>
            <ul className="list-disc ml-5 space-y-1">{skills.extras.map((s) => <li key={s}>{s}</li>)}</ul>
          </div>
        </div>
      </section>

      {/* Experience */}
      <section className="mb-8 print:mb-6">
        <h3 className="mb-3">Experience</h3>
        <div className="space-y-4">
          {experiences.map((exp) => (
            <div key={exp.title + exp.company} className="rounded-xl border p-4 print:break-inside-avoid">
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <div>
                  <h4 className="font-semibold">{exp.title}</h4>
                  <p className="text-muted-foreground">
                    {exp.company}{exp.location ? ` · ${exp.location}` : ''}
                  </p>
                </div>
                <p className="text-sm text-muted-foreground">{exp.date}</p>
              </div>
              <ul className="mt-3 list-disc ml-5 space-y-1">
                {exp.bullets.map((b, i) => <li key={i}>{b}</li>)}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Education / Certifications */}
      <section className="mb-8 print:mb-6">
        <h3 className="mb-3">Education & Certifications</h3>
        <div className="rounded-xl border p-4">
          <ul className="list-disc ml-5 space-y-1">
            {educationCerts.map((e) => <li key={e}>{e}</li>)}
          </ul>
        </div>
      </section>

      {/* Print footer */}
      <footer className="mt-10 text-center text-xs text-muted-foreground print:mt-6">
        <span className="hidden print:inline">Generated from daniellesalinetro.design/resume</span>
      </footer>
    </div>
  );
}
