'use client';

import React, { useMemo, useState, useEffect } from 'react';
import Image from 'next/image'; // If using Next.js Image component

/**
 * Fellows Component
 * Renders a list of fellows/persons with avatars, names, titles, descriptions, and badges
 * 
 * Props:
 * - fellows: Array of fellow items with name, title, description, avatarUrl, badges
 * - title?: Optional section title
 * - subtitle?: Optional section subtitle
 * - columns?: Grid columns (2, 3, or 4) - defaults to 3
 * - align?: Text alignment ('left' | 'center') - defaults to 'center'
 */

type FellowItem = {
  name: string;
  title?: string;
  description?: string;
  avatarUrl?: string;
  badges?: string[];
};

type FellowsProps = {
  fellows: FellowItem[];
  title?: string;
  subtitle?: string;
  columns?: 2 | 3 | 4;
  align?: 'left' | 'center';
};

type S3ImageItem = {
  imageUrl: string;
  alt?: string;
};

function initials(name: string) {
  const parts = name.trim().split(/\s+/).slice(0, 2);
  return parts.map((p) => p[0]?.toUpperCase() ?? '').join('');
}

/**
 * Resolves an avatarUrl to a full S3 URL
 * If it's already a full URL (starts with http), returns as-is
 * If it's an S3 key, tries to find it in the fetched S3 images by matching the filename
 */
function resolveAvatarUrl(
  avatarUrl: string | undefined,
  s3Images: S3ImageItem[]
): string | undefined {
  if (!avatarUrl) return undefined;
  
  // If already a full URL, return as-is
  if (avatarUrl.startsWith('http://') || avatarUrl.startsWith('https://')) {
    return avatarUrl;
  }
  
  // If it's an S3 key, try to find the full URL by matching filename
  // Extract the filename from the key (e.g., "fellows/omar.jpg" -> "omar.jpg")
  const filename = avatarUrl.split('/').pop() || avatarUrl;
  
  // Try to find an image with a matching filename
  const matchedImage = s3Images.find((img) => {
    const imgFilename = img.imageUrl.split('/').pop()?.split('?')[0] || '';
    return imgFilename.toLowerCase() === filename.toLowerCase();
  });
  
  return matchedImage?.imageUrl || undefined;
}

export default function Fellows({
  fellows = [],
  title,
  subtitle,
  columns = 3,
  align = 'center',
}: FellowsProps) {
  const [s3Images, setS3Images] = useState<S3ImageItem[]>([]);
  const [loadingImages, setLoadingImages] = useState<boolean>(true);

  // Fetch images from S3 using the same endpoint as the gallery
  useEffect(() => {
    // Check if any fellows have S3 keys (not full URLs) to determine if we need to fetch
    const hasS3Keys = fellows.some(
      (f) => f.avatarUrl && !f.avatarUrl.startsWith('http://') && !f.avatarUrl.startsWith('https://')
    );

    if (!hasS3Keys) {
      setLoadingImages(false);
      return () => {}; // Return empty cleanup function
    }

    const controller = new AbortController();

    (async () => {
      try {
        setLoadingImages(true);
        // Fetch from configs/jose-ortiz/assets prefix, similar to how gallery works
        const res = await fetch(
          `/api/gallery/list?prefix=${encodeURIComponent('configs/jose-ortiz/assets/')}`,
          { signal: controller.signal, cache: 'no-store' }
        );
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        const data = (await res.json()) as { items?: S3ImageItem[] };
        setS3Images(data.items ?? []);
      } catch (e) {
        if ((e as { name?: string }).name !== 'AbortError') {
          console.error('Failed to load fellow images from S3:', e);
        }
      } finally {
        setLoadingImages(false);
      }
    })();

    return () => controller.abort();
  }, [fellows]);

  // Grid column classes
  const gridCols =
    columns === 2
      ? 'grid-cols-1 md:grid-cols-2'
      : columns === 4
      ? 'grid-cols-1 md:grid-cols-2 xl:grid-cols-4'
      : 'grid-cols-1 md:grid-cols-2 xl:grid-cols-3';

  const textAlign = align === 'left' ? 'text-left' : 'text-center';
  
  // Resolve avatar URLs using S3 images
  const fellowsWithResolvedUrls = useMemo(() => {
    return fellows.map((fellow) => ({
      ...fellow,
      avatarUrl: resolveAvatarUrl(fellow.avatarUrl, s3Images),
    }));
  }, [fellows, s3Images]);
  
  console.log('run fellows component', fellowsWithResolvedUrls);
  return (
    <section className="py-16 px-4">
      <div className="mx-auto max-w-6xl">
        {/* Header */}
        {(title || subtitle) && (
          <div className={`${textAlign} max-w-3xl ${align === 'center' ? 'mx-auto' : ''} mb-12`}>
            {title && (
              <h2 className="text-4xl md:text-5xl font-extrabold mb-3">
                {title}
              </h2>
            )}
            {subtitle && (
              <p className="text-lg text-gray-600 dark:text-gray-400">
                {subtitle}
              </p>
            )}
          </div>
        )}

        {/* Fellows Grid */}
        <div className={`grid gap-6 md:gap-8 ${gridCols}`}>
          {fellowsWithResolvedUrls.map((fellow, i) => (
            <div
              key={`${fellow.name}-${i}`}
              className={`bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow ${textAlign}`}
            >
              {/* Avatar */}
              <div className={`mb-4 ${align === 'center' ? 'mx-auto' : ''}`}>
                {fellow.avatarUrl ? (
                  <div className={`relative ${align === 'center' ? 'mx-auto' : ''} w-[150px] h-[150px] rounded-full overflow-hidden`}>
                    <Image
                      src={fellow.avatarUrl}
                      alt={fellow.name}
                      width={150}
                      height={150}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ) : (
                  <div
                    className={`${align === 'center' ? 'mx-auto' : ''} w-[150px] h-[150px] rounded-full flex items-center justify-center bg-gradient-to-br from-blue-500 to-purple-600 text-2xl font-bold text-white`}
                  >
                    {initials(fellow.name)}
                  </div>
                )}
              </div>

              {/* Name */}
              <h3 className="text-xl font-bold mb-1">{fellow.name}</h3>

              {/* Title */}
              {fellow.title && (
                <p className="text-sm font-medium mb-3 text-gray-600 dark:text-gray-400">
                  {fellow.title}
                </p>
              )}

              {/* Description */}
              {fellow.description && (
                <p className="text-sm mb-3 text-gray-700 dark:text-gray-300">
                  {fellow.description}
                </p>
              )}

              {/* Badges */}
              {fellow.badges && fellow.badges.length > 0 && (
                <div
                  className={`flex flex-wrap gap-2 mt-4 ${
                    align === 'center' ? 'justify-center' : 'justify-start'
                  }`}
                >
                  {fellow.badges.map((badge, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 text-xs font-medium rounded-full bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200"
                    >
                      {badge}
                    </span>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
