import { resolveImageUrl } from './resolveUrl';

export function resolveAssetUrl(url: string | undefined): string | undefined {
  return resolveImageUrl(url);
}

