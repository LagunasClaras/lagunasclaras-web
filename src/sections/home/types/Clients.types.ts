import type { ImageMetadata } from 'astro';

export interface ClientLogo {
  name: string;
  image: ImageMetadata;
  alt: string;
}

export interface ClientsProps {
  sectionTitle: string;
  sectionDescription: string;
  clients: ClientLogo[];
}
