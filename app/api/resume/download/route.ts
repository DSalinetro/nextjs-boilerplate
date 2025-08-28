import { NextResponse } from 'next/server';
import { promises as fs } from 'fs';
import path from 'path';

export async function GET() {
  const file = await fs.readFile(path.join(process.cwd(), 'public', 'Danielle-Salinetro-Resume.pdf'));
  return new NextResponse(file, {
    headers: {
      'Content-Type': 'application/pdf',
      'Content-Disposition': 'attachment; filename="Danielle-Salinetro-Resume.pdf"',
      'Cache-Control': 'public, max-age=31536000, immutable',
    },
  });
}
