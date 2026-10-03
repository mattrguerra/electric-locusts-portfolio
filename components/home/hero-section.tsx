import { getHiddenSeries } from '@/lib/series-visibility';
import HeroSectionClient from './hero-section-client';

export default async function HeroSection() {
  return <HeroSectionClient hidden={await getHiddenSeries()} />;
}
