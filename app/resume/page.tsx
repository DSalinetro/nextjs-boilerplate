import type { Metadata } from 'next';
import WebsiteResume from '../../components/resume/WebsiteResume';

export const metadata: Metadata = {
  title: 'Resume | Danielle Salinetro',
  description: 'Website-ready resume with clean UX and PDF download.',
};

export default function Page() {
  return <WebsiteResume />;
}
