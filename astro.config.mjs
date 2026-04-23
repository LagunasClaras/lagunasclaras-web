import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';
import { defineConfig, envField } from 'astro/config';

import vercel from '@astrojs/vercel';

// https://astro.build/config
export default defineConfig({
  redirects: {
    '/limpieza-de-lagunas': '/',
    '/limpieza-de-lagunas/': '/',
    '/clientes/abril': '/clientes/',
    '/clientes/abril/': '/clientes/',
    '/clientes/barrancas-de-santa-maría': '/clientes/',
    '/clientes/barrancas-de-santa-maría/': '/clientes/',
    '/clientes/central-nuclear-embalse': '/clientes/',
    '/clientes/central-nuclear-embalse/': '/clientes/',
    '/clientes/el-cantón': '/clientes/',
    '/clientes/el-cantón/': '/clientes/',
    '/clientes/municipalidad-de-alberti': '/clientes/',
    '/clientes/municipalidad-de-alberti/': '/clientes/',
    '/clientes/náutico-escobar': '/clientes/',
    '/clientes/náutico-escobar/': '/clientes/',
    '/clientes/puertos-del-lago': '/clientes/',
    '/clientes/puertos-del-lago/': '/clientes/',
    '/clientes/san-agustín': '/clientes/',
    '/clientes/san-agustín/': '/clientes/',
    '/clientes/san-matías': '/clientes/',
    '/clientes/san-matías/': '/clientes/',
    '/clientes/san-rafael': '/clientes/',
    '/clientes/san-rafael/': '/clientes/',
    '/clientes/termas-de-villa-elisa': '/clientes/',
    '/clientes/termas-de-villa-elisa/': '/clientes/',
  },

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

  site: 'https://www.lagunasclaras.com',
  integrations: [
    sitemap({
      filter: (page) => {
        const pathname = new URL(page).pathname;

        return (
          !pathname.includes('/404') &&
          !pathname.includes('/limpieza-de-lagunas') &&
          !pathname.startsWith('/clientes/')
        );
      },
    }),
    mdx(),
  ],

  env: {
    schema: {
      RESEND_API_KEY: envField.string({ context: 'server', access: 'secret' }),
    },
  },

  adapter: vercel(),
});
