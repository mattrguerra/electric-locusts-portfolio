'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';

// Cloudinary image URLs for Deconstructing Masculinity
const images = [
  'https://res.cloudinary.com/dkrj3oqsy/image/upload/v1769257516/1_hqb7bn.jpg',
  'https://res.cloudinary.com/dkrj3oqsy/image/upload/v1769257515/2_rcco0d.jpg',
  'https://res.cloudinary.com/dkrj3oqsy/image/upload/v1769257515/3_nu3izm.jpg',
  'https://res.cloudinary.com/dkrj3oqsy/image/upload/v1769257515/4_uzkmwe.jpg',
  'https://res.cloudinary.com/dkrj3oqsy/image/upload/v1769257515/5_xhicfd.jpg',
  'https://res.cloudinary.com/dkrj3oqsy/image/upload/v1769257512/6_sh8xh5.jpg',
  'https://res.cloudinary.com/dkrj3oqsy/image/upload/v1769257512/7_pxnx1p.jpg',
  'https://res.cloudinary.com/dkrj3oqsy/image/upload/v1769257506/8_ebuulv.jpg',
  'https://res.cloudinary.com/dkrj3oqsy/image/upload/v1769257512/9_hl6pwe.jpg',
  'https://res.cloudinary.com/dkrj3oqsy/image/upload/v1769257512/10_ko0f3f.jpg',
  'https://res.cloudinary.com/dkrj3oqsy/image/upload/v1769257512/11_fsniw5.jpg',
  'https://res.cloudinary.com/dkrj3oqsy/image/upload/v1769257510/13_m2avzn.jpg',
  'https://res.cloudinary.com/dkrj3oqsy/image/upload/v1769257506/14_xvdrky.jpg',
  'https://res.cloudinary.com/dkrj3oqsy/image/upload/v1769257506/15_fhhc8x.jpg',
  'https://res.cloudinary.com/dkrj3oqsy/image/upload/v1769257509/16_wvi67t.jpg',
  'https://res.cloudinary.com/dkrj3oqsy/image/upload/v1769257509/17_gafjzw.jpg',
  'https://res.cloudinary.com/dkrj3oqsy/image/upload/v1769257509/18_i0gtjm.jpg',
  'https://res.cloudinary.com/dkrj3oqsy/image/upload/v1769257509/19_zcsbhn.jpg',
  'https://res.cloudinary.com/dkrj3oqsy/image/upload/v1769257512/20_wvuptn.jpg',
  'https://res.cloudinary.com/dkrj3oqsy/image/upload/v1769257508/21_hdndtl.jpg',
  'https://res.cloudinary.com/dkrj3oqsy/image/upload/v1769257508/22_hax6il.jpg',
  'https://res.cloudinary.com/dkrj3oqsy/image/upload/v1769257507/23_bztz50.jpg',
  'https://res.cloudinary.com/dkrj3oqsy/image/upload/v1769257507/24_mupb90.jpg',
  'https://res.cloudinary.com/dkrj3oqsy/image/upload/v1769257512/25_ocddgp.jpg',
  'https://res.cloudinary.com/dkrj3oqsy/image/upload/v1769257508/26_dx6lho.jpg',
  'https://res.cloudinary.com/dkrj3oqsy/image/upload/v1769257507/27_r2nbdy.jpg',
  'https://res.cloudinary.com/dkrj3oqsy/image/upload/v1769257506/28_kdzdgu.jpg',
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
            Portrait · 2019
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
                    src={img}
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
