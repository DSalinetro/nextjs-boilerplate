import { NextResponse } from 'next/server';
import { join } from 'path';
import { promises as fs } from 'fs';

export const runtime = 'nodejs';

export async function GET() {
  const filePath = join(process.cwd(), 'public', 'Danielle-Salinetro-Resume.pdf');

  try {
    const buf = await fs.readFile(filePath); // Node Buffer
    // Convert Buffer -> ArrayBuffer slice (exact bytes)
    const arrayBuffer = buf.buffer.slice(buf.byteOffset, buf.byteOffset + buf.byteLength);

    return new NextResponse(arrayBuffer as ArrayBuffer, {
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
