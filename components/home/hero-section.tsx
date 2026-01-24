'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { ArrowDown } from 'lucide-react';

// Series data for interactive preview - ordered by year (descending: 2023 -> 2019)
const series = [
  {
    slug: 'what-we-were-left-with',
    title: 'What We Were Left With',
    year: 2023,
    image: 'https://res.cloudinary.com/dkrj3oqsy/image/upload/v1769258107/33_wng4mt.jpg',
    tagline: 'Evidence of survival',
  },
  {
    slug: 'self-annihilation',
    title: 'Self Annihilation',
    year: 2022,
    image: 'https://res.cloudinary.com/dkrj3oqsy/image/upload/v1769258735/1_plkakn.jpg',
    tagline: 'Identity destroyed',
  },
  {
    slug: 'people-who-saved-my-life',
    title: 'People Who Saved My Life',
    year: 2021,
    image: 'https://res.cloudinary.com/dkrj3oqsy/image/upload/v1769257844/Cyanotype0001_thqymg.jpg',
    tagline: 'Gratitude made visible',
  },
  {
    slug: 'exposure',
    title: 'Exposure',
    year: 2021,
    image: 'https://res.cloudinary.com/dkrj3oqsy/image/upload/v1769257879/_MG_8279_eb8tmi.jpg',
    tagline: 'Depression visualized',
  },
  {
    slug: 'mixed',
    title: 'Mixed',
    year: 2020,
    image: 'https://res.cloudinary.com/dkrj3oqsy/image/upload/v1769257782/1_qoh1en.jpg',
    tagline: 'Chaos contained',
  },
  {
    slug: 'deconstructing-masculinity',
    title: 'Deconstructing Masculinity',
    year: 2019,
    image: 'https://res.cloudinary.com/dkrj3oqsy/image/upload/v1769257508/21_hdndtl.jpg',
    tagline: 'Beyond the archetype',
  },
];

export default function HeroSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isHovering, setIsHovering] = useState(false);
  const containerRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const y = useTransform(scrollYProgress, [0, 0.5], [0, 100]);

  // Auto-rotate through series when not hovering
  useEffect(() => {
    if (isHovering) return;
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % series.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [isHovering]);

  const activeSeries = series[activeIndex];

  return (
    <section
      ref={containerRef}
      className="relative h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image - Full bleed, slow crossfade */}
      <div className="absolute inset-0">
        <AnimatePresence mode="sync">
          <motion.div
            key={activeSeries.slug}
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.35 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5, ease: 'easeInOut' }}
            className="absolute inset-0"
          >
            <img
              src={activeSeries.image}
              alt=""
              className="w-full h-full object-cover"
              style={{ filter: 'grayscale(50%) contrast(1.1)' }}
            />
          </motion.div>
        </AnimatePresence>

        {/* Strong gradient overlays for text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-transparent to-black/70" />
      </div>

      {/* Content */}
      <motion.div
        style={{ opacity, y }}
        className="relative z-10 max-w-6xl mx-auto px-6 lg:px-8 w-full"
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left - Typography */}
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <span className="text-xs tracking-[0.2em] uppercase text-gray-400 block mb-4">Visual Artist</span>
              <h1 className="font-display text-display text-white leading-none drop-shadow-lg">
                Electric<br />Locusts
              </h1>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-lg text-gray-200 max-w-md leading-relaxed"
            >
              What remains when identity fractures? Visual artifacts from the space
              between survival and dissolution.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex items-center gap-4"
            >
              <Link href="/portfolio" className="btn-primary">
                Enter the Work
              </Link>
              <Link href="/about" className="btn-secondary">
                The Artist
              </Link>
            </motion.div>
          </div>

          {/* Right - Interactive Series Preview - clicking takes to portfolio page */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="hidden lg:block"
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
          >
            <div className="bg-black/50 backdrop-blur-sm rounded p-6 border border-white/10">
              <span className="text-xs tracking-[0.2em] uppercase text-gray-400 block mb-4">Explore Series</span>

              <div className="space-y-1">
                {series.map((s, index) => (
                  <Link
                    key={s.slug}
                    href={`/portfolio/${s.slug}`}
                    onMouseEnter={() => setActiveIndex(index)}
                    className={`block w-full text-left px-4 py-3 rounded transition-all duration-300 group ${
                      activeIndex === index
                        ? 'bg-white/10'
                        : 'hover:bg-white/5'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span
                        className={`font-display text-lg transition-colors duration-300 ${
                          activeIndex === index ? 'text-white' : 'text-gray-400'
                        }`}
                      >
                        {s.title}
                      </span>
                      <motion.span
                        initial={false}
                        animate={{
                          opacity: activeIndex === index ? 1 : 0,
                          x: activeIndex === index ? 0 : -10,
                        }}
                        className="text-gray-400 text-sm"
                      >
                        →
                      </motion.span>
                    </div>
                    <AnimatePresence>
                      {activeIndex === index && (
                        <motion.p
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.2 }}
                          className="text-gray-400 text-sm mt-1"
                        >
                          {s.tagline}
                        </motion.p>
                      )}
                    </AnimatePresence>
                  </Link>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          className="flex flex-col items-center gap-3 bg-black/60 px-4 py-2 rounded backdrop-blur-sm"
        >
          <span className="text-[10px] tracking-[0.2em] uppercase text-gray-300">
            Scroll
          </span>
          <ArrowDown className="w-4 h-4 text-gray-300" />
        </motion.div>
      </motion.div>

      {/* Progress dots - mobile series indicator */}
      <div className="absolute bottom-8 right-8 z-20 lg:hidden">
        <div className="flex gap-1.5">
          {series.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${
                activeIndex === index ? 'bg-white w-4' : 'bg-gray-500'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
