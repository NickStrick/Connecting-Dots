// src/app/api/config/route.ts
import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';
import { getConfigJson } from '@/lib/s3-admin';

export async function GET(req: NextRequest): Promise<NextResponse> {
  const { searchParams } = new URL(req.url);
  const key = searchParams.get('key');
  const bucket = searchParams.get('bucket') || undefined;

  if (!key) {
    return NextResponse.json({ error: 'Missing key parameter' }, { status: 400 });
  }

  try {
    const config = await getConfigJson({ key, bucket });
    if (config === null) {
      return NextResponse.json({ error: 'Config not found' }, { status: 404 });
    }
    return NextResponse.json({ config }, { status: 200 });
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : 'Failed to load config';
    return NextResponse.json({ error: message }, { status: 500 });
  }
}