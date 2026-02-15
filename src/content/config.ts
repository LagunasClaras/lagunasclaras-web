import { defineCollection, z } from 'astro:content';

const services = defineCollection({
  type: 'data',
  schema: ({ image }) =>
    z.object({
      slug: z.string().optional(), // In case it's needed explicitly, but usually file-based
      title: z.string(),
      subtitle: z.string().optional(), // For the hero text
      badge: z.string().optional(),
      shortDescription: z.string(),
      hero: z.object({
        src: image(),
        alt: z.string().optional(),
      }),
      problem: z.object({
        title: z.string(),
        description: z.string(),
        bullets: z.array(z.string()),
      }),
      process: z.array(
        z.object({
          title: z.string(),
          description: z.string(),
          image: image().optional(), // Image for the step
        })
      ),
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

export const collections = {
  services,
};
