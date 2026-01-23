import { Metadata } from 'next';
import PortfolioClient from '@/components/portfolio/portfolio-client';

export const metadata: Metadata = {
  title: 'Portfolio | Matthew Guerra — Electric Locusts',
  description:
    "Explore Matthew Guerra's body of work: Self Annihilation, People Who Saved My Life, Exposure, Deconstructing Masculinity, and more. Photography, mixed media, and cyanotype art exploring identity and mental health.",
  keywords: [
    'Matthew Guerra portfolio',
    'Self Annihilation art series',
    'cyanotype portraits',
    'mental health photography',
    'mixed media art',
    'alternative process photography',
    'identity art series',
    'Austin artist portfolio',
    'contemporary art Texas',
    'fine art photography',
  ],
  openGraph: {
    title: 'Portfolio — Matthew Guerra | Electric Locusts',
    description:
      'Photography, mixed media, and cyanotype work exploring identity, mental illness, and the human experience.',
    type: 'website',
  },
};

export default function PortfolioPage() {
  return <PortfolioClient />;
}
