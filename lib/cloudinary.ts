// Serve Cloudinary images resized, compressed and in the best format each browser
// supports (AVIF/WebP), instead of the multi-megabyte originals.

const WIDTHS = [480, 800, 1200, 1600, 2000];

export function cld(src: string, width: number): string {
  if (!src.includes('/image/upload/')) return src;
  return src.replace('/image/upload/', `/image/upload/f_auto,q_auto,c_limit,w_${width}/`);
}

export function cldSrcSet(src: string): string | undefined {
  if (!src.includes('/image/upload/')) return undefined;
  return WIDTHS.map((w) => `${cld(src, w)} ${w}w`).join(', ');
}
