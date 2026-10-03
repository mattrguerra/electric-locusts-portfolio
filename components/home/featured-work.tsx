import { getHiddenSeries } from '@/lib/series-visibility';
import FeaturedWorkClient from './featured-work-client';

export default async function FeaturedWork() {
  return <FeaturedWorkClient hidden={await getHiddenSeries()} />;
}
