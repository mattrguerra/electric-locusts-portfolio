'use client';

import { useState } from 'react';
import Link from 'next/link';

const images = [
  '1.jpg', '3.jpg', '5.jpg', '7.jpg', '9.jpg',
  '11.jpg', '13.jpg', '15.jpg', '17.jpg', '19.jpg',
  '21.jpg', '23.jpg', '25.jpg', '27.jpg', '29.jpg',
  '31.jpg', '33.jpg', '35.jpg', '37.jpg', '39.jpg',
];

export default function SelfAnnihilationPage() {
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
                  Self Annihilation
                </h1>
                <p className="text-gray-600 text-xs tracking-wide">
                  Mixed Media · 2022 · {images.length} works
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
              Identity has always been something I've struggled to define. The search for where I fit in the world has caused me tremendous strife—an obsession that has shaped my entire life.
            </p>
            <p className="text-gray-400 leading-relaxed mb-4">
              This series began with self-portraits shot on medium format film. I would scratch and burn my own image from the negatives—physically removing myself from the frame. What started as destruction became something larger: a visual language for the hollow shell of a person trapped in the cycle of mental illness and substance abuse.
            </p>
            <p className="text-gray-400 leading-relaxed mb-4">
              The work evolved into prints, an artist book functioning as a diary I allow others to read, and video pieces that hint at the devastating effects of addiction.
            </p>
            <p className="text-gray-400 leading-relaxed">
              If viewing this work inspires even one person to advocate for mental health care—or makes someone battling similar demons feel less alone—then every painful moment of its creation was worth it.
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
                  src={`/portfolio/self_annihilation/${img}`}
                  alt={`Self Annihilation ${index + 1}`}
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
              href="/portfolio/what-we-were-left-with"
              className="text-gray-400 hover:text-white transition-colors"
            >
              What We Were Left With →
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
