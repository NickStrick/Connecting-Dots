// src/lib/adminClient.ts
export async function adminFetch(input: RequestInfo | URL, init: RequestInit = {}) {
  const headers = new Headers(init.headers || {});
  headers.set('x-local-admin', '1');
  const res = await fetch(input, { ...init, headers, cache: 'no-store' });

  // Optional: throw readable error when API route is missing
  if (!res.ok && res.headers.get('content-type')?.includes('text/html')) {
    const text = await res.text();
    throw new Error(`Admin API 404/HTML response. Missing route? First 80 chars: ${text.slice(0,80)}`);
  }
  return res;
}
