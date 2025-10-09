// app/page.tsx  (SERVER file – no "use client" here)

import HomeClient from './HomeClient';

export const metadata = {
  title: 'Danielle Salinetro — Empathy-Driven Design & Marketing',
  description:
    'Design systems, SEO content, and analytics that turn empathy and evidence into growth.',
  alternates: { canonical: '/' },
};

export default function HomePage() {
  return <HomeClient />;   // keep wrapper minimal
}
