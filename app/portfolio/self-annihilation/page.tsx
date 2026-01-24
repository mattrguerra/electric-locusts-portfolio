'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import VideoPlayer from '@/components/video-player';

const images = [
  '1.jpg', '3.jpg', '5.jpg', '7.jpg', '9.jpg',
  '11.jpg', '13.jpg', '15.jpg', '17.jpg', '19.jpg',
  '21.jpg', '23.jpg', '25.jpg', '27.jpg', '29.jpg',
  '31.jpg', '33.jpg', '35.jpg', '37.jpg', '39.jpg',
];

// TODO: Replace with your Cloudinary video URL
// This video should LOOP endlessly
const VIDEO_URL = process.env.NEXT_PUBLIC_SELF_ANNIHILATION_VIDEO || '';

export default function SelfAnnihilationPage() {
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
            Mixed Media · 2022
          </p>
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl text-white mb-6">
            Self Annihilation
          </h1>
          <p className="text-gray-400 text-lg leading-relaxed max-w-2xl">
            Identity destroyed through scratched and burned negatives.
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
              Identity has always been something I've struggled to define. The search for where I fit in the world has caused me tremendous strife—an obsession that has shaped my entire life.
            </p>
            <p className="text-gray-400">
              This series began with self-portraits shot on medium format film. I would scratch and burn my own image from the negatives—physically removing myself from the frame. What started as destruction became something larger: a visual language for the hollow shell of a person trapped in the cycle of mental illness and substance abuse.
            </p>
            <p className="text-gray-400">
              The work evolved into prints, an artist book functioning as a diary I allow others to read, and video pieces that hint at the devastating effects of addiction.
            </p>
            <p className="text-gray-400">
              If viewing this work inspires even one person to advocate for mental health care—or makes someone battling similar demons feel less alone—then every painful moment of its creation was worth it.
            </p>
          </div>
        </motion.div>
      </section>

      {/* Divider */}
      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        <div className="h-px bg-gradient-to-r from-transparent via-gray-800 to-transparent" />
      </div>

      {/* Video section - loops endlessly */}
      {VIDEO_URL && (
        <section className="max-w-4xl mx-auto px-6 lg:px-8 py-16">
          <h2 className="text-xs tracking-[0.2em] uppercase text-gray-500 mb-8">Video</h2>
          <VideoPlayer
            src={VIDEO_URL}
            loop={true}
          />
        </section>
      )}

      {/* Gallery - larger images, more gallery-like */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <h2 className="text-xs tracking-[0.2em] uppercase text-gray-500 mb-8">
            Works · {images.length} pieces
          </h2>

          {/* Masonry-style gallery with larger images */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {images.map((img, index) => (
              <motion.div
                key={img}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="group relative overflow-hidden bg-gray-950"
              >
                <div className="aspect-[4/5] relative">
                  <img
                    src={`/portfolio/self_annihilation/${img}`}
                    alt={`Self Annihilation ${index + 1}`}
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
              href="/portfolio/what-we-were-left-with"
              className="group block p-6 bg-gray-900 border border-gray-800 rounded hover:border-gray-700 transition-colors"
            >
              <span className="text-gray-500 text-xs tracking-widest uppercase block mb-2">Next</span>
              <span className="font-display text-xl text-white group-hover:text-gray-200 transition-colors">
                What We Were Left With →
              </span>
            </Link>
            <Link
              href="/portfolio/exposure"
              className="group block p-6 bg-gray-900 border border-gray-800 rounded hover:border-gray-700 transition-colors"
            >
              <span className="text-gray-500 text-xs tracking-widest uppercase block mb-2">Also</span>
              <span className="font-display text-xl text-white group-hover:text-gray-200 transition-colors">
                Exposure →
              </span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
