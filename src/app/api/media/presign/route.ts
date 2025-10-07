import { NextRequest, NextResponse } from 'next/server';
import { S3Client, PutObjectCommand } from '@aws-sdk/client-s3';
import { getSignedUrl } from '@aws-sdk/s3-request-presigner';

const REGION = process.env.AWS_REGION || 'us-east-1';
const s3 = new S3Client({ region: REGION });

function assertAdmin(req: NextRequest) {
  if (req.headers.get('x-local-admin') !== '1') {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }
  return null;
}

export async function POST(req: NextRequest) {
  const guard = assertAdmin(req);
  if (guard) return guard;

  const { bucket, key, contentType } = await req.json();
  if (!bucket || !key) {
    return NextResponse.json({ error: 'bucket/key required' }, { status: 400 });
  }

  const cmd = new PutObjectCommand({
    Bucket: bucket,
    Key: key,
    ContentType: contentType || 'application/octet-stream',
  });

  const url = await getSignedUrl(s3, cmd, { expiresIn: 300 });
  return NextResponse.json({ url });
}
