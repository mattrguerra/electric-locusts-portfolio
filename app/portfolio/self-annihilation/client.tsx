'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import { cld, cldSrcSet } from '@/lib/cloudinary';
import { imageSize } from '@/lib/image-sizes';
import Lightbox from '@/components/lightbox';
import VideoPlayer from '@/components/video-player';

// Self Annihilation video - loops endlessly
const VIDEO_URL = 'https://res.cloudinary.com/dkrj3oqsy/video/upload/v1769260896/Self_Annihilation_optimized_dgyzmq.mp4';

export default function SelfAnnihilationPage({ images }: { images: string[] }) {
  const [viewing, setViewing] = useState<number | null>(null);

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
              Identity has always been something I've struggled to define. The search for where I fit in the world has caused me tremendous strife and an obsession that has shaped my entire life.
            </p>
            <p className="text-gray-400">
              This series began with self-portraits shot on medium format film. I would scratch and burn my own image from the negatives, physically removing myself from the frame. What started as destruction became a visual language for the hollow shell of a person trapped in the cycle of mental illness and substance abuse.
            </p>
            <p className="text-gray-400">
              The work evolved into prints, an artist book functioning as a diary I allow others to read, and video pieces that hint at the devastating effects of addiction.
            </p>
            <p className="text-gray-400">
              If viewing this work inspires even one person to advocate for mental health care or makes someone battling similar demons feel less alone, then every painful moment of its creation was worth it.
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
          <div className="columns-1 md:columns-2 gap-6">
            {images.map((img, index) => (
              <motion.div
                key={img}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="group relative overflow-hidden bg-gray-950 break-inside-avoid mb-6"
              >
                <button
                  type="button"
                  onClick={() => setViewing(index)}
                  aria-label={`View image ${index + 1} full screen`}
                  className="relative block w-full cursor-zoom-in"
                >
                  <img
                    src={cld(img, 1200)}
                    srcSet={cldSrcSet(img)}
                    sizes="(min-width: 1024px) 530px, (min-width: 768px) 50vw, 100vw"
                    {...imageSize(img)}
                    alt={`Self Annihilation ${index + 1}`}
                    loading={index < 4 ? 'eager' : 'lazy'}
                    className="block w-full h-auto transition-transform duration-700 group-hover:scale-[1.02]"
                  />
                </button>
                {/* Subtle number indicator */}
                <div className="absolute bottom-4 left-4 text-white/20 text-xs font-mono">
                  {String(index + 1).padStart(2, '0')}
                </div>
              </motion.div>
            ))}
          </div>
          <Lightbox images={images} index={viewing} onIndexChange={setViewing} title="Self Annihilation" />
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
