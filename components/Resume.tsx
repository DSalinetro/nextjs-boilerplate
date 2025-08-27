'use client';

import { Mail, Phone, MapPin, Linkedin, Globe, BookOpen, Download } from 'lucide-react';
import { Card, CardContent } from './ui/card';

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

  const skills = {
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
  };

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
          <button
            onClick={handlePrint}
            className="inline-flex items-center rounded-2xl border px-4 py-2 hover:bg-accent"
          >
            <Download className="mr-2 h-4 w-4" />
            Download PDF
          </button>
