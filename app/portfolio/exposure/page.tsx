'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';

// Cloudinary image URLs for Exposure
const images = [
  'https://res.cloudinary.com/dkrj3oqsy/image/upload/v1769257879/_MG_8279_eb8tmi.jpg',
  'https://res.cloudinary.com/dkrj3oqsy/image/upload/v1769257873/_MG_8281_anbtuh.jpg',
  'https://res.cloudinary.com/dkrj3oqsy/image/upload/v1769258349/_MG_8292_xsupta.jpg',
  'https://res.cloudinary.com/dkrj3oqsy/image/upload/v1769257878/_MG_8301_ib7yug.jpg',
  'https://res.cloudinary.com/dkrj3oqsy/image/upload/v1769258348/_MG_8308_t4g1s3.jpg',
  'https://res.cloudinary.com/dkrj3oqsy/image/upload/v1769257874/_MG_8319_ptqt87.jpg',
  'https://res.cloudinary.com/dkrj3oqsy/image/upload/v1769257870/_MG_8331_dfnpqs.jpg',
  'https://res.cloudinary.com/dkrj3oqsy/image/upload/v1769257868/_MG_8335_ajvclc.jpg',
  'https://res.cloudinary.com/dkrj3oqsy/image/upload/v1769258349/_MG_8346_aiuuck.jpg',
];

export default function ExposurePage() {
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
            Photography · 2021
          </p>
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl text-white mb-6">
            Exposure
          </h1>
          <p className="text-gray-400 text-lg leading-relaxed max-w-2xl">
            Visualizing the slow unraveling of depression.
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
              Depression arrives slowly. The things you once enjoyed become objects of apathy. Getting out of bed feels like dragging weights that leave trails in the ground behind you.
            </p>
            <p className="text-gray-400">
              But what depression does most profoundly is leave you feeling exposed. Naked and raw in your emotions, you begin to unravel bit by bit, piece by piece, until there's nothing left but hollowness.
            </p>
            <p className="text-gray-400">
              I created this series because I needed people to understand this experience. I've fought depression for years, often feeling like no one around me could comprehend the magnitude of what I was carrying.
            </p>
            <p className="text-gray-400">
              My hope is that viewers who have experienced this will feel seen, and those who haven't might develop new understanding. Depression thrives in isolation and silence. Art can be a way to break both.
            </p>
          </div>
        </motion.div>
      </section>

      {/* Divider */}
      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        <div className="h-px bg-gradient-to-r from-transparent via-gray-800 to-transparent" />
      </div>

      {/* Gallery - two column for intimate portrait viewing */}
      <section className="py-16">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <h2 className="text-xs tracking-[0.2em] uppercase text-gray-500 mb-8">
            Works · {images.length} pieces
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {images.map((img, index) => (
              <motion.div
                key={img}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="group relative overflow-hidden bg-gray-950"
              >
                <div className="aspect-[3/4] relative">
                  <img
                    src={img}
                    alt={`Exposure ${index + 1}`}
                    loading={index < 4 ? 'eager' : 'lazy'}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.02]"
                  />
                </div>
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
              href="/portfolio/people-who-saved-my-life"
              className="group block p-6 bg-gray-900 border border-gray-800 rounded hover:border-gray-700 transition-colors"
            >
              <span className="text-gray-500 text-xs tracking-widest uppercase block mb-2">Next</span>
              <span className="font-display text-xl text-white group-hover:text-gray-200 transition-colors">
                People Who Saved My Life →
              </span>
            </Link>
            <Link
              href="/portfolio/mixed"
              className="group block p-6 bg-gray-900 border border-gray-800 rounded hover:border-gray-700 transition-colors"
            >
              <span className="text-gray-500 text-xs tracking-widest uppercase block mb-2">Also</span>
              <span className="font-display text-xl text-white group-hover:text-gray-200 transition-colors">
                Mixed →
              </span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
