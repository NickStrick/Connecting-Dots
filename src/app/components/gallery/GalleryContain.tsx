// src/app/components/gallery/GalleryContain.tsx
'use client';

import { useEffect, useState } from 'react';
import Gallery from './Gallery.client';

type GalleryItem = {
  imageUrl: string;
  alt?: string;
  caption?: string;
};

export default function GalleryContain({
  prefix = 'gallery/',
  title = 'Event Gallery',
  subtitle = '',
}: {
  prefix?: string;
  title?: string;
  subtitle?: string;
}) {
  const [items, setItems] = useState<GalleryItem[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const controller = new AbortController();

    (async () => {
      try {
        setLoading(true);
        setError(null);
        // Call your API route relative to the app (no base URL needed on client)
        const res = await fetch(
          `/api/gallery/list?prefix=${encodeURIComponent(prefix)}`,
          { signal: controller.signal, cache: 'no-store' }
        );
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        const data = (await res.json()) as { items?: GalleryItem[] };
        setItems(data.items ?? []);
      } catch (e) {
        if ((e as { name?: string }).name === 'AbortError') return;
        setError(e instanceof Error ? e.message : 'Failed to load gallery');
      } finally {
        setLoading(false);
      }
    })();

    return () => controller.abort();
  }, [prefix]);

  if (error) {
    return (
      <section className="section">
        <div className="mx-auto max-w-6xl text-red-600">
          Could not load gallery: {error}
        </div>
      </section>
    );
  }

  // Optional: very light loading UI
  if (loading && items.length === 0) {
    return (
      <section className="section">
        {/* <div className="mx-auto max-w-6xl">Loading gallery…</div> */}
      </section>
    );
  }

  const section = {
    id: 'gallery',
    type: 'gallery' as const,
    title,
    subtitle,
    style: { columns: 4, rounded: 'lg', gap: 'md' } as const,
    items,
  };

  return <Gallery {...section} />;
}
