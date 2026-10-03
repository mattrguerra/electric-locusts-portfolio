import { getVisibility } from '@/lib/series-visibility';
import { coverPhoto } from '@/lib/series-photos';
import HeroSectionClient, { type HeroSeries } from './hero-section-client';

// Series for the interactive preview, ordered by year (descending: 2023 -> 2019).
// Kept server-side so switched-off series never reach the browser.
const allSeries: HeroSeries[] = [
  {
    slug: 'what-we-were-left-with',
    title: 'What We Were Left With',
    year: 2023,
    image: 'https://res.cloudinary.com/dkrj3oqsy/image/upload/v1769258107/33_wng4mt.jpg',
    tagline: 'Evidence of survival',
  },
  {
    slug: 'self-annihilation',
    title: 'Self Annihilation',
    year: 2022,
    image: 'https://res.cloudinary.com/dkrj3oqsy/image/upload/v1769258735/1_plkakn.jpg',
    tagline: 'Identity destroyed',
  },
  {
    slug: 'people-who-saved-my-life',
    title: 'People Who Saved My Life',
    year: 2021,
    image: 'https://res.cloudinary.com/dkrj3oqsy/image/upload/v1769257844/Cyanotype0001_thqymg.jpg',
    tagline: 'Gratitude made visible',
  },
  {
    slug: 'exposure',
    title: 'Exposure',
    year: 2021,
    image: 'https://res.cloudinary.com/dkrj3oqsy/image/upload/v1769257879/_MG_8279_eb8tmi.jpg',
    tagline: 'Depression visualized',
  },
  {
    slug: 'mixed',
    title: 'Mixed',
    year: 2020,
    image: 'https://res.cloudinary.com/dkrj3oqsy/image/upload/v1769257784/4_t9h288.jpg',
    tagline: 'Chaos contained',
  },
  {
    slug: 'deconstructing-masculinity',
    title: 'Deconstructing Masculinity',
    year: 2019,
    image: 'https://res.cloudinary.com/dkrj3oqsy/image/upload/v1769257508/21_hdndtl.jpg',
    tagline: 'Beyond the archetype',
  },
];

export default async function HeroSection() {
  const { hiddenSeries, hiddenPhotos } = await getVisibility();
  const series = allSeries
    .filter((s) => !hiddenSeries.includes(s.slug))
    .map((s) => ({ ...s, image: coverPhoto(s.slug, s.image, hiddenPhotos) }));
  return <HeroSectionClient series={series} />;
}
