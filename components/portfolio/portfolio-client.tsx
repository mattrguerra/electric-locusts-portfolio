'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

interface PortfolioItem {
  id: string;
  title: string;
  description: string;
  category: string;
  imageUrl: string;
  tags: string[];
}

const categories = [
  { id: 'all', label: 'All' },
  { id: 'Self Annihilation', label: 'Self Annihilation' },
  { id: 'What We Were Left With', label: 'What We Were Left With' },
  { id: 'People Who Saved My Life', label: 'People Who Saved My Life' },
  { id: 'Exposure', label: 'Exposure' },
  { id: 'Deconstructing Masculinity', label: 'Deconstructing Masculinity' },
  { id: 'Mixed', label: 'Mixed Media' },
];

export default function PortfolioClient() {
  const [items, setItems] = useState<PortfolioItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [activeCategory, setActiveCategory] = useState('all');
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    fetch('/api/portfolio')
      .then((res) => res?.json?.() ?? Promise.resolve({ items: [] }))
      .then((data) => {
        setItems(data?.items ?? []);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  const filteredItems =
    activeCategory === 'all'
      ? items
      : items?.filter?.((item) => item?.category === activeCategory) ?? [];

  const openLightbox = (index: number) => {
    setCurrentIndex(index);
    setLightboxOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
    document.body.style.overflow = '';
  };

  const nextImage = () => {
    setCurrentIndex((prev) => (prev + 1) % (filteredItems?.length ?? 1));
  };

  const prevImage = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + (filteredItems?.length ?? 1)) % (filteredItems?.length ?? 1)
    );
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!lightboxOpen) return;
      if (e.key === 'ArrowRight') nextImage();
      if (e.key === 'ArrowLeft') prevImage();
      if (e.key === 'Escape') closeLightbox();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightboxOpen, filteredItems?.length]);

  const currentItem = filteredItems?.[currentIndex];

  return (
    <div className="min-h-screen pt-32 pb-24 bg-void">
      {/* Background texture */}
      <div className="organic-texture" />

      {/* Floating cellular shapes */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-32 w-[500px] h-[500px] rounded-full blur-[150px] bg-cellular-purple/8 animate-cellular-breathe" />
        <div
          className="absolute bottom-1/4 -right-32 w-[400px] h-[400px] rounded-full blur-[120px] bg-cellular-blue/6 animate-cellular-breathe"
          style={{ animationDelay: '-12s' }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Page header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-16 text-center"
        >
          <span className="text-intimate text-sm tracking-widest uppercase block mb-4">
            body of work
          </span>
          <h1 className="text-5xl md:text-6xl font-display font-light text-white/90 tracking-tight mb-6">
            Portfolio
          </h1>
          <p className="text-white/40 max-w-xl mx-auto text-lg font-light">
            Exploring identity, vulnerability, and the dissolution of self through
            photography, mixed media, and psychological inquiry.
          </p>
        </motion.div>

        {/* Category Filter - Minimal pills */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="flex flex-wrap justify-center gap-2 mb-16"
        >
          {categories?.map?.((cat) => (
            <button
              key={cat?.id}
              onClick={() => setActiveCategory(cat?.id ?? 'all')}
              className={`px-5 py-2.5 rounded-full text-sm font-light tracking-wide transition-all duration-500 ease-organic ${
                activeCategory === cat?.id
                  ? 'bg-white/10 text-white border border-white/10'
                  : 'text-white/40 hover:text-white/60 border border-transparent'
              }`}
            >
              {cat?.label ?? ''}
            </button>
          )) ?? null}
        </motion.div>

        {/* Portfolio Grid - Masonry-like */}
        {loading ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div
                key={i}
                className="aspect-[4/5] rounded-2xl bg-white/[0.02] animate-pulse"
              />
            ))}
          </div>
        ) : (
          <motion.div
            layout
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
          >
            <AnimatePresence mode="popLayout">
              {filteredItems?.map?.((item, index) => (
                <motion.div
                  key={item?.id}
                  layout
                  initial={{ opacity: 0, scale: 0.95, filter: 'blur(10px)' }}
                  animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
                  exit={{ opacity: 0, scale: 0.95, filter: 'blur(10px)' }}
                  transition={{ duration: 0.5, ease: [0.4, 0, 0.1, 1] }}
                  onClick={() => openLightbox(index)}
                  className="group relative rounded-2xl overflow-hidden cursor-pointer glass-card"
                  style={{
                    // Vary heights for masonry effect
                    aspectRatio: index % 3 === 0 ? '3/4' : index % 3 === 1 ? '4/5' : '1/1',
                  }}
                >
                  <Image
                    src={item?.imageUrl ?? '/placeholder.jpg'}
                    alt={item?.title ?? 'Portfolio item'}
                    fill
                    className="object-cover transition-all duration-700 ease-organic group-hover:scale-105 img-atmospheric"
                  />

                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-void via-transparent to-transparent opacity-80" />

                  {/* Hover overlay with cellular effect */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-500">
                    <div className="absolute inset-0 bg-gradient-to-t from-void via-bruise-deep/30 to-transparent" />
                    <div className="cellular-overlay opacity-40" />
                  </div>

                  {/* Content */}
                  <div className="absolute bottom-0 left-0 right-0 p-5 translate-y-2 group-hover:translate-y-0 transition-transform duration-500 ease-organic">
                    <span className="text-white/30 text-xs tracking-widest uppercase opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      {item?.category ?? ''}
                    </span>
                    <h3 className="text-lg font-display font-light text-white mt-1">
                      {item?.title ?? ''}
                    </h3>
                  </div>
                </motion.div>
              )) ?? null}
            </AnimatePresence>
          </motion.div>
        )}

        {/* Empty state */}
        {!loading && (filteredItems?.length ?? 0) === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-24"
          >
            <p className="text-white/30 text-lg font-light">
              No works found in this collection.
            </p>
          </motion.div>
        )}
      </div>

      {/* Lightbox - Immersive gallery view */}
      <AnimatePresence>
        {lightboxOpen && currentItem && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="fixed inset-0 z-50 bg-void/98 backdrop-blur-2xl flex items-center justify-center"
            onClick={closeLightbox}
          >
            {/* Organic background shapes */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <div className="absolute top-0 left-1/4 w-[600px] h-[600px] rounded-full blur-[200px] bg-cellular-purple/10" />
              <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] rounded-full blur-[180px] bg-cellular-blue/8" />
            </div>

            {/* Close button */}
            <motion.button
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              onClick={(e) => {
                e.stopPropagation();
                closeLightbox();
              }}
              className="absolute top-6 right-6 p-3 rounded-full text-white/40 hover:text-white hover:bg-white/5 transition-all duration-300 z-10"
            >
              <X className="w-6 h-6" />
            </motion.button>

            {/* Navigation buttons */}
            <motion.button
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              onClick={(e) => {
                e.stopPropagation();
                prevImage();
              }}
              className="absolute left-4 md:left-8 p-4 rounded-full text-white/30 hover:text-white hover:bg-white/5 transition-all duration-300"
            >
              <ChevronLeft className="w-8 h-8" />
            </motion.button>

            <motion.button
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              onClick={(e) => {
                e.stopPropagation();
                nextImage();
              }}
              className="absolute right-4 md:right-8 p-4 rounded-full text-white/30 hover:text-white hover:bg-white/5 transition-all duration-300"
            >
              <ChevronRight className="w-8 h-8" />
            </motion.button>

            {/* Image and info */}
            <motion.div
              key={currentItem?.id}
              initial={{ opacity: 0, scale: 0.95, filter: 'blur(10px)' }}
              animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
              exit={{ opacity: 0, scale: 0.95, filter: 'blur(10px)' }}
              transition={{ duration: 0.4, ease: [0.4, 0, 0.1, 1] }}
              className="max-w-6xl w-full mx-4 md:mx-8"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative aspect-[4/3] md:aspect-video rounded-2xl overflow-hidden glass-card">
                <Image
                  src={currentItem?.imageUrl ?? '/placeholder.jpg'}
                  alt={currentItem?.title ?? 'Portfolio item'}
                  fill
                  className="object-contain"
                />
              </div>

              {/* Info below image */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="mt-8 text-center"
              >
                <span className="text-cellular-purple text-xs font-medium tracking-widest uppercase">
                  {currentItem?.category ?? ''}
                </span>
                <h2 className="text-2xl md:text-3xl font-display font-light text-white mt-2">
                  {currentItem?.title ?? ''}
                </h2>
                {currentItem?.description && (
                  <p className="text-white/40 mt-3 max-w-2xl mx-auto font-light">
                    {currentItem.description}
                  </p>
                )}

                {/* Tags */}
                {(currentItem?.tags?.length ?? 0) > 0 && (
                  <div className="flex flex-wrap justify-center gap-2 mt-6">
                    {currentItem?.tags?.map?.((tag) => (
                      <span
                        key={tag}
                        className="px-4 py-1.5 rounded-full text-xs text-white/40 border border-white/10"
                      >
                        {tag}
                      </span>
                    )) ?? null}
                  </div>
                )}

                {/* Image counter */}
                <p className="text-white/20 text-sm mt-6">
                  {currentIndex + 1} / {filteredItems?.length ?? 0}
                </p>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
