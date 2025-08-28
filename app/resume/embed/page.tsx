import type { Metadata } from 'next';
import SimpleResume from '../../../components/resume/SimpleResume';

export const metadata: Metadata = {
  title: 'Resume (Embedded) | Danielle Salinetro',
  description: 'Minimal resume component for embedding.',
};

export default function Page() {
  return <SimpleResume showHeader={false} className="my-8" />;
}
