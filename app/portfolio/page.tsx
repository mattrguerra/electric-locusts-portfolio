import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Work | Matthew Guerra — Electric Locusts',
  description:
    "Explore Matthew Guerra's body of work: Self Annihilation, What We Were Left With, Exposure, People Who Saved My Life, Deconstructing Masculinity, and Mixed. Photography, mixed media, and cyanotype art exploring identity and mental health.",
  keywords: [
    'Matthew Guerra portfolio',
    'Self Annihilation art series',
    'cyanotype portraits',
    'mental health photography',
    'mixed media art',
    'alternative process photography',
  ],
};

const series = [
  {
    slug: 'self-annihilation',
    title: 'Self Annihilation',
    year: '2022',
    medium: 'Mixed Media',
    description: 'Identity, mental illness, and the destruction of self through scratched and burned medium format negatives.',
    image: '/portfolio/self_annihilation/1.jpg',
  },
  {
    slug: 'what-we-were-left-with',
    title: 'What We Were Left With',
    year: '2023',
    medium: 'Documentary Photography',
    description: 'Archival photographs from years of active addiction—evidence of survival transformed into art.',
    image: '/portfolio/what_we_were_left_with/1.jpg',
  },
  {
    slug: 'exposure',
    title: 'Exposure',
    year: '2023',
    medium: 'Photography',
    description: 'Visualizing depression—the slow unraveling, the weight, the feeling of being stripped bare.',
    image: '/portfolio/exposure/_MG_8279.jpg',
  },
  {
    slug: 'people-who-saved-my-life',
    title: 'People Who Saved My Life',
    year: '2024',
    medium: 'Cyanotype',
    description: 'Five portraits of the people whose presence kept me alive, each with a handwritten letter of gratitude.',
    image: '/portfolio/people_saved/Cyanotype0001.jpg',
  },
  {
    slug: 'deconstructing-masculinity',
    title: 'Deconstructing Masculinity',
    year: '2024',
    medium: 'Portrait Photography',
    description: 'Challenging the narrow boundaries of what society allows men to be.',
    image: '/portfolio/masculinity/1.jpg',
  },
  {
    slug: 'mixed',
    title: 'Mixed',
    year: '2021',
    medium: 'Mixed Media',
    description: 'The only work I could create during bipolar mixed episodes—visual chaos mirroring internal chaos.',
    image: '/portfolio/mixed/1.jpg',
  },
];

export default function PortfolioPage() {
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

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Page header */}
        <div className="mb-20 text-center">
          <span className="text-intimate text-sm tracking-widest uppercase block mb-4">
            body of work
          </span>
          <h1 className="text-5xl md:text-6xl font-display font-light text-white/90 tracking-tight mb-6">
            Series
          </h1>
          <p className="text-white/40 max-w-2xl mx-auto text-lg font-light leading-relaxed">
            Each series represents a distinct chapter of exploration—identity, mental illness,
            addiction, gratitude, and the boundaries we construct around gender.
          </p>
        </div>

        {/* Series Grid */}
        <div className="space-y-8">
          {series.map((s, index) => (
            <Link
              key={s.slug}
              href={`/portfolio/${s.slug}`}
              className="group block"
            >
              <article className="glass-card overflow-hidden">
                <div className={`flex flex-col ${index % 2 === 1 ? 'md:flex-row-reverse' : 'md:flex-row'}`}>
                  {/* Image */}
                  <div className="md:w-1/2 relative overflow-hidden">
                    <div className="aspect-[4/3] md:aspect-auto md:h-full relative">
                      <img
                        src={s.image}
                        alt={s.title}
                        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-organic group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-void/60 via-transparent to-transparent" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="md:w-1/2 p-8 md:p-12 flex flex-col justify-center">
                    <div className="flex items-center gap-4 mb-4">
                      <span className="text-cellular-purple text-xs font-medium tracking-widest uppercase">
                        {s.medium}
                      </span>
                      <span className="text-white/20">·</span>
                      <span className="text-white/30 text-xs tracking-wide">
                        {s.year}
                      </span>
                    </div>

                    <h2 className="text-3xl md:text-4xl font-display font-light text-white mb-4 group-hover:text-white/80 transition-colors duration-300">
                      {s.title}
                    </h2>

                    <p className="text-white/40 font-light leading-relaxed mb-6">
                      {s.description}
                    </p>

                    <div className="flex items-center gap-2 text-white/30 group-hover:text-cellular-purple transition-colors duration-300">
                      <span className="text-sm tracking-wide">View Series</span>
                      <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </div>
                  </div>
                </div>
              </article>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
