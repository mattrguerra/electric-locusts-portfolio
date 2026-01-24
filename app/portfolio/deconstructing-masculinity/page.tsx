'use client';

import { useState } from 'react';
import Link from 'next/link';

const images = [
  '1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpg',
  '6.jpg', '7.jpg', '8.jpg', '9.jpg', '10.jpg',
  '11.jpg', '13.jpg', '14.jpg', '15.jpg', '16.jpg',
  '17.jpg', '18.jpg', '19.jpg', '20.jpg', '21.jpg',
  '22.jpg', '23.jpg', '24.jpg', '25.jpg', '26.jpg',
  '27.jpg', '28.jpg',
];

export default function DeconstructingMasculinityPage() {
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
                  Deconstructing Masculinity
                </h1>
                <p className="text-gray-600 text-xs tracking-wide">
                  Portrait · 2024 · {images.length} portraits
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
      <div className={`overflow-hidden transition-all duration-500 bg-gray-950 border-b border-gray-900 ${showStatement ? 'max-h-[700px]' : 'max-h-0'}`}>
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="prose prose-invert prose-sm max-w-none">
            <p className="text-gray-300 leading-relaxed mb-4">
              The archetypal man in our society operates within impossibly narrow boundaries. To be considered valid, he must be cisgender and heterosexual. Stoic—never showing vulnerability. Dominant in all spaces.
            </p>
            <p className="text-gray-400 leading-relaxed mb-4">
              These expectations damage everyone. They create a culture where femininity is demonized and men are forbidden from accessing their full emotional range. They prevent men from seeking help for mental health struggles.
            </p>
            <p className="text-gray-400 leading-relaxed mb-4">
              This portrait series presents men of varying races, gender expressions, and perspectives on what it means to identify as male. Each subject challenges the narrow archetype in their own way—through vulnerability, through softness, through simply existing outside the prescribed boundaries.
            </p>
            <p className="text-gray-400 leading-relaxed">
              Masculinity doesn't have to mean emotional absence. Strength doesn't require suppression. This series imagines what manhood could look like if we allowed it to include the full spectrum of human experience.
            </p>
          </div>
        </div>
      </div>

      {/* Gallery - portrait grid */}
      <div className="px-2 py-4">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2">
          {images.map((img, index) => (
            <div key={img} className="group relative overflow-hidden bg-gray-950">
              <div className="aspect-[3/4] relative">
                <img
                  src={`/portfolio/masculinity/${img}`}
                  alt={`Deconstructing Masculinity ${index + 1}`}
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
