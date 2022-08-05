/* eslint-disable import/no-anonymous-default-export */
export default {
  name: 'shop',
  title: 'Shop',
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
    {
      name: 'categories',
      title: 'Categories',
      type: 'array',
      of: [{type: 'reference', to: {type: 'category'}}],
    },
    {
      title: 'address',
      name: 'Address',
      type: 'text'
    },
    {
      title: 'website',
      name: 'Website',
      type: 'url'
    },
    {
      name: 'publishedAt',
      title: 'Published at',
      type: 'datetime',
    },
    {
      name: 'body',
      title: 'Body',
      type: 'blockContent',
    },
  ],

  preview: {
    select: {
      title: 'name',
      media: 'mainImage',
    },
  },
}
