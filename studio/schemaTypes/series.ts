import { defineArrayMember, defineField, defineType } from 'sanity';
import { PhotoToggleInput } from '../components/PhotoToggleInput';

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
    defineField({
      name: 'photos',
      title: 'Photos',
      description: 'Hide individual photos without hiding the whole project. Takes up to a minute to update.',
      type: 'array',
      of: [
        defineArrayMember({
          name: 'photo',
          type: 'object',
          fields: [
            defineField({ name: 'url', type: 'url', readOnly: true }),
            defineField({ name: 'visible', type: 'boolean', initialValue: true }),
          ],
        }),
      ],
      components: { input: PhotoToggleInput },
    }),
    defineField({ name: 'title', title: 'Title', type: 'string', readOnly: true }),
    defineField({ name: 'slug', title: 'Page address', type: 'slug', readOnly: true }),
    defineField({ name: 'year', title: 'Year', type: 'number', readOnly: true }),
  ],
  preview: {
    select: { title: 'title', year: 'year', visible: 'visible', photos: 'photos' },
    prepare: ({ title, year, visible, photos }) => {
      const hiddenPhotos = ((photos ?? []) as { visible?: boolean }[]).filter((p) => p.visible === false).length;
      const status = visible === false ? 'Hidden' : hiddenPhotos ? `Showing · ${hiddenPhotos} photo${hiddenPhotos === 1 ? '' : 's'} hidden` : 'Showing';
      return {
        title,
        subtitle: `${status} · ${year ?? ''}`,
        media: () => (visible === false ? '○' : '●'),
      };
    },
  },
});
