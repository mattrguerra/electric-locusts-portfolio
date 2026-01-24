import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'What We Were Left With | Matthew Guerra — Electric Locusts',
  description:
    'Documentary photography series transforming personal archive photographs from years of addiction into a visual diary of survival. Evidence that recovery is possible.',
  keywords: [
    'documentary photography addiction',
    'trauma art series',
    'recovery art',
    'personal archive photography',
    'addiction awareness art',
    'survival narrative art',
    'Matthew Guerra',
  ],
};

const images = Array.from({ length: 33 }, (_, i) => `${i + 1}.jpg`);

export default function WhatWeWereLeftWithPage() {
  return (
    <div className="min-h-screen pt-32 pb-24 bg-void">
      {/* Background texture */}
      <div className="organic-texture" />

      {/* Floating cellular shapes */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-32 w-[500px] h-[500px] rounded-full blur-[150px] bg-cellular-purple/8 animate-cellular-breathe" />
        <div
          className="absolute bottom-1/4 -right-32 w-[400px] h-[400px] rounded-full blur-[120px] bg-cellular-blue/6 animate-cellular-breathe"
          style={{ animationDelay: '-12s' }}
        />
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Back navigation */}
        <Link
          href="/portfolio"
          className="inline-flex items-center gap-2 text-white/40 hover:text-white/70 transition-colors duration-300 mb-12"
        >
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 16l-4-4m0 0l4-4m-4 4h18" />
          </svg>
          <span className="text-sm tracking-wide">All Series</span>
        </Link>

        {/* Series header */}
        <header className="mb-16">
          <div className="flex items-center gap-4 mb-6">
            <span className="text-cellular-purple text-xs font-medium tracking-widest uppercase">
              Documentary Photography
            </span>
            <span className="text-white/20">·</span>
            <span className="text-white/30 text-xs tracking-wide">2023</span>
          </div>

          <h1 className="text-5xl md:text-6xl font-display font-light text-white/90 tracking-tight mb-8">
            What We Were Left With
          </h1>
        </header>

        {/* Artist statement */}
        <article className="prose prose-invert prose-lg max-w-none mb-20">
          <div className="glass-card p-8 md:p-12 rounded-2xl">
            <p className="text-white/70 font-light leading-relaxed text-lg mb-6">
              My art practice has become a tool for processing what I've survived.
            </p>

            <p className="text-white/60 font-light leading-relaxed mb-6">
              This series draws from my personal archive—photographs taken during years of active addiction and the aftermath of trauma. By revisiting and curating these images, I've created a visual diary of one of the most difficult chapters of my life: documenting the reality of substance abuse and its consequences in unflinching detail.
            </p>

            <p className="text-white/60 font-light leading-relaxed mb-6">
              Sharing these photographs serves multiple purposes.
            </p>

            <p className="text-white/60 font-light leading-relaxed mb-6">
              First, it validates my own experience. Trauma can make you question your memories, minimize your suffering, or convince you that what happened wasn't real. Seeing the evidence—having it exist outside my own mind—confirms that I went through something significant and survived it.
            </p>

            <p className="text-white/60 font-light leading-relaxed mb-6">
              Second, it illuminates the connection between trauma and mental health. Addiction doesn't happen in isolation. It's often a response to pain that feels otherwise unmanageable. By showing both the behavior and its roots, I hope to build understanding for those still struggling.
            </p>

            <p className="text-white/60 font-light leading-relaxed mb-6">
              Finally, this work is an offering of hope.
            </p>

            <p className="text-white/60 font-light leading-relaxed">
              The fact that I can look back at these images—that I'm still here to curate them, to speak about them, to transform them into art—is evidence that recovery is possible. The human spirit can survive devastating circumstances. There is always potential for healing and growth, even from the darkest places.
            </p>
          </div>
        </article>

        {/* Series details */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mb-20">
          <div>
            <span className="text-white/30 text-xs tracking-widest uppercase block mb-2">Medium</span>
            <span className="text-white/70 font-light">Documentary / Archival Photography</span>
          </div>
          <div>
            <span className="text-white/30 text-xs tracking-widest uppercase block mb-2">Year</span>
            <span className="text-white/70 font-light">2023</span>
          </div>
          <div>
            <span className="text-white/30 text-xs tracking-widest uppercase block mb-2">Works</span>
            <span className="text-white/70 font-light">{images.length} images</span>
          </div>
        </div>
      </div>

      {/* Gallery - Full width */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((img, index) => (
            <div key={img} className="group relative overflow-hidden rounded-xl">
              <div className="aspect-[4/3] relative">
                <img
                  src={`/portfolio/what_we_were_left_with/${img}`}
                  alt={`What We Were Left With ${index + 1}`}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-organic group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-void/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation to other series */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 mt-20">
        <div className="border-t border-white/10 pt-12">
          <span className="text-white/30 text-xs tracking-widest uppercase block mb-6">Continue Exploring</span>
          <div className="flex flex-wrap gap-4">
            <Link
              href="/portfolio/self-annihilation"
              className="text-white/50 hover:text-white/80 transition-colors duration-300 text-sm"
            >
              Self Annihilation →
            </Link>
            <Link
              href="/portfolio/exposure"
              className="text-white/50 hover:text-white/80 transition-colors duration-300 text-sm"
            >
              Exposure →
            </Link>
            <Link
              href="/portfolio/mixed"
              className="text-white/50 hover:text-white/80 transition-colors duration-300 text-sm"
            >
              Mixed →
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
