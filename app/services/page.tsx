import { Metadata } from 'next';
import ServicesClient from '@/components/services/services-client';

export const metadata: Metadata = {
  title: 'Services & Pricing',
  description: 'Explore creative services offered by Electric Locusts including digital art, photography, video production, graphic design, installation art, and web development.',
};

export default function ServicesPage() {
  return <ServicesClient />;
}
