import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Self Annihilation | Matthew Guerra — Electric Locusts',
  description:
    'Mixed media series exploring identity, mental illness, and addiction through scratched and burned medium format negatives. Self-portraits physically altered to visualize the hollow shell of survival.',
  keywords: [
    'self portrait art series',
    'mixed media mental health',
    'art about addiction',
    'identity art',
    'scratched negative photography',
    'artist book mental illness',
    'contemporary art depression',
    'Matthew Guerra',
  ],
};

const images = [
  '1.jpg', '3.jpg', '5.jpg', '7.jpg', '9.jpg',
  '11.jpg', '13.jpg', '15.jpg', '17.jpg', '19.jpg',
  '21.jpg', '23.jpg', '25.jpg', '27.jpg', '29.jpg',
  '31.jpg', '33.jpg', '35.jpg', '37.jpg', '39.jpg',
];

export default function SelfAnnihilationPage() {
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
              Mixed Media
            </span>
            <span className="text-white/20">·</span>
            <span className="text-white/30 text-xs tracking-wide">2022</span>
          </div>

          <h1 className="text-5xl md:text-6xl font-display font-light text-white/90 tracking-tight mb-8">
            Self Annihilation
          </h1>
        </header>

        {/* Artist statement */}
        <article className="prose prose-invert prose-lg max-w-none mb-20">
          <div className="glass-card p-8 md:p-12 rounded-2xl">
            <p className="text-white/70 font-light leading-relaxed text-lg mb-6">
              Identity has always been something I've struggled to define.
            </p>

            <p className="text-white/60 font-light leading-relaxed mb-6">
              The search for where I fit in the world has caused me tremendous strife—an obsession that has shaped my entire life. I've lived with an unstable sense of self that has left me broken, confused, and uncertain of my place. How can you accomplish anything meaningful when you don't even know who you are?
            </p>

            <p className="text-white/60 font-light leading-relaxed mb-6">
              This series began with self-portraits shot on medium format film. I would scratch and burn my own image from the negatives—physically removing myself from the frame. What started as destruction became something larger: a visual language for the hollow shell of a person trapped in the cycle of mental illness and substance abuse.
            </p>

            <p className="text-white/60 font-light leading-relaxed mb-6">
              The work evolved into prints, an artist book functioning as a diary I allow others to read, and video pieces that hint at the devastating effects of addiction. Each medium offered a different way to approach the same impossible questions about self and survival.
            </p>

            <p className="text-white/60 font-light leading-relaxed mb-6">
              <em>Self Annihilation</em> was the most difficult work I've ever created. It required me to excavate the darkest corners of my experience and present them without protection. But I believe in the power of this vulnerability.
            </p>

            <p className="text-white/60 font-light leading-relaxed">
              If viewing this work inspires even one person to advocate for mental health care—or makes someone battling similar demons feel less alone—then every painful moment of its creation was worth it.
            </p>
          </div>
        </article>

        {/* Series details */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mb-20">
          <div>
            <span className="text-white/30 text-xs tracking-widest uppercase block mb-2">Medium</span>
            <span className="text-white/70 font-light">Scratched & Burned Film Negatives, Prints, Artist Book, Video</span>
          </div>
          <div>
            <span className="text-white/30 text-xs tracking-widest uppercase block mb-2">Year</span>
            <span className="text-white/70 font-light">2022</span>
          </div>
          <div>
            <span className="text-white/30 text-xs tracking-widest uppercase block mb-2">Works</span>
            <span className="text-white/70 font-light">{images.length} images</span>
          </div>
        </div>
      </div>

      {/* Gallery - Full width */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {images.map((img, index) => (
            <div key={img} className="group relative overflow-hidden rounded-xl">
              <div className="aspect-[4/3] relative">
                <img
                  src={`/portfolio/self_annihilation/${img}`}
                  alt={`Self Annihilation ${index + 1}`}
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
              href="/portfolio/what-we-were-left-with"
              className="text-white/50 hover:text-white/80 transition-colors duration-300 text-sm"
            >
              What We Were Left With →
            </Link>
            <Link
              href="/portfolio/exposure"
              className="text-white/50 hover:text-white/80 transition-colors duration-300 text-sm"
            >
              Exposure →
            </Link>
            <Link
              href="/portfolio/people-who-saved-my-life"
              className="text-white/50 hover:text-white/80 transition-colors duration-300 text-sm"
            >
              People Who Saved My Life →
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
