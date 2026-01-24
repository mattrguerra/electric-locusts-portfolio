import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Mixed | Matthew Guerra — Electric Locusts',
  description:
    'Visual exploration of bipolar mixed episodes—where depression and mania collide simultaneously. The only work I could create during one of the darkest periods of my life.',
  keywords: [
    'bipolar disorder art',
    'mixed episodes visualization',
    'mental health art series',
    'art about mania and depression',
    'bipolar awareness art',
    'psychological art',
    'Matthew Guerra',
  ],
};

const images = ['1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpg', '6.jpg'];

export default function MixedPage() {
  return (
    <div className="min-h-screen pt-32 pb-24 bg-void">
      {/* Background texture */}
      <div className="organic-texture" />

      {/* Floating cellular shapes - more chaotic for this series */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/3 -left-32 w-[500px] h-[500px] rounded-full blur-[150px] bg-cellular-purple/10 animate-cellular-breathe" />
        <div
          className="absolute top-1/4 right-1/4 w-[300px] h-[300px] rounded-full blur-[100px] bg-bruise-deep/15 animate-cellular-breathe"
          style={{ animationDelay: '-8s' }}
        />
        <div
          className="absolute bottom-1/4 -right-32 w-[400px] h-[400px] rounded-full blur-[120px] bg-cellular-blue/8 animate-cellular-breathe"
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
              Mixed Media
            </span>
            <span className="text-white/20">·</span>
            <span className="text-white/30 text-xs tracking-wide">2021</span>
          </div>

          <h1 className="text-5xl md:text-6xl font-display font-light text-white/90 tracking-tight mb-8">
            Mixed
          </h1>
        </header>

        {/* Artist statement */}
        <article className="prose prose-invert prose-lg max-w-none mb-20">
          <div className="glass-card p-8 md:p-12 rounded-2xl">
            <p className="text-white/70 font-light leading-relaxed text-lg mb-6">
              Some experiences resist language.
            </p>

            <p className="text-white/60 font-light leading-relaxed mb-6">
              Bipolar mixed episodes exist in that space—where depression and mania collide simultaneously, creating a psychological state that feels impossible to describe to anyone who hasn't lived it. You're exhausted but unable to rest. Hopeless but agitated. Your mind races through darkness at impossible speed.
            </p>

            <p className="text-white/60 font-light leading-relaxed mb-6">
              <em>Mixed</em> is the only work I could create during one of the darkest periods of my life.
            </p>

            <p className="text-white/60 font-light leading-relaxed mb-6">
              This series doesn't attempt to explain mixed episodes—it attempts to <em>show</em> them. The visual chaos, the competing energies, the sense of being pulled apart from the inside. When I couldn't find words for what I was experiencing, I turned to images.
            </p>

            <p className="text-white/60 font-light leading-relaxed mb-6">
              The work serves as both documentation and survival mechanism. Creating during crisis became a way to externalize internal chaos—to put something outside of myself that could hold what I couldn't contain alone.
            </p>

            <p className="text-white/60 font-light leading-relaxed mb-6">
              I share this work because bipolar disorder remains deeply misunderstood. Mixed episodes in particular are rarely discussed, leaving those who experience them feeling isolated in their confusion. This series is for anyone who has felt that particular kind of alone.
            </p>

            <p className="text-white/60 font-light leading-relaxed">
              You are not broken. You are not imagining it. And you are not the only one.
            </p>
          </div>
        </article>

        {/* Series details */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mb-20">
          <div>
            <span className="text-white/30 text-xs tracking-widest uppercase block mb-2">Medium</span>
            <span className="text-white/70 font-light">Mixed Media / Visual Art</span>
          </div>
          <div>
            <span className="text-white/30 text-xs tracking-widest uppercase block mb-2">Year</span>
            <span className="text-white/70 font-light">2021</span>
          </div>
          <div>
            <span className="text-white/30 text-xs tracking-widest uppercase block mb-2">Works</span>
            <span className="text-white/70 font-light">{images.length} pieces</span>
          </div>
        </div>
      </div>

      {/* Gallery - Two column for visual impact */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {images.map((img, index) => (
            <div key={img} className="group relative overflow-hidden rounded-xl">
              <div className="aspect-square relative">
                <img
                  src={`/portfolio/mixed/${img}`}
                  alt={`Mixed ${index + 1}`}
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
              href="/portfolio/what-we-were-left-with"
              className="text-white/50 hover:text-white/80 transition-colors duration-300 text-sm"
            >
              What We Were Left With →
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
