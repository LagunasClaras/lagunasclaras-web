import { z } from 'zod';

export const ContactSchema = z.object({
  name: z.string().min(3, 'El nombre debe tener al menos 3 caracteres'),
  email: z
    .string()
    .trim()
    .min(6, 'El email ingresado no es válido')
    .max(254, 'El email ingresado no es válido')
    .email('El email ingresado no es válido'),
  phone: z.string().min(8, 'El teléfono debe tener al menos 8 caracteres'),
  organization: z.string().min(3, 'La organización debe tener al menos 3 caracteres'),
  location: z.string().min(3, 'La ubicación debe tener al menos 3 caracteres'),
  referralSource: z.string().min(1, 'Selecciona una opción'),
  services: z.array(z.string()).min(1, 'Selecciona al menos un servicio'),
  notes: z.string().min(10, 'El mensaje debe tener al menos 10 caracteres'),
  website: z.string().optional(), // Honeypot
});
