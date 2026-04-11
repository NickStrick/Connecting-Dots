// src/lib/resolveUrl.ts
const LEGACY_CLOUDFRONT_BASE = 'https://d23es5hp06bfni.cloudfront.net/';
const PRIMARY_S3_BASE = 'https://connecting-dots-bucket.s3.us-east-2.amazonaws.com/';

export function rewriteLegacyCdnUrl(url: string): string {
  const input = url?.trim();
  if (!input) return url;

  const legacyNoSlash = LEGACY_CLOUDFRONT_BASE.replace(/\/$/, '');
  const primaryBase = PRIMARY_S3_BASE.replace(/\/?$/, '/');

  if (input.startsWith(LEGACY_CLOUDFRONT_BASE)) {
    return primaryBase + input.slice(LEGACY_CLOUDFRONT_BASE.length);
  }
  if (input.startsWith(legacyNoSlash + '/')) {
    return primaryBase + input.slice(legacyNoSlash.length + 1);
  }
  if (input === legacyNoSlash) {
    return primaryBase.replace(/\/$/, '');
  }

  return url;
}

export function resolveCdnUrl(s: string): string {
  if (/^https?:\/\//i.test(s)) return rewriteLegacyCdnUrl(s);
  const base = process.env.NEXT_PUBLIC_S3_CDN_BASE || '';
  return rewriteLegacyCdnUrl(`${base.replace(/\/$/, '')}/${s.replace(/^\//, '')}`);
}

type ResolveImageOpts = {
  cdnBase?: string;
  s3Images?: { imageUrl: string }[];
};

export function resolveImageUrl(imageUrl: string | undefined, opts: ResolveImageOpts = {}): string | undefined {
  if (!imageUrl) return undefined;
  if (/^https?:\/\//i.test(imageUrl)) return rewriteLegacyCdnUrl(imageUrl);

  const cdnBase =
    opts.cdnBase ||
    process.env.NEXT_PUBLIC_S3_CDN_BASE ||
    process.env.NEXT_PUBLIC_S3_GALLERY_CDN_BASE ||
    '';

  if (opts.s3Images && opts.s3Images.length > 0) {
    const filename = imageUrl.split('/').pop() || imageUrl;
    const matchedImage = opts.s3Images.find((img) => {
      const imgFilename = img.imageUrl.split('/').pop()?.split('?')[0] || '';
      return imgFilename.toLowerCase() === filename.toLowerCase();
    });
    if (matchedImage?.imageUrl) return rewriteLegacyCdnUrl(matchedImage.imageUrl);
  }

  if (cdnBase) {
    return rewriteLegacyCdnUrl(
      `${cdnBase.replace(/\/$/, '')}/${imageUrl.replace(/^\//, '')}`
    );
  }

  return rewriteLegacyCdnUrl(imageUrl);
}

// Quick YouTube embed path helper
export function toYouTubeEmbed(url: string): string {
  // supports full or short URLs
  try {
    const u = new URL(url);
    if (u.hostname.includes('youtu.be')) {
      return `https://www.youtube.com/embed/${u.pathname.replace('/', '')}`;
    }
    if (u.hostname.includes('youtube.com')) {
      const id = u.searchParams.get('v');
      if (id) return `https://www.youtube.com/embed/${id}`;
      // already embed or shorts
      if (u.pathname.startsWith('/embed/')) return url;
      if (u.pathname.startsWith('/shorts/')) {
        const id2 = u.pathname.split('/')[2];
        return `https://www.youtube.com/embed/${id2}`;
      }
    }
    // Fallback: return original
    return url;
  } catch {
    return url;
  }
}
