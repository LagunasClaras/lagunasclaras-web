import type { fieldProps } from '../types/Contact.types';

export const getFields = (serviceOptions: { value: string; label: string }[]): fieldProps[] => [
  {
    name: 'name',
    label: 'Nombre completo',
    type: 'text',
    required: true,
    placeholder: 'Ej. Juan Pérez',
  },
  {
    name: 'email',
    label: 'Email',
    type: 'email',
    required: true,
    placeholder: 'Ej. juan.perez@gmail.com',
  },
  {
    name: 'phone',
    label: 'Teléfono',
    type: 'tel',
    required: true,
    placeholder: 'Ej. 11 1234 5467',
  },
  {
    name: 'organization',
    label: 'Organización',
    type: 'text',
    required: true,
    placeholder: 'Ej. Empresa SRL / Barrio X',
  },
  {
    name: 'location',
    label: 'Ubicación',
    type: 'text',
    required: true,
    placeholder: 'Ej. Tigre, Buenos Aires',
  },
  {
    name: 'referralSource',
    label: '¿Cómo te enteraste de nosotros?',
    type: 'select',
    options: [
      {
        value: 'google',
        label: 'Google',
      },
      {
        value: 'social_media',
        label: 'Por redes sociales',
      },
      {
        value: 'known_person',
        label: 'Por un conocido',
      },
      {
        value: 'adds',
        label: 'Por publicidad',
      },
      {
        value: 'other',
        label: 'Otro',
      },
    ],
    required: true,
  },
  {
    name: 'services',
    label: 'Selecciona los servicios que te interesan',
    type: 'checkbox',
    options: serviceOptions,
    required: true,
  },
  {
    name: 'contactMethod',
    label: '¿Por qué medio quieres que te contactemos?',
    type: 'radio',
    options: [
      {
        value: 'email',
        label: 'Email',
      },
      {
        value: 'phone',
        label: 'Teléfono',
      },
    ],
    required: false,
  },
  {
    name: 'notes',
    label: 'Notas',
    type: 'textarea',
    required: false,
    placeholder: 'Ej. dimensiones, notas adicionales',
  },
];
