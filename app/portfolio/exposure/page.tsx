import { getVisibility } from '@/lib/series-visibility';
import { visiblePhotos } from '@/lib/series-photos';
import ExposurePage from './client';

export default async function Page() {
  const { hiddenPhotos } = await getVisibility();
  return <ExposurePage images={visiblePhotos('exposure', hiddenPhotos)} />;
}
