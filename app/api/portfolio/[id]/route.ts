import { NextResponse } from 'next/server';
import { supabaseAdmin } from '../../../../lib/supabaseAdmin';
import { isAdmin } from '../../../../lib/admin';

// Loosen the type of the 2nd arg (context) to avoid Next 15's strict check
export async function PATCH(req: Request, { params }: any) {
  if (!(await isAdmin())) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });

  const body = await req.json();

  const { error } = await supabaseAdmin
    .from('portfolio_items')
    .update({
      title: body.title,
      slug: body.slug,
      description: body.description,
      category: body.category,
      tags: body.tags,
      cover_url: body.cover_url,
      gallery_urls: body.gallery_urls,
      featured: body.featured,
      published: body.published,
      sort_order: body.sort_order,
      updated_at: new Date().toISOString(),
    })
    .eq('id', params.id);

  if (error) return NextResponse.json({ error: error.message }, { status: 500 });
  return NextResponse.json({ ok: true });
}

export async function DELETE(_req: Request, { params }: any) {
  if (!(await isAdmin())) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });

  const { error } = await supabaseAdmin
    .from('portfolio_items')
    .delete()
    .eq('id', params.id);

  if (error) return NextResponse.json({ error: error.message }, { status: 500 });
  return NextResponse.json({ ok: true });
}
