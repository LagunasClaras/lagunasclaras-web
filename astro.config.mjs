// @ts-check
import { defineConfig, envField } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
    resolve: {
      alias: {
        '@': new URL('./src', import.meta.url).pathname,
        '@componentes': new URL('./src/components', import.meta.url).pathname,
        '@layout': new URL('./src/layouts', import.meta.url).pathname,
        '@pages': new URL('./src/pages', import.meta.url).pathname,
        '@lib': new URL('./src/lib', import.meta.url).pathname,
        '@icons': new URL('./src/components/icons', import.meta.url).pathname,
        '@sections': new URL('./src/sections', import.meta.url).pathname,
        '@content': new URL('./src/content', import.meta.url).pathname,
      },
    },
  },
  env: { schema: { FORM_POST_URL: envField.string({ context: 'client', access: 'public' }) } },
});
