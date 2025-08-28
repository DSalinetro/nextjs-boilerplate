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
        'Researched properties (taxes, bankruptcies, square footage, fl
