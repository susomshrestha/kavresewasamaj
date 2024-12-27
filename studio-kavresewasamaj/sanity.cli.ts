import {defineCliConfig} from 'sanity/cli'
import { SANITY_STUDIO_DATASET, SANITY_STUDIO_PROJECT_ID, SANITY_STUDIO_STUDIO_HOST } from './env'


export default defineCliConfig({
  api: {
    projectId: SANITY_STUDIO_PROJECT_ID,
    dataset: SANITY_STUDIO_DATASET,
  },
  /**
   * Enable auto-updates for studios.
   * Learn more at https://www.sanity.io/docs/cli#auto-updates
   */
  autoUpdates: true,
  studioHost: SANITY_STUDIO_STUDIO_HOST,
})
