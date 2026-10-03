// Generate a per-person password for the site gate (see lib/site-lock.ts).
//   node scripts/site-password.mjs "Jane at Foo Gallery"
// Prints the `name:password` entry to append to SITE_PASSWORDS in Vercel.
import { randomInt } from 'node:crypto';

const WORDS = [
  'amber', 'ash', 'bone', 'cinder', 'cobalt', 'copper', 'dusk', 'ember', 'fern', 'flint',
  'frost', 'glass', 'harbor', 'heron', 'hollow', 'indigo', 'iron', 'ivory', 'juniper', 'lantern',
  'linen', 'marrow', 'meadow', 'moth', 'oak', 'ochre', 'onyx', 'orchard', 'pale', 'pewter',
  'quarry', 'quiet', 'raven', 'river', 'rust', 'saffron', 'salt', 'sepia', 'silver', 'slate',
  'smoke', 'sparrow', 'static', 'stone', 'tide', 'umber', 'velvet', 'willow', 'wren', 'zinc',
];

const label = process.argv.slice(2).join(' ').trim();
if (!label) {
  console.error('Usage: node scripts/site-password.mjs "<person name>"');
  process.exit(1);
}

const name = label
  .normalize('NFD')
  .replace(/[\u0300-\u036f]/g, '')
  .toLowerCase()
  .replace(/[^a-z0-9]+/g, '-')
  .replace(/^-|-$/g, '');
const words = [];
while (words.length < 3) {
  const word = WORDS[randomInt(WORDS.length)];
  if (!words.includes(word)) words.push(word);
}
const password = `${words.join('-')}-${randomInt(10, 100)}`;

console.log(`${name}:${password}`);
