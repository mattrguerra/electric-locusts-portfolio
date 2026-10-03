import { defineConfig } from 'sanity';
import { structureTool } from 'sanity/structure';
import { sanityDataset, sanityProjectId } from '../lib/sanity';
import { schemaTypes } from './schemaTypes';

// Series pages live in the site's code, so the Studio only switches existing
// series on and off. Creating, duplicating and deleting series is disabled.
export default defineConfig({
  name: 'electric-locusts',
  title: 'Electric Locusts',
  projectId: sanityProjectId,
  dataset: sanityDataset,
  plugins: [
    structureTool({
      structure: (S) =>
        S.list()
          .title('Electric Locusts')
          .items([
            S.listItem()
              .title('Projects')
              .child(
                S.documentTypeList('series')
                  .title('Projects')
                  .defaultOrdering([{ field: 'year', direction: 'desc' }]),
              ),
          ]),
    }),
  ],
  schema: {
    types: schemaTypes,
    templates: (templates) => templates.filter((t) => t.schemaType !== 'series'),
  },
  document: {
    actions: (actions, { schemaType }) =>
      schemaType === 'series'
        ? actions.filter(({ action }) => action !== 'delete' && action !== 'duplicate')
        : actions,
    newDocumentOptions: (items) => items.filter((item) => item.templateId !== 'series'),
  },
});
