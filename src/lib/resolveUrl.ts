// src/lib/resolveUrl.ts
export function resolveCdnUrl(s: string): string {
  if (/^https?:\/\//i.test(s)) return s;
  const base = process.env.NEXT_PUBLIC_S3_CDN_BASE || '';
  return `${base.replace(/\/$/, '')}/${s.replace(/^\//, '')}`;
}

type ResolveImageOpts = {
  cdnBase?: string;
  s3Images?: { imageUrl: string }[];
};

export function resolveImageUrl(imageUrl: string | undefined, opts: ResolveImageOpts = {}): string | undefined {
  if (!imageUrl) return undefined;
  if (/^https?:\/\//i.test(imageUrl)) return imageUrl;

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
    if (matchedImage?.imageUrl) return matchedImage.imageUrl;
  }

  if (cdnBase) {
    return `${cdnBase.replace(/\/$/, '')}/${imageUrl.replace(/^\//, '')}`;
  }

  return imageUrl;
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
