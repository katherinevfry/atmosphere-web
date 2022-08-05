/* eslint-disable import/no-anonymous-default-export */
export default {
    name: 'hero',
    title: 'Hero',
    type: 'document',
    fields: [
      {
        name: 'name',
        title: 'Name',
        type: 'string',
      },
      {
        name: 'mainImage',
        title: 'Main image',
        type: 'image',
        options: {
          hotspot: true,
        },
      },
    ],
  
    preview: {
      select: {
        title: 'name',
        media: 'mainImage',
      },
    },
  }
  