'use client';

import { useMemo } from 'react';
import { Mail, Phone, MapPin, Linkedin, Globe, BookOpen, Download } from 'lucide-react';
import { Card, CardContent } from './ui/card';
import { Separator } from './ui/separator';
import { Button } from './ui/button';

type Experience = {
  title: string;
  company: string;
  location?: string;
  date: string;
  bullets: string[];
};

export default function Resume() {
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

  const skills = useMemo(
    () => ({
      core: [
        'Brand Identity & Systems',
        'UX/UI & Prototyping',
        'Content & SEO Copywriting',
        'Research & Synthesis',
        'Design Systems',
        'Accessibility',
      ],
      tools: [
        'Figma',
        'Adobe Creative Suite',
        'Next.js + Tailwind',
        'Vercel',
        'Supabase (read-only CMS)',
        'CMS/CRM Platforms',
        'Data Viz (dashboards, charts)',
      ],
      bonus: ['Notary (MO) / RON', 'Photo Direction', 'E-commerce (Shopify)'],
    }),
    []
  );

  const experiences: Experience[] = [
    {
      title: 'Founder & Creative Director',
      company: 'AdorablyInkedxo (Brand Ecosystem)',
      location: 'Remote',
      date: '2013 — Present',
      bullets: [
        'Built sustainable brand ecosystem: identity, packaging, product photography, and Shopify e-commerce.',
        'Led end-to-end creative direction across campaigns, landing pages, and social content.',
        'Applied empathy-driven design to increase engagement and repeat customers.',
      ],
    },
    {
      title: 'Researcher (Property & Market Data)',
      company: "Moody’s (contract/onsite & remote mix)",
      date: '—',
      bullets: [
        'Researched properties (taxes, bankruptcies, square footage, flood zones, HOAs, etc.).',
        'Produced structured reports and worked with C-suite stakeholders on clarity and impact.',
        'Translated complex data into visual briefs and marketing collateral for asset listings.',
      ],
    },
    {
      title: 'Mortgage Closer / Ops',
      company: 'Multiple lenders incl. Midwest Financial (contract)',
      date: '—',
      bullets: [
        'Reviewed FHA/USDA/VA/Refi/ARM/Fixed/Bridge loan docs for accuracy and compliance.',
        'Coordinated with title companies and stakeholders; prepared closing disclosures.',
        'Resolved discrepancies and ensured federal/state regulation adherence.',
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

  const handlePrint = () => window.print();

  return (
    <div className="max-w-4xl mx-auto p-6 bg-background print:bg-white print:p-0">
      {/* Header */}
      <header className="text-center mb-8 print:mb-6 print:break-inside-avoid">
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

        {/* Download / Print */}
        <div className="mt-6 print:hidden">
          <Button onClick={handlePrint} className="rounded-2xl">
            <Download className="mr-2 h-4 w-4" />
            Download PDF
          </Button>
        </div>
      </header>

      <Separator className="mb-8 print:mb-6" />

      {/* Summary */}
      <section className="mb-8 print:mb-6 print:break-inside-avoid">
        <h3 className="mb-3">Professional Summary</h3>
        <Card className="print:border-thin">
          <CardContent className="p-6 print:p-3">
            <p className="leading-relaxed">
              Creative designer and researcher blending branding, UX, and content strategy to create
              empathetic, business-ready experiences. Comfortable in structured corporate environments
              and lean, hands-off roles. Strengths: discovery & research, systems thinking, clear visual
              storytelling, and shipping polished work quickly.
            </p>
          </CardContent>
        </Card>
      </section>

      {/* Skills */}
      <section className="mb-8 print:mb-6 print:break-inside-avoid">
        <h3 className="mb-3">Skills</h3>
        <div className="grid md:grid-cols-3 gap-4">
          <Card className="print:border-thin">
            <CardContent className="p-6 print:p-3">
              <h4 className="mb-2 text-muted-foreground">Core</h4>
              <ul className="list-disc ml-5 space-y-1">
                {skills.core.map((s) => <li key={s}>{s}</li>)}
              </ul>
            </CardContent>
          </Card>
          <Card className="print:border-thin">
            <CardContent className="p-6 print:p-3">
              <h4 className="mb-2 text-muted-foreground">Tools</h4>
              <ul className="list-disc ml-5 space-y-1">
                {skills.tools.map((s) => <li key={s}>{s}</li>)}
              </ul>
            </CardContent>
          </Card>
          <Card className="print:border-thin">
            <CardContent className="p-6 print:p-3">
              <h4 className="mb-2 text-muted-foreground">Additional</h4>
              <ul className="list-disc ml-5 space-y-1">
                {skills.bonus.map((s) => <li key={s}>{s}</li>)}
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Experience */}
      <section className="mb-8 print:mb-6">
        <h3 className="mb-3">Experience</h3>
        <div className="space-y-4">
          {experiences.map((exp) => (
            <Card key={exp.title + exp.company} className="print:border-thin print:break-inside-avoid">
              <CardContent className="p-6 print:p-3">
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <div>
                    <h4 className="font-semibold">{exp.title}</h4>
                    <p className="text-muted-foreground">{exp.company}{exp.location ? ` · ${exp.location}` : ''}</p>
                  </div>
                  <p className="text-sm text-muted-foreground">{exp.date}</p>
                </div>
                <ul className="mt-3 list-disc ml-5 space-y-1">
                  {exp.bullets.map((b, i) => <li key={i}>{b}</li>)}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Education / Certs */}
      <section className="mb-8 print:mb-6 print:break-inside-avoid">
        <h3 className="mb-3">Education & Certifications</h3>
        <Card className="print:border-thin">
          <CardContent className="p-6 print:p-3">
            <ul className="list-disc ml-5 space-y-1">
              {educationCerts.map((e) => <li key={e}>{e}</li>)}
            </ul>
          </CardContent>
        </Card>
      </section>

      {/* Footer note for printing */}
      <footer className="mt-10 text-center text-xs text-muted-foreground print:mt-6">
        <span className="print:hidden">Tip: Use the “Download PDF” button (or Ctrl/Cmd+P) for a clean PDF export.</span>
        <span className="hidden print:inline">Generated from daniellesalinetro.design/resume</span>
      </footer>
    </div>
  );
}

