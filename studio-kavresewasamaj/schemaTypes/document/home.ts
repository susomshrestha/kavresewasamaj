export const homeSchema = {
  name: 'home',
  title: 'Home Page',
  type: 'document',
  fields: [
    {
      name: 'featuredBlogs',
      title: 'Featured Blogs',
      type: 'array',
      of: [{type: 'reference', to: [{type: 'post'}]}],
      description: 'Select blogs to feature on the Home page.',
    },
    {
      name: 'sections',
      title: 'Sections',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'title',
              title: 'Section Title',
              type: 'string',
            },
            {
              name: 'content',
              title: 'Content',
              type: 'array',
              of: [{type: 'block'}],
            },
          ],
        },
      ],
    },
  ],
}
