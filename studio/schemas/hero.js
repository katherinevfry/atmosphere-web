import {defineType, defineField} from 'sanity';

export default defineType({
    name: 'hero',
    title: 'Hero',
    type: 'document',
    fields: [
      defineField({
        name: 'name',
        title: 'Name',
        type: 'string',
      }),
      defineField({
        name: 'mainImage',
        title: 'Main image',
        type: 'image',
        options: {
          hotspot: true,
        },
      }),
    ],
  
    preview: {
      select: {
        title: 'name',
        media: 'mainImage',
      },
    },
  });
  