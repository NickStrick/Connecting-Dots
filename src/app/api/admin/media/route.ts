// src/app/api/admin/media/route.ts
import { NextRequest, NextResponse } from 'next/server';
import { assertAdmin } from '@/lib/adminGuard';
import { listUnderPrefix, deleteKey } from '@/lib/s3-admin';

export async function GET(req: NextRequest) {
  try {
    assertAdmin(req);
    const { searchParams } = new URL(req.url);
    const bucket = searchParams.get('bucket')!;
    const prefix = searchParams.get('prefix') || '';
    if (!bucket) return NextResponse.json({ error: 'bucket required' }, { status: 400 });

    const items = await listUnderPrefix({ bucket, prefix });
    return NextResponse.json({ items });
  } catch (e) {
    const status = (e as any).status ?? 500;
    const msg = (e as Error).message ?? 'Internal error';
    return NextResponse.json({ error: msg }, { status });
  }
}

export async function DELETE(req: NextRequest) {
  try {
    assertAdmin(req);
    const { searchParams } = new URL(req.url);
    const bucket = searchParams.get('bucket')!;
    const key = searchParams.get('key')!;
    if (!bucket || !key) {
      return NextResponse.json({ error: 'bucket and key required' }, { status: 400 });
    }
    await deleteKey({ bucket, key });
    return NextResponse.json({ ok: true });
  } catch (e) {
    const status = (e as any).status ?? 500;
    const msg = (e as Error).message ?? 'Internal error';
    return NextResponse.json({ error: msg }, { status });
  }
}
