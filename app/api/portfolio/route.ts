import { NextResponse } from 'next/server';
import { supabase } from '../../../lib/supabaseClient';
import { supabaseAdmin } from '../../../lib/supabaseAdmin';
import { isAdmin } from '../../../lib/admin';

export async function GET(req: Request): Promise<Response> {
  try {
    const { searchParams } = new URL(req.url);
    const publishedOnly = searchParams.get('publishedOnly') !== 'false';
    const category = searchParams.get('category') || undefined;

    let q = supabase
      .from('portfolio_items')
      .select(
        'id,title,slug,description,category,tags,cover_url,gallery_urls,featured,published,sort_order'
      )
      .order('featured', { ascending: false })
      .order('sort_order', { ascending: true });

    if (publishedOnly) q = q.eq('published', true);
    if (category) q = q.eq('category', category);

    const { data, error } = await q;
    if (error) return NextResponse.json({ error: error.message }, { status: 500 });
    return NextResponse.json({ items: data ?? [] });
  } catch (e: any) {
    return NextResponse.json({ error: e?.message || 'Unknown error' }, { status: 500 });
  }
}

export async function POST(req: Request): Promise<Response> {
  if (!(await isAdmin())) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  try {
    const body = await req.json();

    const { data, error } = await supabaseAdmin
      .from('portfolio_items')
      .insert({
        title: body.title,
        slug: body.slug,
        description: body.description,
        category: body.category,
        tags: body.tags ?? [],
        cover_url: body.cover_url ?? null,
        gallery_urls: body.gallery_urls ?? [],
        featured: !!body.featured,
        published: !!body.published,
        sort_order: body.sort_order ?? 0,
      })
      .select('id')
      .single();

    if (error || !data) {
      return NextResponse.json(
        { error: error?.message || 'Insert failed' },
        { status: 500 }
      );
    }

    return NextResponse.json({ id: data.id });
  } catch (e: any) {
    return NextResponse.json({ error: e?.message || 'Invalid payload' }, { status: 400 });
  }
}
