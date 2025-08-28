import type { Metadata } from 'next';
import HeartsMinds from '../../../components/work/HeartsMinds';

export const metadata: Metadata = {
  title: 'Hearts & Minds — Empathy Concept',
  description:
    'A research-driven concept exploring how design influences decisions through emotion, clarity, and trust.',
  openGraph: {
    title: 'Hearts & Minds — Empathy Concept',
    description:
      'A research-driven concept exploring how design influences decisions through emotion, clarity, and trust.',
    images: ['/images/hearts-minds/og.jpg'],
  },
};

export default function Page() {
  return <HeartsMinds />;
}
