# Lagunas Claras - Sitio Institucional

Sitio web institucional de **Lagunas Claras**, empresa especializada en mantenimiento, recuperación y preservación de lagos, lagunas y espejos de agua en Argentina.

Desarrollado con **Astro 5**, **Tailwind CSS 4** y **TypeScript**, priorizando SEO técnico, performance y facilidad de actualización de contenido.

## Tecnologías

- Astro 5
- Tailwind CSS 4
- TypeScript
- MDX (`astro:content`)
- Astro Actions (formulario de contacto)
- Vercel Adapter

## Rutas públicas

- `/` Inicio
- `/quienes-somos`
- `/servicios`
- `/servicios/[slug]`
- `/clientes`
- `/clientes/[slug]`
- `/faq`
- `/contacto`

## Estructura principal

```txt
src/
├── pages/            # Rutas
├── layouts/          # Layout base y SEO global
├── components/       # Componentes reutilizables
├── sections/         # Bloques por dominio (home, services, aboutUs, contactUs)
├── content/          # Contenido editorial (services, clientes, faqs)
├── actions/          # Lógica server-side (contacto)
├── templates/        # Plantillas HTML para notificaciones
├── styles/           # Estilos globales
└── assets/           # Imágenes y recursos
```

## Requisitos

- Node.js 20+
- npm 10+ (o Bun, ya que existe `bun.lock`)

## Instalación y ejecución

```bash
npm install
npm run dev
```

Comandos disponibles:

```bash
npm run dev      # entorno local
npm run build    # build de producción
npm run preview  # previsualizar build
npm run lint     # ESLint (con --fix)
npm run format   # Prettier
```

## Variables de entorno

Crear/editar `.env` con estas variables (todas opcionales):

```env
FORM_POST_URL=
N8N_WEBHOOK_URL=
PUBLIC_GA_ID=
```

Notas:

- `N8N_WEBHOOK_URL` se usa para enviar leads del formulario de contacto.
- Si `N8N_WEBHOOK_URL` no está definido, el envío funciona en modo simulado para no cortar la experiencia.
- `PUBLIC_GA_ID` habilita Google Analytics.

## Gestión de contenido

El contenido institucional se mantiene en `src/content`:

- `src/content/services/*.mdx`: servicios y páginas de detalle.
- `src/content/clientes/*.mdx`: casos/clientes.
- `src/content/faqs/*.mdx`: preguntas frecuentes.

Para agregar contenido nuevo:

1. Crear un archivo `.mdx` en la colección correspondiente.
2. Completar frontmatter según el schema de `src/content/config.ts`.
3. Verificar la ruta resultante en local (`/servicios/[slug]`, `/clientes/[slug]`, etc.).

## SEO y analítica

- `src/layouts/Layout.astro` define metadatos globales, robots, JSON-LD y base estructural.
- `src/components/SeoHead.astro` define metadatos por página (`title`, `description`, `canonical`, OG).
- `@astrojs/sitemap` genera sitemap automáticamente durante build.

## Deploy

El proyecto está configurado para **Vercel** mediante `@astrojs/vercel`.

Flujo recomendado:

1. `npm run build`
2. Verificar salida en `dist/`
3. Deploy en Vercel con las variables de entorno configuradas

## Documentación interna para agentes

- Guía de arquitectura: [`.agents/Agent.md`](.agents/Agent.md)
- Guía visual: `/.agents/skills/design/SKILL.md`
