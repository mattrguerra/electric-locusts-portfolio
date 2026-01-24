'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import VideoPlayer from '@/components/video-player';

const images = ['1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpg', '6.jpg'];

// TODO: Replace with your Cloudinary video URL
// This video should play ONCE and stop
const VIDEO_URL = process.env.NEXT_PUBLIC_MIXED_VIDEO || '';

export default function MixedPage() {
  return (
    <div className="min-h-screen bg-black pt-20">
      {/* Hero section with title and statement */}
      <section className="max-w-4xl mx-auto px-6 lg:px-8 py-16">
        {/* Back link */}
        <Link
          href="/portfolio"
          className="inline-flex items-center gap-2 text-gray-500 hover:text-white transition-colors mb-12"
        >
          <ArrowLeft className="w-4 h-4" />
          <span className="text-sm">All Series</span>
        </Link>

        {/* Title block */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <p className="text-gray-500 text-xs tracking-[0.2em] uppercase mb-4">
            Mixed Media · 2021
          </p>
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl text-white mb-6">
            Mixed
          </h1>
          <p className="text-gray-400 text-lg leading-relaxed max-w-2xl">
            Visual chaos mirroring bipolar mixed episodes.
          </p>
        </motion.div>

        {/* Artist Statement - visible by default */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="border-l-2 border-gray-800 pl-6 mb-16"
        >
          <h2 className="text-xs tracking-[0.2em] uppercase text-gray-500 mb-6">
            Artist Statement
          </h2>
          <div className="space-y-4 text-gray-300 leading-relaxed">
            <p>
              Some experiences resist language. Bipolar mixed episodes exist in that space—where depression and mania collide simultaneously, creating a psychological state that feels impossible to describe.
            </p>
            <p className="text-gray-400">
              This is the only work I could create during one of the darkest periods of my life. The visual chaos, the competing energies, the sense of being pulled apart from the inside. When I couldn't find words for what I was experiencing, I turned to images.
            </p>
            <p className="text-gray-400">
              Creating during crisis became a way to externalize internal chaos—to put something outside of myself that could hold what I couldn't contain alone.
            </p>
            <p className="text-gray-400">
              I share this work because bipolar disorder remains deeply misunderstood. Mixed episodes in particular are rarely discussed, leaving those who experience them feeling isolated. You are not broken. You are not imagining it. And you are not the only one.
            </p>
          </div>
        </motion.div>
      </section>

      {/* Divider */}
      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        <div className="h-px bg-gradient-to-r from-transparent via-gray-800 to-transparent" />
      </div>

      {/* Video section - plays once and stops */}
      {VIDEO_URL && (
        <section className="max-w-4xl mx-auto px-6 lg:px-8 py-16">
          <h2 className="text-xs tracking-[0.2em] uppercase text-gray-500 mb-8">Video</h2>
          <VideoPlayer
            src={VIDEO_URL}
            loop={false}
          />
        </section>
      )}

      {/* Gallery - larger images for impact */}
      <section className="py-16">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <h2 className="text-xs tracking-[0.2em] uppercase text-gray-500 mb-8">
            Works · {images.length} pieces
          </h2>

          {/* Two column gallery for square images */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {images.map((img, index) => (
              <motion.div
                key={img}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="group relative overflow-hidden bg-gray-950"
              >
                <div className="aspect-square relative">
                  <img
                    src={`/portfolio/mixed/${img}`}
                    alt={`Mixed ${index + 1}`}
                    loading={index < 4 ? 'eager' : 'lazy'}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.02]"
                  />
                </div>
                {/* Subtle number indicator */}
                <div className="absolute bottom-4 left-4 text-white/20 text-xs font-mono">
                  {String(index + 1).padStart(2, '0')}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Next series navigation */}
      <section className="border-t border-gray-900 bg-gray-950/50">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 py-16">
          <span className="text-gray-600 text-xs tracking-[0.2em] uppercase block mb-6">
            Continue Exploring
          </span>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Link
              href="/portfolio/self-annihilation"
              className="group block p-6 bg-gray-900 border border-gray-800 rounded hover:border-gray-700 transition-colors"
            >
              <span className="text-gray-500 text-xs tracking-widest uppercase block mb-2">Next</span>
              <span className="font-display text-xl text-white group-hover:text-gray-200 transition-colors">
                Self Annihilation →
              </span>
            </Link>
            <Link
              href="/portfolio/what-we-were-left-with"
              className="group block p-6 bg-gray-900 border border-gray-800 rounded hover:border-gray-700 transition-colors"
            >
              <span className="text-gray-500 text-xs tracking-widest uppercase block mb-2">Also</span>
              <span className="font-display text-xl text-white group-hover:text-gray-200 transition-colors">
                What We Were Left With →
              </span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
