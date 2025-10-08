// src/app/api/gallery/list/route.ts
import { NextRequest, NextResponse } from 'next/server';
import {
  S3Client,
  ListObjectsV2Command,
  type _Object,
} from '@aws-sdk/client-s3';

const REGION = process.env.AWS_REGION || 'us-east-2';
const BUCKET =
  process.env.S3_DEFAULT_BUCKET || process.env.NEXT_PUBLIC_S3_DEFAULT_BUCKET || '';

const s3 = new S3Client({ region: REGION });

export async function GET(req: NextRequest) {
  try {
    const prefix = req.nextUrl.searchParams.get('prefix') || 'gallery/';
    const limit = Number(req.nextUrl.searchParams.get('limit') || '200');

    if (!BUCKET) return NextResponse.json({ items: [] });

    const res = await s3.send(
      new ListObjectsV2Command({
        Bucket: BUCKET,
        Prefix: prefix,
        MaxKeys: limit,
      })
    );

    const contents: _Object[] = (res.Contents ?? []) as _Object[];
    const cdn = process.env.NEXT_PUBLIC_S3_CDN_BASE || '';

    const items = contents
      .filter(
        (o): o is _Object & { Key: string } =>
          typeof o.Key === 'string' && !o.Key.endsWith('/')
      )
      .map((o) => {
        const key = o.Key;
        const url = cdn
          ? `${cdn.replace(/\/$/, '')}/${key.replace(/^\//, '')}`
          : `https://${BUCKET}.s3.${REGION}.amazonaws.com/${key}`;
        return { imageUrl: url, alt: key.split('/').pop() || 'Image' };
      });

    return NextResponse.json({ items });
  } catch (e: unknown) {
    const message = e instanceof Error ? e.message : 'error';
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
