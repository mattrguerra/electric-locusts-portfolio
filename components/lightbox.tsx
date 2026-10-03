'use client';

import { useCallback, useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';
import { cld, cldSrcSet } from '@/lib/cloudinary';

type LightboxProps = {
  images: string[];
  index: number | null;
  onIndexChange: (index: number | null) => void;
  title: string;
};

// Full-screen viewer for a series gallery. Esc closes; arrow keys, the on-screen
// arrows or a horizontal swipe move between photos; a swipe down also closes.
export default function Lightbox({ images, index, onIndexChange, title }: LightboxProps) {
  const count = images.length;
  const open = index !== null && count > 0;
  const dialogRef = useRef<HTMLDivElement>(null);
  const touchStart = useRef<{ x: number; y: number } | null>(null);

  const close = useCallback(() => onIndexChange(null), [onIndexChange]);
  const step = useCallback(
    (delta: number) => {
      if (index !== null) onIndexChange((index + delta + count) % count);
    },
    [index, count, onIndexChange],
  );

  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') close();
      else if (event.key === 'ArrowRight') step(1);
      else if (event.key === 'ArrowLeft') step(-1);
      else if (event.key === 'Tab') trapFocus(event, dialogRef.current);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open, close, step]);

  // Lock page scroll while open and hand focus back to the clicked photo on close.
  useEffect(() => {
    if (!open) return;
    const previousFocus = document.activeElement as HTMLElement | null;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    dialogRef.current?.focus();
    return () => {
      document.body.style.overflow = previousOverflow;
      previousFocus?.focus?.();
    };
  }, [open]);

  // Warm the cache for the neighbouring photos so arrowing feels instant.
  useEffect(() => {
    if (index === null || count < 2) return;
    for (const neighbour of [index + 1, index - 1]) {
      const src = images[(neighbour + count) % count];
      const img = new Image();
      img.sizes = '100vw';
      img.srcset = cldSrcSet(src) ?? '';
      img.src = cld(src, 2000);
    }
  }, [index, count, images]);

  if (!open || index === null) return null;
  const src = images[index];

  return createPortal(
    <div
      ref={dialogRef}
      role="dialog"
      aria-modal="true"
      aria-label={`${title}, image ${index + 1} of ${count}`}
      tabIndex={-1}
      onClick={close}
      onTouchStart={(event) => {
        const touch = event.touches[0];
        touchStart.current = { x: touch.clientX, y: touch.clientY };
      }}
      onTouchEnd={(event) => {
        const start = touchStart.current;
        touchStart.current = null;
        if (!start) return;
        const touch = event.changedTouches[0];
        const dx = touch.clientX - start.x;
        const dy = touch.clientY - start.y;
        if (Math.abs(dx) > 50 && Math.abs(dx) > Math.abs(dy)) step(dx < 0 ? 1 : -1);
        else if (dy > 80 && dy > Math.abs(dx)) close();
      }}
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 outline-none animate-fade-in"
    >
      <img
        key={src}
        src={cld(src, 2000)}
        srcSet={cldSrcSet(src)}
        sizes="100vw"
        alt={`${title}, image ${index + 1} of ${count}`}
        draggable={false}
        onClick={(event) => event.stopPropagation()}
        className="max-h-[88vh] max-w-[92vw] w-auto h-auto object-contain select-none"
      />

      <button
        type="button"
        onClick={(event) => {
          event.stopPropagation();
          close();
        }}
        aria-label="Close"
        className="absolute top-4 right-4 p-3 text-white/60 hover:text-white transition-colors"
      >
        <X className="w-6 h-6" />
      </button>

      {count > 1 && (
        <>
          <button
            type="button"
            onClick={(event) => {
              event.stopPropagation();
              step(-1);
            }}
            aria-label="Previous image"
            className="absolute left-2 md:left-6 top-1/2 -translate-y-1/2 p-3 text-white/50 hover:text-white transition-colors"
          >
            <ChevronLeft className="w-8 h-8" />
          </button>
          <button
            type="button"
            onClick={(event) => {
              event.stopPropagation();
              step(1);
            }}
            aria-label="Next image"
            className="absolute right-2 md:right-6 top-1/2 -translate-y-1/2 p-3 text-white/50 hover:text-white transition-colors"
          >
            <ChevronRight className="w-8 h-8" />
          </button>
        </>
      )}

      <div className="absolute bottom-5 left-1/2 -translate-x-1/2 text-white/50 text-xs font-mono tracking-widest">
        {String(index + 1).padStart(2, '0')} / {String(count).padStart(2, '0')}
      </div>
    </div>,
    document.body,
  );
}

function trapFocus(event: KeyboardEvent, container: HTMLElement | null) {
  const buttons = container ? Array.from(container.querySelectorAll<HTMLElement>('button')) : [];
  if (buttons.length === 0) return;
  const first = buttons[0];
  const last = buttons[buttons.length - 1];
  if (event.shiftKey && (document.activeElement === first || document.activeElement === container)) {
    event.preventDefault();
    last.focus();
  } else if (!event.shiftKey && document.activeElement === last) {
    event.preventDefault();
    first.focus();
  }
}
