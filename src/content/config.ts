import { defineCollection, z } from 'astro:content';

const services = defineCollection({
  type: 'content',
  schema: ({ image }) =>
    z.object({
      slug: z.string().optional(), // In case it's needed explicitly, but usually file-based
      title: z.string(),
      shortTitle: z.string().optional(),
      subtitle: z.string().optional(), // For the hero text
      badge: z.string().optional(),
      shortDescription: z.string(),
      hero: z.object({
        image: image(),
        alt: z.string().optional(),
      }),
      problem: z
        .object({
          title: z.string(),
          description: z.string(),
          bullets: z.array(z.string()),
        })
        .optional(),

      howWeDoIt: z
        .object({
          title: z.string(),
          steps: z.array(z.string()),
          image: image().optional(),
        })
        .optional(),
      process: z
        .array(
          z.object({
            title: z.string(),
            description: z.string(),
            image: image().optional(), // Image for the step
          })
        )
        .optional(),
      beforeAfter: z
        .object({
          before: image(), // Image path
          after: image(), // Image path
        })
        .optional(),
      gallery: z
        .array(
          z.discriminatedUnion('type', [
            z.object({
              type: z.literal('image'),
              src: image(),
            }),
            z.object({
              type: z.literal('video'),
              src: z.string(),
              poster: image().optional(),
            }),
          ])
        )
        .optional(),
      cta: z
        .object({
          title: z.string(),
          buttonText: z.string(),
        })
        .optional(),
    }),
});

const clientes = defineCollection({
  type: 'content',
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      logo: image(),
      description: z.string().optional(),
      type: z.string().optional(),
      location: z.string().optional(),
      status: z.string().optional(), // e.g. "Proyecto Activo"
      // Ficha Técnica
      stats: z
        .object({
          surface: z.string().optional(),
          frequency: z.string().optional(),
          team: z.string().optional(),
          start: z.string().optional(),
        })
        .optional(),
      // Servicios Realizados
      services: z
        .array(
          z.object({
            title: z.string(),
            description: z.string(),
          })
        )
        .optional(),
      // Galería
      gallery: z.array(image()).optional(),
    }),
});

export const collections = {
  services,
  clientes,
};
