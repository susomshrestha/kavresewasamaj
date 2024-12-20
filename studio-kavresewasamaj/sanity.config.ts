import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemaTypes'

export default defineConfig({
  name: 'default',
  title: 'kavresewasamaj',

  projectId: 'm7n0wv06',
  dataset: 'production',

  plugins: [
    structureTool({
      structure: (S) =>
        S.list()
          .title('Content Management')
          .items([
            S.listItem()
              .title('Pages')
              .child(
                S.list()
                  .title('Pages')
                  .items([
                    S.listItem()
                      .title('Home Page')
                      .child(S.editor().schemaType('home').documentId('home')),
                    S.listItem()
                      .title('Introduction Page')
                      .child(S.editor().schemaType('page').documentId('introduction-page')),
                    S.listItem()
                      .title('About')
                      .child(S.editor().schemaType('page').documentId('about-page')),
                    S.listItem()
                      .title('Members Page')
                      .child(S.documentTypeList('member').title('Team Members')),
                  ]),
              ),
            S.listItem().title('Posts').child(S.documentTypeList('post').title('All Posts')),
            S.listItem()
              .title('Categories')
              .child(S.documentTypeList('category').title('Blog Categories')),
          ]),
    }),
    visionTool(),
  ],

  schema: {
    types: schemaTypes,
  },
})
