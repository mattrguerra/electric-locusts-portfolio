import { getVisibility } from '@/lib/series-visibility';
import { visiblePhotos } from '@/lib/series-photos';
import SelfAnnihilationPage from './client';

export default async function Page() {
  const { hiddenPhotos } = await getVisibility();
  return <SelfAnnihilationPage images={visiblePhotos('self-annihilation', hiddenPhotos)} />;
}
