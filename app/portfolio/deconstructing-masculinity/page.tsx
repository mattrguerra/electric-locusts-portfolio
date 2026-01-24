import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Deconstructing Masculinity | Matthew Guerra — Electric Locusts',
  description:
    'Portrait series challenging narrow societal definitions of manhood. Featuring men of varying races, gender expressions, and perspectives on what it means to identify as male.',
  keywords: [
    'masculinity art project',
    'portrait series gender',
    'challenging gender norms art',
    'men and vulnerability',
    'contemporary portrait photography',
    'gender expression art',
    'Matthew Guerra',
  ],
};

const images = [
  '1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpg',
  '6.jpg', '7.jpg', '8.jpg', '9.jpg', '10.jpg',
  '11.jpg', '13.jpg', '14.jpg', '15.jpg', '16.jpg',
  '17.jpg', '18.jpg', '19.jpg', '20.jpg', '21.jpg',
  '22.jpg', '23.jpg', '24.jpg', '25.jpg', '26.jpg',
  '27.jpg', '28.jpg',
];

export default function DeconstructingMasculinityPage() {
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
              Portrait Photography
            </span>
            <span className="text-white/20">·</span>
            <span className="text-white/30 text-xs tracking-wide">2024</span>
          </div>

          <h1 className="text-5xl md:text-6xl font-display font-light text-white/90 tracking-tight mb-8">
            Deconstructing Masculinity
          </h1>
        </header>

        {/* Artist statement */}
        <article className="prose prose-invert prose-lg max-w-none mb-20">
          <div className="glass-card p-8 md:p-12 rounded-2xl">
            <p className="text-white/70 font-light leading-relaxed text-lg mb-6">
              The archetypal man in our society operates within impossibly narrow boundaries.
            </p>

            <p className="text-white/60 font-light leading-relaxed mb-6">
              To be considered valid, he must be cisgender and heterosexual. He must be stoic—never showing vulnerability. Emotionally unavailable. Aggressive when necessary. Dominant in all spaces. Any deviation from this script invites questioning, ridicule, or exclusion.
            </p>

            <p className="text-white/60 font-light leading-relaxed mb-6">
              These expectations damage everyone.
            </p>

            <p className="text-white/60 font-light leading-relaxed mb-6">
              They create a culture where femininity is demonized and men are forbidden from accessing their full emotional range. They prevent men from seeking help for mental health struggles—contributing directly to crisis-level rates of suicide, addiction, and isolation. They harm women and non-binary people who bear the consequences of this enforced emotional suppression.
            </p>

            <p className="text-white/60 font-light leading-relaxed mb-6">
              <em>Deconstructing Masculinity</em> confronts these limitations directly.
            </p>

            <p className="text-white/60 font-light leading-relaxed mb-6">
              This portrait series presents men of varying races, gender expressions, and perspectives on what it means to identify as male. Each subject challenges the narrow archetype in their own way—through vulnerability, through softness, through simply existing outside the prescribed boundaries.
            </p>

            <p className="text-white/60 font-light leading-relaxed mb-6">
              The work asks viewers to examine their own assumptions: What do we expect men to be? Who benefits from those expectations? What becomes possible when we expand our definitions?
            </p>

            <p className="text-white/60 font-light leading-relaxed">
              Masculinity doesn't have to mean emotional absence. Strength doesn't require suppression. This series imagines what manhood could look like if we allowed it to include the full spectrum of human experience.
            </p>
          </div>
        </article>

        {/* Series details */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mb-20">
          <div>
            <span className="text-white/30 text-xs tracking-widest uppercase block mb-2">Medium</span>
            <span className="text-white/70 font-light">Portrait Photography</span>
          </div>
          <div>
            <span className="text-white/30 text-xs tracking-widest uppercase block mb-2">Year</span>
            <span className="text-white/70 font-light">2024</span>
          </div>
          <div>
            <span className="text-white/30 text-xs tracking-widest uppercase block mb-2">Works</span>
            <span className="text-white/70 font-light">{images.length} portraits</span>
          </div>
        </div>
      </div>

      {/* Gallery - Portrait grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((img, index) => (
            <div key={img} className="group relative overflow-hidden rounded-xl">
              <div className="aspect-[3/4] relative">
                <img
                  src={`/portfolio/masculinity/${img}`}
                  alt={`Deconstructing Masculinity ${index + 1}`}
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
              href="/portfolio/people-who-saved-my-life"
              className="text-white/50 hover:text-white/80 transition-colors duration-300 text-sm"
            >
              People Who Saved My Life →
            </Link>
            <Link
              href="/portfolio/self-annihilation"
              className="text-white/50 hover:text-white/80 transition-colors duration-300 text-sm"
            >
              Self Annihilation →
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
