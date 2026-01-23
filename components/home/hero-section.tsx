'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { useRef } from 'react';

export default function HeroSection() {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  });

  // Parallax transforms
  const y1 = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.95]);

  return (
    <section
      ref={containerRef}
      className="relative min-h-[100vh] flex items-center justify-center overflow-hidden bg-void"
    >
      {/* Organic texture layer */}
      <div className="organic-texture" />

      {/* Cellular background shapes - breathing and floating */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Primary cellular orb - deep purple */}
        <motion.div
          style={{ y: y1 }}
          className="absolute -top-32 -right-32 w-[500px] h-[500px] rounded-full animate-cellular-breathe"
        >
          <div
            className="w-full h-full rounded-full blur-[120px]"
            style={{
              background:
                'radial-gradient(circle, rgba(107, 74, 139, 0.4) 0%, rgba(42, 26, 58, 0.2) 60%, transparent 80%)',
            }}
          />
        </motion.div>

        {/* Secondary cellular orb - blue */}
        <motion.div
          style={{ y: y2 }}
          className="absolute -bottom-48 -left-32 w-[600px] h-[600px] rounded-full animate-cellular-breathe"
        >
          <div
            className="w-full h-full rounded-full blur-[140px]"
            style={{
              background:
                'radial-gradient(circle, rgba(74, 124, 184, 0.3) 0%, rgba(90, 168, 184, 0.15) 50%, transparent 80%)',
              animationDelay: '-7s',
            }}
          />
        </motion.div>

        {/* Tertiary orb - bruise tone */}
        <motion.div className="absolute top-1/3 left-1/4 w-[350px] h-[350px] rounded-full animate-organic-float">
          <div
            className="w-full h-full rounded-full blur-[100px]"
            style={{
              background:
                'radial-gradient(circle, rgba(74, 42, 90, 0.25) 0%, transparent 70%)',
            }}
          />
        </motion.div>

        {/* Small accent orbs */}
        <div className="absolute top-1/4 right-1/4 w-[150px] h-[150px] rounded-full animate-organic-float blur-[60px] bg-cellular-cyan/20" />
        <div
          className="absolute bottom-1/3 right-1/3 w-[100px] h-[100px] rounded-full animate-cellular-breathe blur-[50px] bg-cellular-purple/15"
          style={{ animationDelay: '-10s' }}
        />
      </div>

      {/* Atmospheric gradient overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'linear-gradient(180deg, transparent 0%, rgba(3, 3, 4, 0.3) 50%, rgba(3, 3, 4, 0.6) 100%)',
        }}
      />

      {/* Content */}
      <motion.div
        style={{ opacity, scale }}
        className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
      >
        <motion.div
          initial={{ opacity: 0, y: 40, filter: 'blur(10px)' }}
          animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          transition={{ duration: 0.8, ease: [0.4, 0, 0.1, 1] }}
          className="space-y-10"
        >
          {/* Intimate subtitle - above name */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-intimate text-lg tracking-wide"
          >
            exploring the dissolution of self
          </motion.p>

          {/* Artist name - primary heading */}
          <h1 className="space-y-2">
            <span className="block text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-display font-light tracking-tight">
              <span className="gradient-text">Matthew</span>
            </span>
            <span className="block text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-display font-extralight tracking-wide text-white/90">
              Guerra
            </span>
          </h1>

          {/* Artist statement - brief */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="text-lg sm:text-xl text-white/40 max-w-xl mx-auto leading-relaxed font-light"
          >
            Visual artist working at the intersection of identity, vulnerability,
            and the fragmented self. Photography, mixed media, and psychological
            exploration.
          </motion.p>

          {/* CTA buttons - Dissolution style */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.6 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-6"
          >
            <Link href="/portfolio">
              <button className="btn-dissolution group flex items-center gap-3">
                <span>View Work</span>
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
              </button>
            </Link>
            <Link href="/about">
              <button className="btn-ghost">About the Artist</button>
            </Link>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Scroll indicator - organic style */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
          className="flex flex-col items-center gap-3"
        >
          <span className="text-xs text-white/20 tracking-widest uppercase">
            Scroll
          </span>
          <div className="w-px h-12 bg-gradient-to-b from-white/20 to-transparent" />
        </motion.div>
      </motion.div>

      {/* Cellular overlay effect */}
      <div className="cellular-overlay opacity-30" />
    </section>
  );
}
