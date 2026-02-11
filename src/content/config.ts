import { defineCollection, z } from 'astro:content';

const services = defineCollection({
  type: 'data',
  schema: z.object({
    id: z.string().optional(), // We keep the original ID in the data if needed, but the filename is the real ID
    title: z.string(),
    description: z.string(),
    image: z.string(),
    features: z.array(z.string()).optional(),
    specialty: z.string().optional(),
    resumeVideo: z.string().optional(),
    video: z.string().optional(),
  }),
});

export const collections = {
  services,
};
