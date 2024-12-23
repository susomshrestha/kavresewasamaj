import {defineField, defineType} from 'sanity'

export const gallerySchema = defineType({
  name: 'gallery',
  title: 'Gallery',
  type: 'document',
  fields: [
    defineField({
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'alt',
      title: 'Alt Text',
      type: 'string',
      description: 'Alternative text for the image (important for accessibility).',
    }),
  ],
  preview: {
    select: {
      media: 'image',
      title: 'alt', // Use the alt text as the title
    },
    prepare(selection) {
      const {media, title} = selection
      return {
        title: title || 'Untitled Image', // Fallback title if alt is not set
        media,
      }
    },
  },
})
