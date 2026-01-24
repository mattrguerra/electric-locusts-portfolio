'use client';

import { useState } from 'react';
import Link from 'next/link';

const images = Array.from({ length: 33 }, (_, i) => `${i + 1}.jpg`);

export default function WhatWeWereLeftWithPage() {
  const [showStatement, setShowStatement] = useState(false);

  return (
    <div className="min-h-screen bg-black">
      {/* Compact header with back nav and title */}
      <header className="sticky top-0 z-20 bg-black/90 backdrop-blur-sm border-b border-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-6">
              <Link
                href="/portfolio"
                className="text-gray-500 hover:text-white transition-colors"
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 16l-4-4m0 0l4-4m-4 4h18" />
                </svg>
              </Link>
              <div>
                <h1 className="font-display text-xl md:text-2xl text-white">
                  What We Were Left With
                </h1>
                <p className="text-gray-600 text-xs tracking-wide">
                  Documentary · 2023 · {images.length} works
                </p>
              </div>
            </div>
            <button
              onClick={() => setShowStatement(!showStatement)}
              className="text-gray-500 hover:text-white text-sm transition-colors flex items-center gap-2"
            >
              {showStatement ? 'Hide' : 'Read'} Statement
              <svg
                className={`w-4 h-4 transition-transform ${showStatement ? 'rotate-180' : ''}`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
          </div>
        </div>
      </header>

      {/* Collapsible artist statement */}
      <div className={`overflow-hidden transition-all duration-500 bg-gray-950 border-b border-gray-900 ${showStatement ? 'max-h-[600px]' : 'max-h-0'}`}>
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="prose prose-invert prose-sm max-w-none">
            <p className="text-gray-300 leading-relaxed mb-4">
              My art practice has become a tool for processing what I've survived. This series draws from my personal archive—photographs taken during years of active addiction and the aftermath of trauma.
            </p>
            <p className="text-gray-400 leading-relaxed mb-4">
              By revisiting and curating these images, I've created a visual diary of one of the most difficult chapters of my life: documenting the reality of substance abuse and its consequences in unflinching detail.
            </p>
            <p className="text-gray-400 leading-relaxed mb-4">
              Sharing these photographs validates my own experience. Trauma can make you question your memories, minimize your suffering. Seeing the evidence confirms that I went through something significant and survived it.
            </p>
            <p className="text-gray-400 leading-relaxed">
              The fact that I can look back at these images—that I'm still here to curate them, to transform them into art—is evidence that recovery is possible. The human spirit can survive devastating circumstances.
            </p>
          </div>
        </div>
      </div>

      {/* Gallery - immediate, full-bleed images */}
      <div className="px-2 py-4">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2">
          {images.map((img, index) => (
            <div key={img} className="group relative overflow-hidden bg-gray-950">
              <div className="aspect-[4/5] relative">
                <img
                  src={`/portfolio/what_we_were_left_with/${img}`}
                  alt={`What We Were Left With ${index + 1}`}
                  loading={index < 8 ? 'eager' : 'lazy'}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Next series navigation */}
      <div className="border-t border-gray-900 bg-gray-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <span className="text-gray-600 text-xs tracking-widest uppercase block mb-4">Continue</span>
          <div className="flex flex-wrap gap-6">
            <Link
              href="/portfolio/self-annihilation"
              className="text-gray-400 hover:text-white transition-colors"
            >
              Self Annihilation →
            </Link>
            <Link
              href="/portfolio/exposure"
              className="text-gray-400 hover:text-white transition-colors"
            >
              Exposure →
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
