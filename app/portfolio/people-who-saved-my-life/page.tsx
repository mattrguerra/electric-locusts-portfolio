'use client';

import { useState } from 'react';
import Link from 'next/link';

const images = [
  'Cyanotype0001.jpg',
  'Cyanotype0003.jpg',
  'Cyanotype0005.jpg',
  'Cyanotype0007.jpg',
  'Cyanotype0009.jpg',
];

export default function PeopleWhoSavedMyLifePage() {
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
                  People Who Saved My Life
                </h1>
                <p className="text-gray-600 text-xs tracking-wide">
                  Cyanotype · 2024 · {images.length} portraits
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
              Creating work about mental health means constantly confronting darkness. Recently, I recognized that this constant engagement with negativity was affecting my own wellbeing.
            </p>
            <p className="text-gray-400 leading-relaxed mb-4">
              This series is a deliberate shift toward gratitude. These five cyanotype portraits present the people whose presence kept me alive. Their support, patience, and love formed the foundation that allowed me to keep going.
            </p>
            <p className="text-gray-400 leading-relaxed mb-4">
              On the reverse of each cyanotype is a handwritten letter to that person, thanking them for what they've meant to my survival. The work exists as both public tribute and private correspondence.
            </p>
            <p className="text-gray-400 leading-relaxed">
              Without these five people, I truly don't believe I would have made it. This series is a testament to the vital importance of support networks—evidence that connection can be the difference between life and death.
            </p>
          </div>
        </div>
      </div>

      {/* Gallery - single column for intimate portrait viewing */}
      <div className="px-2 py-4">
        <div className="max-w-2xl mx-auto space-y-4">
          {images.map((img, index) => (
            <div key={img} className="group relative overflow-hidden bg-gray-950">
              <div className="aspect-[3/4] relative">
                <img
                  src={`/portfolio/people_saved/${img}`}
                  alt={`People Who Saved My Life ${index + 1}`}
                  loading={index < 2 ? 'eager' : 'lazy'}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.01]"
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
              href="/portfolio/deconstructing-masculinity"
              className="text-gray-400 hover:text-white transition-colors"
            >
              Deconstructing Masculinity →
            </Link>
            <Link
              href="/portfolio/self-annihilation"
              className="text-gray-400 hover:text-white transition-colors"
            >
              Self Annihilation →
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
