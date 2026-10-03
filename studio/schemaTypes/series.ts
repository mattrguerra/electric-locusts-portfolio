import { defineField, defineType } from 'sanity';

export const series = defineType({
  name: 'series',
  title: 'Project',
  type: 'document',
  fields: [
    defineField({
      name: 'visible',
      title: 'Show on site',
      description:
        'Off hides this project from the Work page and homepage, and its page returns "not found". Takes up to a minute to update.',
      type: 'boolean',
      initialValue: true,
    }),
    defineField({ name: 'title', title: 'Title', type: 'string', readOnly: true }),
    defineField({ name: 'slug', title: 'Page address', type: 'slug', readOnly: true }),
    defineField({ name: 'year', title: 'Year', type: 'number', readOnly: true }),
  ],
  preview: {
    select: { title: 'title', year: 'year', visible: 'visible' },
    prepare: ({ title, year, visible }) => ({
      title,
      subtitle: `${visible === false ? 'Hidden' : 'Showing'} · ${year ?? ''}`,
      media: () => (visible === false ? '○' : '●'),
    }),
  },
});
