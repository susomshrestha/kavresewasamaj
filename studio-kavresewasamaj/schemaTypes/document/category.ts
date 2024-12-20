import {defineField, defineType} from 'sanity'

export const categorySchema = defineType({
  name: 'category',
  title: 'Category',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    {
      name: 'description',
      title: 'Description',
      type: 'text',
    },
  ],
})
