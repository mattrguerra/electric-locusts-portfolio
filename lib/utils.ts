import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatDate(date: Date | string | null | undefined): string {
  if (!date) return '';
  const d = typeof date === 'string' ? new Date(date) : date;
  return d?.toLocaleDateString?.('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }) ?? '';
}

export function slugify(text: string | null | undefined): string {
  return (text ?? '')
    .toLowerCase()
    .replace(/[^\w\s-]/g, '')
    .replace(/[\s_-]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

export function truncate(text: string | null | undefined, length: number): string {
  const safeText = text ?? '';
  if (safeText.length <= length) return safeText;
  return safeText.slice(0, length) + '...';
}

export function getReadingTime(content: string | null | undefined): number {
  const wordsPerMinute = 200;
  const words = (content ?? '').trim().split(/\s+/)?.length ?? 0;
  return Math.ceil(words / wordsPerMinute);
}
