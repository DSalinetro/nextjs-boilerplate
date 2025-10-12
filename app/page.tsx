// app/page.tsx (Server Component)

import { redirect } from 'next/navigation';

export const metadata = {
  title: 'Danielle Salinetro — Empathy-Driven Design & Marketing',
  description:
    'Design systems, SEO content, and analytics that turn empathy and evidence into growth.',
  alternates: { canonical: '/design' },  // ✅ canonical now points to /design
};

export default function HomePage() {
  redirect('/design');
}
