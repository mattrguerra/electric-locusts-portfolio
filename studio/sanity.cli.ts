import { defineCliConfig } from 'sanity/cli';
import { sanityDataset, sanityProjectId } from '../lib/sanity';

export default defineCliConfig({
  api: { projectId: sanityProjectId, dataset: sanityDataset },
  studioHost: 'electric-locusts',
  deployment: { appId: 'kv4pf8l9pz0o6bz3oslwig99', autoUpdates: true },
});
