export interface ServicePageTexts {
  specialtyLabel: (text: string) => string;
  videoTitle: string;
  videoPlaceholder: string;
  viewFullVideo: string;
  featuresTitle: string;
  contactPrompt: string;
  contactButton: string;
  contactFallback: string;
  backToServices: string;
}

export const SERVICE_PAGE_TEXTS: ServicePageTexts = {
  specialtyLabel: (text: string) => text.toUpperCase(),
  videoTitle: 'Video Demostrativo',
  videoPlaceholder: 'Video Player Placeholder',
  viewFullVideo: 'Ver Video Completo',
  featuresTitle: 'Características del Servicio',
  contactPrompt: '¿Te interesa este servicio?',
  contactButton: 'Solicitar Cotización',
  contactFallback: 'Contáctanos para más detalles sobre este servicio.',
  backToServices: 'Volver a Servicios',
};
