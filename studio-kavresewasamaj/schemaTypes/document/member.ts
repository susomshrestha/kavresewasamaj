import {defineField, defineType} from 'sanity'

export const memberSchema = defineType({
  name: 'member',
  title: 'Members',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    {
      name: 'position',
      title: 'Position',
      type: 'string',
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
  ],
})
