# AGENTS.md

## Lagunas Claras - Guía de arquitectura y desarrollo

Este proyecto es la web institucional de **Lagunas Claras**.
Está construido con **Astro 5 + Tailwind CSS 4** y orientado a contenido estático con interactividad puntual.

Este documento define cómo mantener el código de forma consistente con la implementación actual.

Las decisiones visuales viven en:
`/.agents/skills/design/SKILL.md`

## Objetivos técnicos

1. Priorizar rendimiento (HTML estático + JS mínimo).
2. Mantener rutas y contenido fáciles de editar por equipo no técnico.
3. Preservar SEO técnico en todas las páginas.
4. Evitar lógica de negocio duplicada entre páginas.

## Stack y convenciones

- Framework: Astro 5 (`astro.config.mjs`).
- Estilos: Tailwind CSS 4 + utilidades globales en `src/styles/global.css`.
- Contenido: `astro:content` con colecciones tipadas (`services`, `clientes`, `faqs`).
- Formularios: `astro:actions` (acción `sendContact`) + webhook n8n.
- Deploy: Vercel Adapter (`@astrojs/vercel`).

## Estructura real del proyecto

```txt
src/
├── pages/            # Rutas públicas
├── layouts/          # Estructura base del sitio
├── components/       # UI reutilizable transversal
├── sections/         # UI por dominio (home, aboutUs, services, contactUs)
├── content/          # Colecciones MDX (services, clientes, faqs)
├── actions/          # Server actions (contacto)
├── templates/        # Plantillas HTML para notificaciones
├── styles/           # CSS global y animaciones
├── lib/              # Utilidades compartidas
└── assets/           # Imágenes y logos
```

Nota: hoy no existe `src/islands/`. La interactividad actual está resuelta con scripts inline en componentes `.astro`.

## Mapa de rutas (institucional)

- `/` Home.
- `/quienes-somos` Institucional.
- `/servicios` listado de servicios.
- `/servicios/[slug]` detalle de servicio desde colección `services`.
- `/clientes` listado de clientes.
- `/clientes/[slug]` caso/cliente desde colección `clientes`.
- `/faq` preguntas frecuentes desde colección `faqs`.
- `/contacto` formulario y datos de contacto.

## Reglas por capa

### `src/pages`

- Deben orquestar SEO + layout + composición de secciones.
- Evitar lógica compleja de UI dentro de la página.
- En rutas dinámicas, el `slug` debe salir de `astro:content` (`slug` explícito o `id` de archivo).

### `src/sections`

- Cada dominio mantiene sus componentes, tipos y schemas propios.
- Si un componente solo se usa en una sección, debe vivir dentro de esa sección.

### `src/components`

- Solo componentes transversales/reutilizables.
- Aceptar props tipadas y evitar acoplarse a contenido específico.

### `src/content`

- Fuente de verdad editorial.
- `services`: define hero, problema, proceso, galería y CTA.
- `clientes`: define ficha técnica, servicios realizados y galería.
- `faqs`: define categoría, orden, pinned y published.

## SEO y metadatos

- Todas las páginas públicas deben usar `Layout.astro` + `SeoHead.astro`.
- `Layout.astro` contiene metadatos globales, `ClientRouter`, JSON-LD y analítica opcional.
- `SeoHead.astro` completa title, description, canonical y Open Graph por página.
- Mantener consistencia entre `Astro.site` y enlaces canónicos/OG.

## Formulario de contacto (crítico)

- El formulario usa `actions.sendContact` (`src/actions/index.ts`).
- Incluye honeypot (`website`) para bots.
- Si `N8N_WEBHOOK_URL` no está definido, la acción responde en modo simulado (no romper UX).
- Los labels de servicios se resuelven dinámicamente desde colección `services`.

## Variables de entorno

Definidas en `astro.config.mjs`:

- `FORM_POST_URL` (client/public, opcional).
- `N8N_WEBHOOK_URL` (server/secret, opcional).
- `PUBLIC_GA_ID` (client/public, opcional).

## Aliases

Mantener coherencia entre `astro.config.mjs` y `tsconfig.json`.

Aliases activos:
- `@` -> `src`
- `@componentes` -> `src/components`
- `@layout` -> `src/layouts`
- `@pages` -> `src/pages`
- `@assets` -> `src/assets`
- `@lib` -> `src/lib`
- `@icons` -> `src/components/icons`
- `@sections` -> `src/sections`
- `@content` -> `src/content` (configurado en Vite)

## Reglas de implementación

1. Preferir `.astro` por defecto.
2. Usar JavaScript solo cuando CSS/HTML no alcance.
3. Si agregás scripts que viven entre páginas con `ClientRouter`, agregar cleanup en `astro:before-swap`.
4. No hardcodear contenido que pertenece a colecciones en componentes reutilizables.
5. Antes de crear estilos nuevos, revisar `src/styles/global.css`.
6. Mantener clases semánticas de tokens (`bg-background`, `text-foreground`, etc.).

## Anti-patrones

- Tratar Astro como SPA React.
- Duplicar contenido editorial en más de una fuente.
- Romper la separación entre componentes globales y componentes de sección.
- Introducir dependencias JS para efectos que se pueden resolver con CSS.
