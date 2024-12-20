import {defineType, defineArrayMember} from 'sanity'
import {TextAlign} from '../components/textAlign'

import {LeftIcon, RightIcon, CenterIcon} from '../components/icons'

export const blockContent = defineType({
  title: 'Block Content',
  name: 'blockContent',
  type: 'array',
  of: [
    defineArrayMember({
      type: 'block',
      styles: [
        {title: 'Normal', value: 'normal'},
        {title: 'Heading 1', value: 'h1'},
        {title: 'Heading 2', value: 'h2'},
        {title: 'Blockquote', value: 'blockquote'},
      ],
      marks: {
        decorators: [
          {title: 'Strong', value: 'strong'},
          {title: 'Emphasis', value: 'em'},
          {title: 'Underline', value: 'underline'},
          {title: 'Strike', value: 'strike-through'},
          {
            title: 'Left',
            value: 'left',
            icon: LeftIcon,
            component: (props) => TextAlign(props),
          },
          {
            title: 'Center',
            value: 'center',
            icon: CenterIcon,
            component: (props) => TextAlign(props),
          },
          {
            title: 'Right',
            value: 'right',
            icon: RightIcon,
            component: (props) => TextAlign(props),
          },
        ],
        annotations: [
          {
            title: 'Link',
            name: 'link',
            type: 'object',
            fields: [
              {
                title: 'URL',
                name: 'href',
                type: 'url',
                validation: (Rule) =>
                  Rule.uri({
                    scheme: ['http', 'https', 'mailto', 'tel'],
                  }),
              },
            ],
          },
        ],
      },
      lists: [
        {title: 'Bullet', value: 'bullet'},
        {title: 'Number', value: 'number'},
      ],
    }),
    // Add the image with layout option
    defineArrayMember({
      type: 'imageWithLayout',
    }),
    // Code block definition remains the same
    // defineArrayMember({
    //   title: 'Code Block',
    //   type: 'code',
    //   options: {
    //     withFilename: true,
    //     languageAlternatives: [
    //       {title: 'JavaScript', value: 'javascript'},
    //       {title: 'HTML', value: 'html'},
    //       {title: 'CSS', value: 'css'},
    //     ],
    //   },
    // }),
  ],
})
