import { getVisibility } from '@/lib/series-visibility';
import { visiblePhotos } from '@/lib/series-photos';
import DeconstructingMasculinityPage from './client';

export default async function Page() {
  const { hiddenPhotos } = await getVisibility();
  return <DeconstructingMasculinityPage images={visiblePhotos('deconstructing-masculinity', hiddenPhotos)} />;
}
