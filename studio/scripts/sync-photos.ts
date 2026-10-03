// Copies each series' photo list from the site (lib/series-photos.ts) into Sanity,
// keeping any hide/show choices already made. Photos removed from the site are
// dropped from the Studio. Run with `npm run sync`.

import { createHash } from 'node:crypto';
import { getCliClient } from 'sanity/cli';
import { seriesPhotos } from '../../lib/series-photos';

type Photo = { _key: string; _type: 'photo'; url: string; visible?: boolean };

const client = getCliClient({ apiVersion: '2025-01-01' });
const photoKey = (url: string) => createHash('sha1').update(url).digest('hex').slice(0, 12);

async function main() {
  for (const [slug, urls] of Object.entries(seriesPhotos)) {
    const id = `series-${slug}`;
    // Update the draft too, so publishing an open draft doesn't wipe the photo list.
    const docs = (await client.getDocuments([id, `drafts.${id}`])).filter(Boolean) as { _id: string; photos?: Photo[] }[];
    if (docs.length === 0) {
      console.warn(`skip ${slug}: no Sanity document`);
      continue;
    }
    for (const doc of docs) {
      const previous = new Map((doc.photos ?? []).map((p) => [p.url, p.visible]));
      const photos: Photo[] = urls.map((url) => ({ _key: photoKey(url), _type: 'photo', url, visible: previous.get(url) ?? true }));
      await client.patch(doc._id).set({ photos }).commit();
      const hidden = photos.filter((p) => p.visible === false).length;
      console.log(`${doc._id}: ${photos.length} photos (${hidden} hidden)`);
    }
  }
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
