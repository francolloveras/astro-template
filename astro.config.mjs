import { defineConfig } from 'astro/config'

import tailwind from '@astrojs/tailwind'

// https://astro.build/config
export default defineConfig({
  base: 'astro-template', // Delete this Prop to use the Template without basePath.
  integrations: [tailwind()]
})
