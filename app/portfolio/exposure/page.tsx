import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Exposure | Matthew Guerra — Electric Locusts',
  description:
    'Photography series visualizing the experience of depression—the slow unraveling, the raw vulnerability, the feeling of being stripped bare.',
  keywords: [
    'photography about depression',
    'mental health photo series',
    'vulnerability in art',
    'contemporary photography mental illness',
    'emotional exposure art',
    'depression awareness art',
    'Matthew Guerra',
  ],
};

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
              Photography
            </span>
            <span className="text-white/20">·</span>
            <span className="text-white/30 text-xs tracking-wide">2023</span>
          </div>

          <h1 className="text-5xl md:text-6xl font-display font-light text-white/90 tracking-tight mb-8">
            Exposure
          </h1>
        </header>

        {/* Artist statement */}
        <article className="prose prose-invert prose-lg max-w-none mb-20">
          <div className="glass-card p-8 md:p-12 rounded-2xl">
            <p className="text-white/70 font-light leading-relaxed text-lg mb-6">
              Depression arrives slowly.
            </p>

            <p className="text-white/60 font-light leading-relaxed mb-6">
              The things you once enjoyed become objects of apathy. Getting out of bed feels like dragging weights that leave trails in the ground behind you. Work becomes impossible. Joy becomes a memory you're not sure was ever real.
            </p>

            <p className="text-white/60 font-light leading-relaxed mb-6">
              But what depression does most profoundly is leave you feeling <em>exposed</em>.
            </p>

            <p className="text-white/60 font-light leading-relaxed mb-6">
              Naked and raw in your emotions, you begin to unravel—bit by bit, piece by piece—until there's nothing left to hide behind. The protective layers you've built over a lifetime dissolve, and you're left standing in full view of your own fragility.
            </p>

            <p className="text-white/60 font-light leading-relaxed mb-6">
              Depression is insidious in its approach. Its silent predation creeps so gradually that you don't recognize what's happening until you're already deep inside it. By the time you understand, the weight has become part of you.
            </p>

            <p className="text-white/60 font-light leading-relaxed mb-6">
              I created <em>Exposure</em> because I needed people to understand this experience.
            </p>

            <p className="text-white/60 font-light leading-relaxed mb-6">
              I've fought depression for years, often feeling like no one around me could comprehend the magnitude of what I was carrying. This series attempts to visualize that weight—to make the invisible visible, to externalize what depression feels like from the inside.
            </p>

            <p className="text-white/60 font-light leading-relaxed">
              My hope is that viewers who have experienced this will feel seen, and those who haven't might develop new understanding. Depression thrives in isolation and silence. Art can be a way to break both.
            </p>
          </div>
        </article>

        {/* Series details */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mb-20">
          <div>
            <span className="text-white/30 text-xs tracking-widest uppercase block mb-2">Medium</span>
            <span className="text-white/70 font-light">Photography</span>
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

      {/* Gallery - Full width with larger images for intimate series */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {images.map((img, index) => (
            <div key={img} className="group relative overflow-hidden rounded-xl">
              <div className="aspect-[3/4] relative">
                <img
                  src={`/portfolio/exposure/${img}`}
                  alt={`Exposure ${index + 1}`}
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
              href="/portfolio/people-who-saved-my-life"
              className="text-white/50 hover:text-white/80 transition-colors duration-300 text-sm"
            >
              People Who Saved My Life →
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
