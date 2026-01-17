// src/app/api/admin/config/route.ts
import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';
import { guardAdmin } from '@/lib/adminGuard';
import { saveConfigJson, getConfigJson } from '@/lib/s3-admin'; // your helper: reads/writes JSON to S3

type SaveBody = {
  key: string;         // e.g. "configs/jose-ortiz/pageContext.json"
  bucket?: string;
  config: unknown;     // PageContext shape, but keep loose if you like
};

export async function GET(req: NextRequest): Promise<NextResponse> {
  // 🔒 admin-only
  const denied = guardAdmin(req);
  if (denied) return denied;

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

export async function PUT(req: NextRequest): Promise<NextResponse> {
  // 🔒 admin-only
  const denied = guardAdmin(req);
  if (denied) return denied;

  const body = (await req.json()) as SaveBody;
  const { key, bucket, config } = body;

  if (!key || typeof config === 'undefined') {
    return NextResponse.json({ error: 'Missing key or config' }, { status: 400 });
  }

  try {
    await saveConfigJson({ key, bucket, json: config });
    return NextResponse.json({ ok: true }, { status: 200 });
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : 'Failed to save config';
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
