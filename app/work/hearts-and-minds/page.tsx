// app/work/hearts-and-minds/page.tsx
import { notFound } from 'next/navigation';

export const metadata = {
  robots: { index: false, follow: false }, // don’t let search engines index the old page
  title: 'Not found',
};

export default function Page() {
  notFound(); // return a 404 for this path
}
