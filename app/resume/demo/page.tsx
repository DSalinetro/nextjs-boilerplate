import type { Metadata } from 'next';
import DocumentSelector from '../../../components/resume/DocumentSelector';

export const metadata: Metadata = {
  title: 'Resume Demo | Danielle Salinetro',
  description: 'Full-featured resume + cover letter with customization.',
};

export default function Page() {
  return <DocumentSelector />;
}
