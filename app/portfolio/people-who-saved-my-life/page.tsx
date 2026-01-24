import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'People Who Saved My Life | Matthew Guerra — Electric Locusts',
  description:
    'Five cyanotype portraits honoring the people whose presence kept me alive. Each print includes a handwritten letter of gratitude on the reverse—a testament to the vital importance of support networks.',
  keywords: [
    'cyanotype portrait series',
    'gratitude art project',
    'mental health recovery art',
    'alternative process photography',
    'support network art',
    'art about healing',
    'Matthew Guerra',
  ],
};

const images = [
  'Cyanotype0001.jpg',
  'Cyanotype0003.jpg',
  'Cyanotype0005.jpg',
  'Cyanotype0007.jpg',
  'Cyanotype0009.jpg',
];

export default function PeopleWhoSavedMyLifePage() {
  return (
    <div className="min-h-screen pt-32 pb-24 bg-void">
      {/* Background texture */}
      <div className="organic-texture" />

      {/* Floating cellular shapes */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-32 w-[500px] h-[500px] rounded-full blur-[150px] bg-cellular-blue/10 animate-cellular-breathe" />
        <div
          className="absolute bottom-1/4 -right-32 w-[400px] h-[400px] rounded-full blur-[120px] bg-cellular-cyan/8 animate-cellular-breathe"
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
            <span className="text-cellular-cyan text-xs font-medium tracking-widest uppercase">
              Cyanotype
            </span>
            <span className="text-white/20">·</span>
            <span className="text-white/30 text-xs tracking-wide">2024</span>
          </div>

          <h1 className="text-5xl md:text-6xl font-display font-light text-white/90 tracking-tight mb-8">
            People Who Saved My Life
          </h1>
        </header>

        {/* Artist statement */}
        <article className="prose prose-invert prose-lg max-w-none mb-20">
          <div className="glass-card p-8 md:p-12 rounded-2xl">
            <p className="text-white/70 font-light leading-relaxed text-lg mb-6">
              Creating work about mental health means constantly confronting darkness.
            </p>

            <p className="text-white/60 font-light leading-relaxed mb-6">
              The subject matter of most of my practice carries an unavoidable weight—themes of depression, addiction, and identity crisis that can feel overwhelming to live inside. Recently, I recognized that this constant engagement with negativity was affecting my own wellbeing. I was addressing the same pain repeatedly without making space for what had also been true: I survived because of other people.
            </p>

            <p className="text-white/60 font-light leading-relaxed mb-6">
              This series is a deliberate shift toward gratitude.
            </p>

            <p className="text-white/60 font-light leading-relaxed mb-6">
              <em>People Who Saved My Life</em> presents five portraits printed as cyanotypes—the ethereal blue tones creating an almost sacred quality around each subject. These are the people whose presence kept me alive. Their support, patience, and love formed the foundation that allowed me to keep going when I couldn't see a reason to.
            </p>

            <p className="text-white/60 font-light leading-relaxed mb-6">
              On the reverse of each cyanotype is a handwritten letter to that person, thanking them for what they've meant to my survival. The work exists as both public tribute and private correspondence.
            </p>

            <p className="text-white/60 font-light leading-relaxed mb-6">
              Without these five people, I truly don't believe I would have made it.
            </p>

            <p className="text-white/60 font-light leading-relaxed">
              This series is a testament to the vital importance of support networks. It's evidence that connection can be the difference between life and death—and a reminder that acknowledging the people who save us is itself an act of healing.
            </p>
          </div>
        </article>

        {/* Series details */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mb-20">
          <div>
            <span className="text-white/30 text-xs tracking-widest uppercase block mb-2">Medium</span>
            <span className="text-white/70 font-light">Cyanotype on Watercolor Paper with Handwritten Letters</span>
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

      {/* Gallery - Single column for intimate portrait viewing */}
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="space-y-12">
          {images.map((img, index) => (
            <div key={img} className="group relative overflow-hidden rounded-xl">
              <div className="aspect-[3/4] relative">
                <img
                  src={`/portfolio/people_saved/${img}`}
                  alt={`People Who Saved My Life ${index + 1}`}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-organic group-hover:scale-[1.02]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-void/30 via-transparent to-transparent" />
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
              href="/portfolio/deconstructing-masculinity"
              className="text-white/50 hover:text-white/80 transition-colors duration-300 text-sm"
            >
              Deconstructing Masculinity →
            </Link>
            <Link
              href="/portfolio/exposure"
              className="text-white/50 hover:text-white/80 transition-colors duration-300 text-sm"
            >
              Exposure →
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
