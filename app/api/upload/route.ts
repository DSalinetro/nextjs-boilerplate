export const runtime = 'nodejs'; // needed for node:crypto + Buffer

import { NextResponse } from 'next/server';
import { supabaseAdmin } from '../../../lib/supabaseAdmin';
import { isAdmin } from '../../../lib/admin';
import crypto from 'node:crypto';

export async function POST(req: Request) {
  if (!(await isAdmin())) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const form = await req.formData();
  const file = form.get('file') as File | null;
  if (!file) return NextResponse.json({ error: 'No file' }, { status: 400 });

  const ext = file.name.split('.').pop() || 'bin';
  const key = `uploads/${Date.now()}-${crypto.randomBytes(6).toString('hex')}.${ext}`;

  const arrayBuf = await file.arrayBuffer();
  const { error } = await supabaseAdmin.storage
    .from('portfolio')
    .upload(key, Buffer.from(arrayBuf), { contentType: file.type, upsert: false });

  if (error) return NextResponse.json({ error: error.message }, { status: 500 });

  const { data: publicUrl } = supabaseAdmin.storage.from('portfolio').getPublicUrl(key);
  return NextResponse.json({ url: publicUrl.publicUrl, path: key });
}
