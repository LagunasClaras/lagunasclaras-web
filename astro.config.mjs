import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';
import { defineConfig, envField } from 'astro/config';
import mdx from '@astrojs/mdx';

import vercel from '@astrojs/vercel';

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
        '@assets': new URL('./src/assets', import.meta.url).pathname,
        '@lib': new URL('./src/lib', import.meta.url).pathname,
        '@icons': new URL('./src/components/icons', import.meta.url).pathname,
        '@sections': new URL('./src/sections', import.meta.url).pathname,
        '@content': new URL('./src/content', import.meta.url).pathname,
      },
    },
    ssr: {
      noExternal: ['@lucide/astro'],
    },
  },

  site: 'https://lagunasclaras.com.ar',
  integrations: [sitemap(), mdx()],

  env: {
    schema: {
      // Remove optional props when
      FORM_POST_URL: envField.string({ context: 'client', access: 'public', optional: true }),
      N8N_WEBHOOK_URL: envField.string({ context: 'server', access: 'secret', optional: true }),
      PUBLIC_GA_ID: envField.string({ context: 'client', access: 'public', optional: true }),
    },
  },

  adapter: vercel(),
});