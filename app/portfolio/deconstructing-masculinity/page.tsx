'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';

const images = [
  '1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpg',
  '6.jpg', '7.jpg', '8.jpg', '9.jpg', '10.jpg',
  '11.jpg', '13.jpg', '14.jpg', '15.jpg', '16.jpg',
  '17.jpg', '18.jpg', '19.jpg', '20.jpg', '21.jpg',
  '22.jpg', '23.jpg', '24.jpg', '25.jpg', '26.jpg',
  '27.jpg', '28.jpg',
];

export default function DeconstructingMasculinityPage() {
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
            Portrait · 2024
          </p>
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl text-white mb-6">
            Deconstructing Masculinity
          </h1>
          <p className="text-gray-400 text-lg leading-relaxed max-w-2xl">
            Challenging the narrow boundaries of manhood.
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
              The archetypal man in our society operates within impossibly narrow boundaries. To be considered valid, he must be cisgender and heterosexual. Stoic—never showing vulnerability. Dominant in all spaces.
            </p>
            <p className="text-gray-400">
              These expectations damage everyone. They create a culture where femininity is demonized and men are forbidden from accessing their full emotional range. They prevent men from seeking help for mental health struggles.
            </p>
            <p className="text-gray-400">
              This portrait series presents men of varying races, gender expressions, and perspectives on what it means to identify as male. Each subject challenges the narrow archetype in their own way—through vulnerability, through softness, through simply existing outside the prescribed boundaries.
            </p>
            <p className="text-gray-400">
              Masculinity doesn't have to mean emotional absence. Strength doesn't require suppression. This series imagines what manhood could look like if we allowed it to include the full spectrum of human experience.
            </p>
          </div>
        </motion.div>
      </section>

      {/* Divider */}
      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        <div className="h-px bg-gradient-to-r from-transparent via-gray-800 to-transparent" />
      </div>

      {/* Gallery - portrait grid */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <h2 className="text-xs tracking-[0.2em] uppercase text-gray-500 mb-8">
            Portraits · {images.length} pieces
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {images.map((img, index) => (
              <motion.div
                key={img}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.03 }}
                className="group relative overflow-hidden bg-gray-950"
              >
                <div className="aspect-[3/4] relative">
                  <img
                    src={`/portfolio/masculinity/${img}`}
                    alt={`Deconstructing Masculinity ${index + 1}`}
                    loading={index < 6 ? 'eager' : 'lazy'}
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
              href="/portfolio/mixed"
              className="group block p-6 bg-gray-900 border border-gray-800 rounded hover:border-gray-700 transition-colors"
            >
              <span className="text-gray-500 text-xs tracking-widest uppercase block mb-2">Next</span>
              <span className="font-display text-xl text-white group-hover:text-gray-200 transition-colors">
                Mixed →
              </span>
            </Link>
            <Link
              href="/portfolio/people-who-saved-my-life"
              className="group block p-6 bg-gray-900 border border-gray-800 rounded hover:border-gray-700 transition-colors"
            >
              <span className="text-gray-500 text-xs tracking-widest uppercase block mb-2">Also</span>
              <span className="font-display text-xl text-white group-hover:text-gray-200 transition-colors">
                People Who Saved My Life →
              </span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
