import { NextResponse } from 'next/server';
import { supabaseAdmin } from '../../../lib/supabaseAdmin';
import { supabase } from '../../../lib/supabaseClient';
import { isAdmin } from '../../../lib/admin';

export async function GET(req: Request) {
  // ...no change...
}

export async function POST(req: Request) {
  if (!(await isAdmin())) {                 // 👈 await here
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }
  const body = await req.json();
  // ...rest unchanged...
}
