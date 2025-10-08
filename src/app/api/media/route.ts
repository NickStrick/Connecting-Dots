// src/app/api/admin/media/route.ts
import { NextRequest, NextResponse } from 'next/server';
import {
  S3Client,
  ListObjectsV2Command,
  DeleteObjectCommand,
  type _Object,
} from '@aws-sdk/client-s3';

const REGION = process.env.AWS_REGION || 'us-east-1';
const DEFAULT_BUCKET =
  process.env.NEXT_PUBLIC_S3_DEFAULT_BUCKET ||
  process.env.S3_GALLERY_BUCKET ||
  '';

const s3 = new S3Client({ region: REGION });

/** Minimal shape we return to the client */
type MediaItem = {
  key: string;
  size: number;
  lastModified: string;
  etag: string;
};

/** super-light guard; returns a response if blocked, otherwise null */
function assertAdmin(req: NextRequest): NextResponse | null {
  if (req.headers.get('x-local-admin') !== '1') {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }
  return null;
}

export async function GET(req: NextRequest): Promise<NextResponse> {
  const guard = assertAdmin(req);
  if (guard) return guard;

  const { searchParams } = new URL(req.url);
  const bucket = searchParams.get('bucket') || DEFAULT_BUCKET;
  const prefix = searchParams.get('prefix') || '';

  if (!bucket) {
    const empty: { items: MediaItem[] } = { items: [] };
    return NextResponse.json(empty);
  }

  const out = await s3.send(
    new ListObjectsV2Command({
      Bucket: bucket,
      Prefix: prefix,
      MaxKeys: 1000,
    })
  );

  const contents = (out.Contents ?? []) as _Object[];
  const items: MediaItem[] = contents
    .filter(
      (o): o is _Object & { Key: string } =>
        typeof o.Key === 'string' && !o.Key.endsWith('/')
    )
    .map((o) => ({
      key: o.Key,
      size: typeof o.Size === 'number' ? o.Size : 0,
      lastModified: o.LastModified ? o.LastModified.toISOString() : '',
      etag: o.ETag ?? '',
    }));

  return NextResponse.json({ items });
}

export async function DELETE(req: NextRequest): Promise<NextResponse> {
  const guard = assertAdmin(req);
  if (guard) return guard;

  const { searchParams } = new URL(req.url);
  const bucket = searchParams.get('bucket') || DEFAULT_BUCKET;
  const key = searchParams.get('key') || '';

  if (!bucket || !key) {
    return NextResponse.json({ ok: false }, { status: 400 });
  }

  await s3.send(new DeleteObjectCommand({ Bucket: bucket, Key: key }));
  return NextResponse.json({ ok: true });
}
