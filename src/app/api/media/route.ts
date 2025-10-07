import { NextRequest, NextResponse } from 'next/server';
import { S3Client, ListObjectsV2Command, DeleteObjectCommand } from '@aws-sdk/client-s3';

const REGION = process.env.AWS_REGION || 'us-east-1';
const DEFAULT_BUCKET =
  process.env.NEXT_PUBLIC_S3_DEFAULT_BUCKET ||
  process.env.S3_GALLERY_BUCKET ||
  '';

const s3 = new S3Client({ region: REGION });

// super-light guard
function assertAdmin(req: NextRequest) {
  if (req.headers.get('x-local-admin') !== '1') {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }
  return null;
}

export async function GET(req: NextRequest) {
  const guard = assertAdmin(req);
  if (guard) return guard;

  const { searchParams } = new URL(req.url);
  const bucket = searchParams.get('bucket') || DEFAULT_BUCKET;
  const prefix = searchParams.get('prefix') || '';

  if (!bucket) return NextResponse.json({ items: [] });

  const out = await s3.send(
    new ListObjectsV2Command({
      Bucket: bucket,
      Prefix: prefix,
      MaxKeys: 1000,
    })
  );

  const items = (out.Contents || [])
    .filter(o => o.Key && !o.Key.endsWith('/'))
    .map(o => ({
      key: o.Key as string,
      size: o.Size || 0,
      lastModified: o.LastModified?.toISOString() || '',
      etag: o.ETag || '',
    }));

  return NextResponse.json({ items });
}

export async function DELETE(req: NextRequest) {
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
