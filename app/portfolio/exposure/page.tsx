'use client';

import { useState } from 'react';
import Link from 'next/link';

const images = [
  '_MG_8279.jpg',
  '_MG_8281.jpg',
  '_MG_8292.jpg',
  '_MG_8301.jpg',
  '_MG_8308.jpg',
  '_MG_8319.jpg',
  '_MG_8331.jpg',
  '_MG_8335.jpg',
  '_MG_8346.jpg',
];

export default function ExposurePage() {
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
                  Exposure
                </h1>
                <p className="text-gray-600 text-xs tracking-wide">
                  Photography · 2023 · {images.length} works
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
              Depression arrives slowly. The things you once enjoyed become objects of apathy. Getting out of bed feels like dragging weights that leave trails in the ground behind you.
            </p>
            <p className="text-gray-400 leading-relaxed mb-4">
              But what depression does most profoundly is leave you feeling exposed. Naked and raw in your emotions, you begin to unravel—bit by bit, piece by piece—until there's nothing left to hide behind.
            </p>
            <p className="text-gray-400 leading-relaxed mb-4">
              I created this series because I needed people to understand this experience. I've fought depression for years, often feeling like no one around me could comprehend the magnitude of what I was carrying.
            </p>
            <p className="text-gray-400 leading-relaxed">
              My hope is that viewers who have experienced this will feel seen, and those who haven't might develop new understanding. Depression thrives in isolation and silence. Art can be a way to break both.
            </p>
          </div>
        </div>
      </div>

      {/* Gallery - two column for intimate portrait viewing */}
      <div className="px-2 py-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2 max-w-5xl mx-auto">
          {images.map((img, index) => (
            <div key={img} className="group relative overflow-hidden bg-gray-950">
              <div className="aspect-[3/4] relative">
                <img
                  src={`/portfolio/exposure/${img}`}
                  alt={`Exposure ${index + 1}`}
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
              href="/portfolio/people-who-saved-my-life"
              className="text-gray-400 hover:text-white transition-colors"
            >
              People Who Saved My Life →
            </Link>
            <Link
              href="/portfolio/mixed"
              className="text-gray-400 hover:text-white transition-colors"
            >
              Mixed →
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
