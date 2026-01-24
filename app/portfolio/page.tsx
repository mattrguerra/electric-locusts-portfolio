import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Work | Matt Guerra — Electric Locusts',
  description:
    "Explore Matt Guerra's body of work: Self Annihilation, What We Were Left With, Exposure, People Who Saved My Life, Deconstructing Masculinity, and Mixed. Photography, mixed media, and cyanotype art exploring identity and mental health.",
  keywords: [
    'Matt Guerra portfolio',
    'Self Annihilation art series',
    'cyanotype portraits',
    'mental health photography',
    'mixed media art',
    'alternative process photography',
  ],
};

// Series ordered by year (descending: 2023 -> 2019)
const series = [
  {
    slug: 'what-we-were-left-with',
    title: 'What We Were Left With',
    year: '2023',
    medium: 'Documentary',
    description: 'Archival photographs from years of active addiction.',
    image: 'https://res.cloudinary.com/dkrj3oqsy/image/upload/v1769258298/1_ggamf2.jpg',
  },
  {
    slug: 'self-annihilation',
    title: 'Self Annihilation',
    year: '2022',
    medium: 'Mixed Media',
    description: 'Identity destroyed through scratched and burned negatives.',
    image: 'https://res.cloudinary.com/dkrj3oqsy/image/upload/v1769258735/1_plkakn.jpg',
  },
  {
    slug: 'people-who-saved-my-life',
    title: 'People Who Saved My Life',
    year: '2021',
    medium: 'Cyanotype',
    description: 'Five portraits with handwritten letters of gratitude.',
    image: 'https://res.cloudinary.com/dkrj3oqsy/image/upload/v1769257844/Cyanotype0001_thqymg.jpg',
  },
  {
    slug: 'exposure',
    title: 'Exposure',
    year: '2021',
    medium: 'Photography',
    description: 'Visualizing the slow unraveling of depression.',
    image: 'https://res.cloudinary.com/dkrj3oqsy/image/upload/v1769257879/_MG_8279_eb8tmi.jpg',
  },
  {
    slug: 'mixed',
    title: 'Mixed',
    year: '2020',
    medium: 'Mixed Media',
    description: 'Visual chaos mirroring bipolar mixed episodes.',
    image: 'https://res.cloudinary.com/dkrj3oqsy/image/upload/v1769257782/1_qoh1en.jpg',
  },
  {
    slug: 'deconstructing-masculinity',
    title: 'Deconstructing Masculinity',
    year: '2019',
    medium: 'Portrait',
    description: 'Challenging the narrow boundaries of manhood.',
    image: 'https://res.cloudinary.com/dkrj3oqsy/image/upload/v1769257516/1_hqb7bn.jpg',
  },
];

export default function PortfolioPage() {
  return (
    <div className="min-h-screen pt-20 pb-16 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Minimal header */}
        <header className="mb-10">
          <h1 className="font-display text-4xl md:text-5xl text-white tracking-tight">
            Series
          </h1>
        </header>

        {/* Grid with dark overlay that fades on hover to reveal image */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {series.map((s) => (
            <Link
              key={s.slug}
              href={`/portfolio/${s.slug}`}
              className="group block relative overflow-hidden"
            >
              {/* Image container */}
              <div className="aspect-[4/5] relative bg-gray-900">
                <img
                  src={s.image}
                  alt={s.title}
                  loading="lazy"
                  className="absolute inset-0 w-full h-full object-cover transition-all duration-700 group-hover:scale-105"
                />

                {/* Dark overlay - visible by default, fades on hover */}
                <div className="absolute inset-0 bg-black/70 transition-opacity duration-500 group-hover:opacity-0" />

                {/* Content - visible by default, fades on hover */}
                <div className="absolute inset-0 p-6 flex flex-col justify-center items-center text-center transition-opacity duration-500 group-hover:opacity-0">
                  <span className="text-gray-500 text-xs tracking-widest uppercase mb-3">
                    {s.medium} · {s.year}
                  </span>
                  <h2 className="font-display text-2xl md:text-3xl text-white mb-3">
                    {s.title}
                  </h2>
                  <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
                    {s.description}
                  </p>
                </div>

                {/* Hover hint at bottom */}
                <div className="absolute bottom-4 left-0 right-0 text-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <span className="text-white/80 text-sm bg-black/50 px-3 py-1 rounded">
                    View Series →
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
