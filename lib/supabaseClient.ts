// lib/supabaseClient.ts
import { createClient } from '@supabase/supabase-js';

export const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,      // set in Vercel env vars
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!, // set in Vercel env vars
  { auth: { persistSession: false } }
);
