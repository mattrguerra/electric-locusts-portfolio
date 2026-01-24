'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';

// Cloudinary image URLs for What We Were Left With
const images = [
  'https://res.cloudinary.com/dkrj3oqsy/image/upload/v1769258298/1_ggamf2.jpg',
  'https://res.cloudinary.com/dkrj3oqsy/image/upload/v1769258877/2_bzvxak.jpg',
  'https://res.cloudinary.com/dkrj3oqsy/image/upload/v1769258297/3_lkmhke.jpg',
  'https://res.cloudinary.com/dkrj3oqsy/image/upload/v1769258297/4_auruuw.jpg',
  'https://res.cloudinary.com/dkrj3oqsy/image/upload/v1769258883/5_imt46l.jpg',
  'https://res.cloudinary.com/dkrj3oqsy/image/upload/v1769258894/6_gblx38.jpg',
  'https://res.cloudinary.com/dkrj3oqsy/image/upload/v1769258879/7_rtgrey.jpg',
  'https://res.cloudinary.com/dkrj3oqsy/image/upload/v1769258888/8_hq3fnr.jpg',
  'https://res.cloudinary.com/dkrj3oqsy/image/upload/v1769258288/9_adjzq2.jpg',
  'https://res.cloudinary.com/dkrj3oqsy/image/upload/v1769258288/10_jz7wum.jpg',
  'https://res.cloudinary.com/dkrj3oqsy/image/upload/v1769258286/11_ukzmaa.jpg',
  'https://res.cloudinary.com/dkrj3oqsy/image/upload/v1769258287/12_zra4ii.jpg',
  'https://res.cloudinary.com/dkrj3oqsy/image/upload/v1769258890/13_i67mnm.jpg',
  'https://res.cloudinary.com/dkrj3oqsy/image/upload/v1769258280/14_jcx6gq.jpg',
  'https://res.cloudinary.com/dkrj3oqsy/image/upload/v1769258280/15_cprur4.jpg',
  'https://res.cloudinary.com/dkrj3oqsy/image/upload/v1769258277/16_xjsqpz.jpg',
  'https://res.cloudinary.com/dkrj3oqsy/image/upload/v1769258276/17_zr9zxy.jpg',
  'https://res.cloudinary.com/dkrj3oqsy/image/upload/v1769258275/18_szcopa.jpg',
  'https://res.cloudinary.com/dkrj3oqsy/image/upload/v1769263748/19_ttmjvd.jpg',
  'https://res.cloudinary.com/dkrj3oqsy/image/upload/v1769258274/20_ol23av.jpg',
  'https://res.cloudinary.com/dkrj3oqsy/image/upload/v1769258117/21_vpuitw.jpg',
  'https://res.cloudinary.com/dkrj3oqsy/image/upload/v1769258114/22_bq5wmw.jpg',
  'https://res.cloudinary.com/dkrj3oqsy/image/upload/v1769258117/23_aicajl.jpg',
  'https://res.cloudinary.com/dkrj3oqsy/image/upload/v1769258112/24_fok7u2.jpg',
  'https://res.cloudinary.com/dkrj3oqsy/image/upload/v1769258118/25_fltwnu.jpg',
  'https://res.cloudinary.com/dkrj3oqsy/image/upload/v1769258110/26_pqlvxy.jpg',
  'https://res.cloudinary.com/dkrj3oqsy/image/upload/v1769258116/27_ri4ww5.jpg',
  'https://res.cloudinary.com/dkrj3oqsy/image/upload/v1769258118/28_kjwnsa.jpg',
  'https://res.cloudinary.com/dkrj3oqsy/image/upload/v1769258109/29_gjc8og.jpg',
  'https://res.cloudinary.com/dkrj3oqsy/image/upload/v1769258883/30_btjnma.jpg',
  'https://res.cloudinary.com/dkrj3oqsy/image/upload/v1769258104/31_dl1zup.jpg',
  'https://res.cloudinary.com/dkrj3oqsy/image/upload/v1769258107/32_bcooyv.jpg',
  'https://res.cloudinary.com/dkrj3oqsy/image/upload/v1769258107/33_wng4mt.jpg',
];

export default function WhatWeWereLeftWithPage() {
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
            Documentary · 2023
          </p>
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl text-white mb-6">
            What We Were Left With
          </h1>
          <p className="text-gray-400 text-lg leading-relaxed max-w-2xl">
            Archival photographs from years of active addiction.
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
              My art practice has become a tool for processing what I've survived. This series draws from my personal archive—photographs taken during years of active addiction and the aftermath of trauma.
            </p>
            <p className="text-gray-400">
              By revisiting and curating these images, I've created a visual diary of one of the most difficult chapters of my life: documenting the reality of substance abuse and its consequences in unflinching detail.
            </p>
            <p className="text-gray-400">
              Sharing these photographs validates my own experience. Trauma can make you question your memories, minimize your suffering. Seeing the evidence confirms that I went through something significant and survived it.
            </p>
            <p className="text-gray-400">
              The fact that I can look back at these images—that I'm still here to curate them, to transform them into art—is evidence that recovery is possible. The human spirit can survive devastating circumstances.
            </p>
          </div>
        </motion.div>
      </section>

      {/* Divider */}
      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        <div className="h-px bg-gradient-to-r from-transparent via-gray-800 to-transparent" />
      </div>

      {/* Gallery - larger images */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <h2 className="text-xs tracking-[0.2em] uppercase text-gray-500 mb-8">
            Works · {images.length} pieces
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
                <div className="aspect-[4/5] relative">
                  <img
                    src={img}
                    alt={`What We Were Left With ${index + 1}`}
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
              href="/portfolio/exposure"
              className="group block p-6 bg-gray-900 border border-gray-800 rounded hover:border-gray-700 transition-colors"
            >
              <span className="text-gray-500 text-xs tracking-widest uppercase block mb-2">Next</span>
              <span className="font-display text-xl text-white group-hover:text-gray-200 transition-colors">
                Exposure →
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
