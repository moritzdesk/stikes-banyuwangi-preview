import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {assist} from '@sanity/assist'
import {schemaTypes} from './schemaTypes'
import Logo from './components/Logo'

export default defineConfig({
  name: 'unidsoe-cms',
  title: 'Unidsoe CMS - Universitas Dr. Soekardjo',

  projectId: 'iwtyom29',
  dataset: 'production',

  plugins: [
    structureTool({
      structure: (S) =>
        S.list()
          .title('Content Management')
          .items([
            S.listItem()
              .title('📝 Posts')
              .schemaType('post')
              .child(S.documentTypeList('post').title('All Posts')),
            S.listItem()
              .title('👤 Authors')
              .schemaType('author')
              .child(S.documentTypeList('author').title('All Authors')),
            S.listItem()
              .title('🏷️ Categories')
              .schemaType('category')
              .child(S.documentTypeList('category').title('All Categories')),
            S.divider(),
            ...S.documentTypeListItems().filter(
              (listItem) =>
                !['post', 'author', 'category'].includes(
                  listItem.getId() || ''
                )
            ),
          ]),
    }),
    visionTool(),
    assist({
      // AI Assist plugin configuration
      // Token akan di-set via Studio UI atau environment variable
    }),
  ],

  schema: {
    types: schemaTypes,
  },

  studio: {
    components: {
      logo: Logo,
    },
  },
})
