// Gallery
export type GalleryItem = {
  imageUrl: string;
  alt?: string;
  caption?: string;
};

export type GalleryStyle = {
  columns?: 2 | 3 | 4;
  rounded?: 'lg' | 'xl' | '2xl';
  gap?: 'sm' | 'md' | 'lg';
};

export type GallerySourceStatic = {
  type: 'static';
  items: GalleryItem[];
};

export type GallerySourceS3 = {
  type: 's3';
  prefix: string;       // e.g. "gallery/" or "configs/<siteId>/assets/"
  bucket?: string;      // optional override
  region?: string;      // optional override
  cdnBase?: string;     // optional override (otherwise NEXT_PUBLIC_S3_CDN_BASE)
  limit?: number;
  recursive?: boolean;
};

export type GallerySource = GallerySourceStatic | GallerySourceS3;

export type GallerySection = {
  visible?: boolean;
  id: string;
  type: 'gallery';
  title?: string;
  subtitle?: string;
  items?: GalleryItem[];     // used when source is 'static'
  source?: GallerySource;    // optional; if present and type 's3', load from s3
  style?: GalleryStyle;
  backgroundClass?: string;  // tailwind utility (optional)
};
