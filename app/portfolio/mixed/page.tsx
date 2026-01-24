'use client';

import { useState } from 'react';
import Link from 'next/link';

const images = ['1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpg', '6.jpg'];

export default function MixedPage() {
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
                  Mixed
                </h1>
                <p className="text-gray-600 text-xs tracking-wide">
                  Mixed Media · 2021 · {images.length} pieces
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
              Some experiences resist language. Bipolar mixed episodes exist in that space—where depression and mania collide simultaneously, creating a psychological state that feels impossible to describe.
            </p>
            <p className="text-gray-400 leading-relaxed mb-4">
              This is the only work I could create during one of the darkest periods of my life. The visual chaos, the competing energies, the sense of being pulled apart from the inside. When I couldn't find words for what I was experiencing, I turned to images.
            </p>
            <p className="text-gray-400 leading-relaxed mb-4">
              Creating during crisis became a way to externalize internal chaos—to put something outside of myself that could hold what I couldn't contain alone.
            </p>
            <p className="text-gray-400 leading-relaxed">
              I share this work because bipolar disorder remains deeply misunderstood. Mixed episodes in particular are rarely discussed, leaving those who experience them feeling isolated. You are not broken. You are not imagining it. And you are not the only one.
            </p>
          </div>
        </div>
      </div>

      {/* Gallery - two column for visual impact */}
      <div className="px-2 py-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2 max-w-5xl mx-auto">
          {images.map((img, index) => (
            <div key={img} className="group relative overflow-hidden bg-gray-950">
              <div className="aspect-square relative">
                <img
                  src={`/portfolio/mixed/${img}`}
                  alt={`Mixed ${index + 1}`}
                  loading={index < 4 ? 'eager' : 'lazy'}
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
              href="/portfolio/what-we-were-left-with"
              className="text-gray-400 hover:text-white transition-colors"
            >
              What We Were Left With →
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
