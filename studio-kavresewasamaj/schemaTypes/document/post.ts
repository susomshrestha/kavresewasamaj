import {defineField, defineType} from 'sanity'

export const postSchema = defineType({
  name: 'post',
  title: 'Posts',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'category',
      title: 'Category',
      type: 'reference',
      to: [{type: 'category'}],
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'slug',
      type: 'slug',
      options: {source: 'title'},
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'publishedAt',
      type: 'datetime',
      initialValue: () => new Date().toISOString(),
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'image',
      type: 'image',
    }),
    defineField({
      name: 'body',
      type: 'array',
      of: [
        {type: 'block'},
        {
          type: 'image', // Add an image block
          options: {hotspot: true}, // Enable cropping and hotspot
          fields: [
            {
              name: 'alt',
              title: 'Alt Text',
              type: 'string',
              options: {
                isHighlighted: true, // Show in the main image editing UI
              },
            },
          ],
        },
      ],
    }),
  ],
})
