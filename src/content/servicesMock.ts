export interface Service {
  id: string;
  title: string;
  description: string;
  image: string;
  features?: string[];
  specialty?: string;
  resumeVideo?: string;
  video?: string;
}

export const servicesMock: Service[] = [
  {
    id: '01',
    specialty: 'ESPECIALIDAD 01',
    title: 'Titulo de Servicio 1',
    description:
      'Implementamos técnicas de oxigenación y filtrado natural que respetan el ecosistema acuático y terrestre. Nuestro enfoque se basa en equilibrio de nutrientes para preservar el agua cristalina de forma permanente y natural.',
    features: ['Cero impacto en la fauna local', 'Sistemas de aireación de alta eficiencia'],
    image: '',
    resumeVideo: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
    video: 'https://www.youtube.com/watch?v=KiC3-LsjWyI',
  },
  {
    id: '02',
    specialty: 'ESPECIALIDAD 02',
    title: 'Titulo de Servicio 2',
    description:
      'Implementamos técnicas de oxigenación y filtrado natural que respetan el ecosistema acuático y terrestre. Nuestro enfoque se basa en equilibrio de nutrientes para preservar el agua cristalina de forma permanente y natural.',
    features: ['Cero impacto en la fauna local', 'Sistemas de aireación de alta eficiencia'],
    image: 'src/assets/fondo2.jpg',
  },
  {
    id: '03',
    specialty: 'ESPECIALIDAD 03',
    title: 'Titulo de Servicio 3',
    description:
      'Implementamos técnicas de oxigenación y filtrado natural que respetan el ecosistema acuático y terrestre. Nuestro enfoque se basa en equilibrio de nutrientes para preservar el agua cristalina de forma permanente y natural.',
    features: ['Cero impacto en la fauna local', 'Sistemas de aireación de alta eficiencia'],
    image: 'src/assets/fondo3.jpg',
  },
  {
    id: '04',
    specialty: 'ESPECIALIDAD 04',
    title: 'Titulo de Servicio 4',
    description:
      'Implementamos técnicas de oxigenación y filtrado natural que respetan el ecosistema acuático y terrestre. Nuestro enfoque se basa en equilibrio de nutrientes para preservar el agua cristalina de forma permanente y natural.',
    features: ['Cero impacto en la fauna local', 'Sistemas de aireación de alta eficiencia'],
    image: 'src/assets/fondo4.jpg',
  },
  {
    id: '05',
    specialty: 'ESPECIALIDAD 05',
    title: 'Titulo de Servicio 5',
    description:
      'Implementamos técnicas de oxigenación y filtrado natural que respetan el ecosistema acuático y terrestre. Nuestro enfoque se basa en equilibrio de nutrientes para preservar el agua cristalina de forma permanente y natural.',
    features: ['Cero impacto en la fauna local', 'Sistemas de aireación de alta eficiencia'],
    image: '',
  },
];
