import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {visionTool} from '@sanity/vision'
import schemaTypes from './schemas/schema'

export default defineConfig({
  name: 'atmosphere-studio',
  title: 'atmosphere-studio',
  projectId: '9h4vha0j',
  dataset: 'production',
  plugins: [deskTool(), visionTool()],
  schema: { types: schemaTypes },
})
