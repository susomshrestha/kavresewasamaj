import {defineType} from 'sanity'

export const pageSchema = defineType({
  name: 'page',
  title: 'Pages',
  type: 'document',
  fields: [
    {
      name: 'content',
      title: 'Content',
      type: 'blockContent',
    },
  ],
  preview: {
    select: {
      documentId: '_id',
    },
    prepare(selection) {
      const {documentId} = selection
      let title = 'New Page'

      // Match the document ID to display the corresponding title
      switch (documentId) {
        case 'introduction-page':
          title = 'Introduction'
          break
        case 'about-page':
          title = 'About'
          break
        default:
          title = 'New Page'
      }

      return {
        title,
      }
    },
  },
})
