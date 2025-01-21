import type { NextRequest } from 'next/server';

export const dynamic = 'force-dynamic';

export async function GET(request: NextRequest) {
  const params = request.nextUrl.searchParams;
  console.log(
    [...params.entries()].map(([key, value]) => `${key}: ${value}`).join('\n')
  );

  return new Response(new Date().toISOString(), {
    headers: {
      'content-type': 'text/plain',
      'cache-control': 'public, max-age=30, s-max-age=60',
    },
  });
}
