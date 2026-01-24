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
    description: 'Identity destroyed through scratched and burned negatives.',
    image: '/portfolio/self_annihilation/1.jpg',
  },
  {
    slug: 'what-we-were-left-with',
    title: 'What We Were Left With',
    year: '2023',
    medium: 'Documentary',
    description: 'Archival photographs from years of active addiction.',
    image: '/portfolio/what_we_were_left_with/1.jpg',
  },
  {
    slug: 'exposure',
    title: 'Exposure',
    year: '2023',
    medium: 'Photography',
    description: 'Visualizing the slow unraveling of depression.',
    image: '/portfolio/exposure/_MG_8279.jpg',
  },
  {
    slug: 'people-who-saved-my-life',
    title: 'People Who Saved My Life',
    year: '2024',
    medium: 'Cyanotype',
    description: 'Five portraits with handwritten letters of gratitude.',
    image: '/portfolio/people_saved/Cyanotype0001.jpg',
  },
  {
    slug: 'deconstructing-masculinity',
    title: 'Deconstructing Masculinity',
    year: '2024',
    medium: 'Portrait',
    description: 'Challenging the narrow boundaries of manhood.',
    image: '/portfolio/masculinity/1.jpg',
  },
  {
    slug: 'mixed',
    title: 'Mixed',
    year: '2021',
    medium: 'Mixed Media',
    description: 'Visual chaos mirroring bipolar mixed episodes.',
    image: '/portfolio/mixed/1.jpg',
  },
];

export default function PortfolioPage() {
  return (
    <div className="min-h-screen pt-20 pb-16 bg-black">
      {/* Subtle atmospheric haze */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none opacity-30">
        <div className="haze-layer absolute top-0 left-0 w-[600px] h-[600px] rounded-full blur-[200px] bg-gray-800" />
        <div className="haze-layer-delayed absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full blur-[180px] bg-gray-900" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Minimal header */}
        <header className="mb-12">
          <h1 className="font-display text-4xl md:text-5xl text-white tracking-tight">
            Series
          </h1>
        </header>

        {/* Tighter grid - images prominent */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {series.map((s) => (
            <Link
              key={s.slug}
              href={`/portfolio/${s.slug}`}
              className="group block relative overflow-hidden"
            >
              {/* Image container */}
              <div className="aspect-[4/5] relative">
                <img
                  src={s.image}
                  alt={s.title}
                  loading="lazy"
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                {/* Gradient overlay for text legibility */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-80" />

                {/* Content overlay */}
                <div className="absolute inset-0 p-6 flex flex-col justify-end">
                  <span className="text-gray-500 text-xs tracking-widest uppercase mb-2">
                    {s.medium} · {s.year}
                  </span>
                  <h2 className="font-display text-2xl text-white mb-2 group-hover:text-gray-300 transition-colors">
                    {s.title}
                  </h2>
                  <p className="text-gray-400 text-sm leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {s.description}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
