import { getVisibility } from '@/lib/series-visibility';
import { visiblePhotos } from '@/lib/series-photos';
import PeopleWhoSavedMyLifePage from './client';

export default async function Page() {
  const { hiddenPhotos } = await getVisibility();
  return <PeopleWhoSavedMyLifePage images={visiblePhotos('people-who-saved-my-life', hiddenPhotos)} />;
}
