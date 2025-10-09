// app/design/page.tsx  (SERVER file – no "use client" here)

import DesignPageClient from './DesignPageClient';

export const metadata = {
  title: 'Design Portfolio — Danielle Salinetro',
  description:
    'Selected brand systems, web builds, and UX artifacts with outcomes and process notes.',
  alternates: { canonical: '/design' },
};

export default function DesignPage() {
  return <DesignPageClient />;
}
