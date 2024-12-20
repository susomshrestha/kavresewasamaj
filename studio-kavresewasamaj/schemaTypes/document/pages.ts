import {defineType} from 'sanity'

export const pageSchema = defineType({
  name: 'page',
  title: 'Pages',
  type: 'document',
  fields: [
    {
      name: 'content',
      title: 'Content',
      type: 'array',
      of: [{type: 'block'}],
    },
  ],
})
