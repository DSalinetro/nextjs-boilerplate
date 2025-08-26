import { cookies } from 'next/headers';

export async function isAdmin() {
  const c = await cookies();
  return c.get('admin')?.value === '1';
}
