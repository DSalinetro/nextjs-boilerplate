import { NextResponse } from 'next/server';
import { supabaseAdmin } from '../../../../lib/supabaseAdmin';
import { isAdmin } from '../../../../lib/admin';

export async function PATCH(req: Request, { params }: { params: { id: string } }) {
  if (!(await isAdmin())) {                 // 👈 await here
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }
  const body = await req.json();
  // ...rest unchanged...
}

export async function DELETE(_req: Request, { params }: { params: { id: string } }) {
  if (!(await isAdmin())) {                 // 👈 await here
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }
  // ...rest unchanged...
}
