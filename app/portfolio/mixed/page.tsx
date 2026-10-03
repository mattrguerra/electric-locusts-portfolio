import { getVisibility } from '@/lib/series-visibility';
import { visiblePhotos } from '@/lib/series-photos';
import MixedPage from './client';

export default async function Page() {
  const { hiddenPhotos } = await getVisibility();
  return <MixedPage images={visiblePhotos('mixed', hiddenPhotos)} />;
}
