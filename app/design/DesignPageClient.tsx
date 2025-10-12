// app/design/DesignPageClient.tsx
'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion, useScroll, useTransform, useReducedMotion } from 'framer-motion';
import { ChevronDown, Mail, MapPin, ExternalLink, Linkedin, BookOpen } from 'lucide-react';

import { Button } from '../../components/ui/button';
import { Card, CardContent } from '../../components/ui/card';
import { Badge } from '../../components/ui/badge';
import { LINKS } from '../../lib/links';
import { useState, useEffect, useRef } from 'react';

// ✅ put it here, with the other imports
import BlogsSection from '../../components/BlogsSection';

export default function DesignPageClient() {
  const [activeSection, setActiveSection] = useState<
    'home' | 'portfolio' | 'about' | 'blogs' | 'contact'
  >('home');

  const scrollToSection = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    const onScroll = () => {
      const ids = ['home', 'portfolio', 'about', 'blogs', 'contact'] as const;
      for (const id of ids) {
        const el = document.getElementById(id) as HTMLElement | null;
        if (el) {
          const { offsetTop, offsetHeight } = el;
          if (
            window.scrollY >= offsetTop - 40 &&
            window.scrollY < offsetTop + offsetHeight
          ) {
            setActiveSection(id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <main>
      {/* other sections can go here */}
      <BlogsSection />
    </main>
  );
}
