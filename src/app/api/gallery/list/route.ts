// src/app/api/gallery/list/route.ts
import { NextRequest, NextResponse } from 'next/server';
import { S3Client, ListObjectsV2Command } from '@aws-sdk/client-s3';

const REGION = process.env.AWS_REGION || 'us-east-2';
const BUCKET = process.env.S3_DEFAULT_BUCKET || process.env.NEXT_PUBLIC_S3_DEFAULT_BUCKET;

const s3 = new S3Client({ region: REGION });

export async function GET(req: NextRequest) {
  try {
    const prefix = req.nextUrl.searchParams.get('prefix') || 'gallery/';
    const limit = Number(req.nextUrl.searchParams.get('limit') || '200');

    if (!BUCKET) return NextResponse.json({ items: [] });

    const res = await s3.send(new ListObjectsV2Command({
      Bucket: BUCKET,
      Prefix: prefix,
      MaxKeys: limit,
    }));

    const cdn = process.env.NEXT_PUBLIC_S3_CDN_BASE || '';
    const items = (res.Contents || [])
      .filter((o) => !!o.Key && !o.Key!.endsWith('/'))
      .map((o) => {
        const key = o.Key as string;
        const url = cdn
          ? `${cdn.replace(/\/$/, '')}/${key.replace(/^\//, '')}`
          : `https://${BUCKET}.s3.${REGION}.amazonaws.com/${key}`;
        return { imageUrl: url, alt: key.split('/').pop() || 'Image' };
      });

    return NextResponse.json({ items });
  } catch (e: any) {
    return NextResponse.json({ error: e?.message || 'error' }, { status: 500 });
  }
}
