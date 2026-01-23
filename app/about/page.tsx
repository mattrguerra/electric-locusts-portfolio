import { Metadata } from 'next';
import AboutClient from '@/components/about/about-client';

export const metadata: Metadata = {
  title: 'About | Matthew Guerra — Electric Locusts',
  description:
    'Matthew Guerra is an Austin-based visual artist exploring identity, mental health, and vulnerability through photography, mixed media, cyanotypes, and video art. His work advocates for mental health awareness.',
  keywords: [
    'Matthew Guerra',
    'Electric Locusts',
    'Austin artist',
    'mental health art',
    'cyanotype artist',
    'mixed media photography',
    'identity art',
    'Texas visual artist',
    'mental health advocacy',
    'contemporary photography',
  ],
  openGraph: {
    title: 'About Matthew Guerra — Electric Locusts',
    description:
      'Visual artist exploring identity, mental illness, and the human experience through photography, mixed media, and alternative processes.',
    type: 'profile',
  },
};

export default function AboutPage() {
  return <AboutClient />;
}
