export const runtime = 'nodejs';

import { NextResponse } from 'next/server';
import { supabaseAdmin } from '../../../lib/supabaseAdmin';
import { isAdmin } from '../../../lib/admin';
import crypto from 'node:crypto';

export async function POST(req: Request) {
  if (!(await isAdmin())) {                 // 👈 await here
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }
  // ...rest unchanged...
}
