import { getVisibility } from '@/lib/series-visibility';
import { visiblePhotos } from '@/lib/series-photos';
import WhatWeWereLeftWithPage from './client';

export default async function Page() {
  const { hiddenPhotos } = await getVisibility();
  return <WhatWeWereLeftWithPage images={visiblePhotos('what-we-were-left-with', hiddenPhotos)} />;
}
