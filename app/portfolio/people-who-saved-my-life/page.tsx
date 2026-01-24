'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';

const images = [
  'Cyanotype0001.jpg',
  'Cyanotype0003.jpg',
  'Cyanotype0005.jpg',
  'Cyanotype0007.jpg',
  'Cyanotype0009.jpg',
];

export default function PeopleWhoSavedMyLifePage() {
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
            Cyanotype · 2024
          </p>
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl text-white mb-6">
            People Who Saved My Life
          </h1>
          <p className="text-gray-400 text-lg leading-relaxed max-w-2xl">
            Five portraits with handwritten letters of gratitude.
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
              Creating work about mental health means constantly confronting darkness. Recently, I recognized that this constant engagement with negativity was affecting my own wellbeing.
            </p>
            <p className="text-gray-400">
              This series is a deliberate shift toward gratitude. These five cyanotype portraits present the people whose presence kept me alive. Their support, patience, and love formed the foundation that allowed me to keep going.
            </p>
            <p className="text-gray-400">
              On the reverse of each cyanotype is a handwritten letter to that person, thanking them for what they've meant to my survival. The work exists as both public tribute and private correspondence.
            </p>
            <p className="text-gray-400">
              Without these five people, I truly don't believe I would have made it. This series is a testament to the vital importance of support networks—evidence that connection can be the difference between life and death.
            </p>
          </div>
        </motion.div>
      </section>

      {/* Divider */}
      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        <div className="h-px bg-gradient-to-r from-transparent via-gray-800 to-transparent" />
      </div>

      {/* Gallery - single column for intimate portrait viewing */}
      <section className="py-16">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          <h2 className="text-xs tracking-[0.2em] uppercase text-gray-500 mb-8">
            Portraits · {images.length} pieces
          </h2>

          <div className="space-y-8">
            {images.map((img, index) => (
              <motion.div
                key={img}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group relative overflow-hidden bg-gray-950"
              >
                <div className="aspect-[3/4] relative">
                  <img
                    src={`/portfolio/people_saved/${img}`}
                    alt={`People Who Saved My Life ${index + 1}`}
                    loading={index < 2 ? 'eager' : 'lazy'}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.01]"
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
              href="/portfolio/deconstructing-masculinity"
              className="group block p-6 bg-gray-900 border border-gray-800 rounded hover:border-gray-700 transition-colors"
            >
              <span className="text-gray-500 text-xs tracking-widest uppercase block mb-2">Next</span>
              <span className="font-display text-xl text-white group-hover:text-gray-200 transition-colors">
                Deconstructing Masculinity →
              </span>
            </Link>
            <Link
              href="/portfolio/self-annihilation"
              className="group block p-6 bg-gray-900 border border-gray-800 rounded hover:border-gray-700 transition-colors"
            >
              <span className="text-gray-500 text-xs tracking-widest uppercase block mb-2">Also</span>
              <span className="font-display text-xl text-white group-hover:text-gray-200 transition-colors">
                Self Annihilation →
              </span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
