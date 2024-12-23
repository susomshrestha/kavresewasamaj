import {defineField} from 'sanity'

export const homeSchema = {
  name: 'home',
  title: 'Home Page',
  type: 'document',
  fields: [
    defineField({
      name: 'featuredBlogs',
      title: 'Featured Blogs',
      type: 'array',
      of: [{type: 'reference', to: [{type: 'post'}]}],
      description: 'Select up to 3 blogs to feature on the Home page.',
      validation: (rule) => rule.max(5).required(),
    }),
    // {
    //   name: 'sections',
    //   title: 'Sections',
    //   type: 'array',
    //   of: [
    //     {
    //       type: 'object',
    //       fields: [
    //         {
    //           name: 'title',
    //           title: 'Section Title',
    //           type: 'string',
    //         },
    //         {
    //           name: 'content',
    //           title: 'Content',
    //           type: 'array',
    //           of: [{type: 'block'}],
    //         },
    //       ],
    //     },
    //   ],
    // },
  ],
  preview: {
    prepare() {
      return {
        title: 'Home Page',
      }
    },
  },
}
