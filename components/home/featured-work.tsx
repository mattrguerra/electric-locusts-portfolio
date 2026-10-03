import { getVisibility } from '@/lib/series-visibility';
import { coverPhoto } from '@/lib/series-photos';
import FeaturedWorkClient, { type FeaturedProject } from './featured-work-client';

// Kept server-side so switched-off series never reach the browser.
const allFeaturedProjects: FeaturedProject[] = [
  {
    id: '1',
    slug: 'what-we-were-left-with',
    title: 'What We Were Left With',
    category: 'Documentary',
    description: 'Archive of survival from years of addiction',
    image: 'https://res.cloudinary.com/dkrj3oqsy/image/upload/v1769258107/33_wng4mt.jpg',
  },
  {
    id: '2',
    slug: 'self-annihilation',
    title: 'Self Annihilation',
    category: 'Mixed Media',
    description:
      'Scratching and burning myself off medium format negatives—physically removing myself from the frame',
    image: 'https://res.cloudinary.com/dkrj3oqsy/image/upload/v1769258735/1_plkakn.jpg',
    featured: true,
  },

  {
    id: '3',
    slug: 'people-who-saved-my-life',
    title: 'People Who Saved My Life',
    category: 'Cyanotype',
    description: 'Portraits of the people who kept me alive',
    image: 'https://res.cloudinary.com/dkrj3oqsy/image/upload/v1769257844/Cyanotype0001_thqymg.jpg',
  },
  {
    id: '4',
    slug: 'deconstructing-masculinity',
    title: 'Deconstructing Masculinity',
    category: 'Portrait',
    description: 'Challenging narrow definitions of manhood',
    image: 'https://res.cloudinary.com/dkrj3oqsy/image/upload/v1769257508/21_hdndtl.jpg',
  },
];

export default async function FeaturedWork() {
  const { hiddenSeries, hiddenPhotos } = await getVisibility();
  const featuredProjects = allFeaturedProjects
    .filter((p) => !hiddenSeries.includes(p.slug))
    .map((p) => ({ ...p, image: coverPhoto(p.slug, p.image, hiddenPhotos) }));
  return <FeaturedWorkClient featuredProjects={featuredProjects} />;
}
