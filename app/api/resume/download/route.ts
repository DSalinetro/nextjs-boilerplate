import { NextResponse } from 'next/server';
import { join } from 'path';
import { promises as fs } from 'fs';

export const runtime = 'nodejs';

export async function GET() {
  const filePath = join(process.cwd(), 'public', 'Danielle-Salinetro-Resume.pdf');

  try {
    const buffer = await fs.readFile(filePath);
    const blob = new Blob([buffer], { type: 'application/pdf' });

    return new NextResponse(blob, {
      headers: {
        'Content-Type': 'application/pdf',
        'Content-Disposition': 'attachment; filename="Danielle-Salinetro-Resume.pdf"',
        'Cache-Control': 'public, max-age=31536000, immutable',
      },
    });
  } catch {
    return NextResponse.json(
      { error: 'Resume PDF not found at /public/Danielle-Salinetro-Resume.pdf' },
      { status: 404 }
    );
  }
}
