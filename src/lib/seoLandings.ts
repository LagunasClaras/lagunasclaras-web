export interface LandingFaqItem {
  question: string;
  answer: string;
}

export interface LandingProofItem {
  name: string;
  detail: string;
}

export interface LandingLinkItem {
  title: string;
  description: string;
  href: string;
  cta?: string;
}

export interface LandingPageContent {
  title: string;
  description: string;
  h1: string;
  intro: string;
  heroBullets: string[];
  processTitle: string;
  processBody: string[];
  coverageTitle: string;
  coverageBody: string;
  coverageBullets: string[];
  proofTitle: string;
  proofItems: LandingProofItem[];
  faqItems: LandingFaqItem[];
  relatedLinks: LandingLinkItem[];
  serviceLabel: string;
  breadcrumbLabel: string;
  serviceUrl?: string;
}

export const seoLinksGrid: LandingLinkItem[] = [
  {
    title: 'Página principal de Lagunas Claras',
    description:
      'Conocé la presentación general de Lagunas Claras y nuestro enfoque sobre limpieza, mantenimiento y recuperación de cuerpos de agua.',
    href: '/',
    cta: 'Ver página',
  },
  {
    title: 'Mantenimiento de lagos',
    description: 'Servicio continuo para sostener la calidad del agua y controlar vegetación.',
    href: '/mantenimiento-de-lagos',
  },
  {
    title: 'Mantenimiento de espejos de agua',
    description: 'Planificación y mantenimiento preventivo para lagunas, lagos y espejos de agua.',
    href: '/mantenimiento-de-espejos-de-agua',
  },
];

export const limpiezaDeLagunasPage: LandingPageContent = {
  title: 'Servicio puntual de limpieza y recuperación de lagunas | Lagunas Claras',
  description:
    'Intervenciones puntuales para limpieza y recuperación de lagunas, corte de vegetación acuática y extracción de residuos con maquinaria especializada en Zona Norte, Buenos Aires y Argentina.',
  h1: 'Servicio puntual para limpiar y recuperar lagunas con maquinaria especializada',
  intro:
    'Esta página resume nuestro servicio específico para intervenciones puntuales en lagunas de barrios privados, countries, municipios e instituciones que necesitan recuperar claridad, controlar vegetación acuática y ordenar el cuerpo de agua con un abordaje técnico en Zona Norte, Buenos Aires y distintos puntos de Argentina.',
  heroBullets: [
    'Corte y extracción de vegetación acuática en distintos niveles de profundidad.',
    'Retiro de residuos flotantes, camalotes y acumulaciones en intervenciones puntuales o correctivas.',
    'Ejecución mecánica sin productos químicos para proteger el ecosistema y preparar el mantenimiento posterior.',
  ],
  processTitle: 'Cómo abordamos una intervención de limpieza de lagunas',
  processBody: [
    'Primero evaluamos superficie, acceso, volumen de vegetación y estado general del cuerpo de agua para definir la estrategia de intervención.',
    'Luego trabajamos con maquinaria diseñada para corte, recolección y traslado del material extraído, reduciendo tiempos y evitando soluciones agresivas para el entorno.',
    'El resultado es una laguna más limpia, con mejor lectura visual, mejor circulación y condiciones más favorables para sostener su mantenimiento posterior. Si buscás una visión general del servicio y de la empresa, también podés visitar nuestra página principal sobre limpieza de lagunas.',
  ],
  coverageTitle: 'Cobertura y tipo de clientes',
  coverageBody:
    'Atendemos proyectos de limpieza de lagunas en Zona Norte, en distintos puntos de Buenos Aires y también en otras provincias de Argentina, coordinando cada intervención según superficie, acceso y objetivos del cliente.',
  coverageBullets: [
    'Barrios privados, countries y desarrollos con lagunas ornamentales.',
    'Municipios e instituciones que necesitan mejorar la calidad visual y operativa del agua.',
    'Cobertura para trabajos puntuales o integrados a esquemas de mantenimiento periódico.',
  ],
  proofTitle: 'Qué priorizamos en cada intervención',
  proofItems: [
    {
      name: 'Evaluación inicial',
      detail:
        'Definimos alcance, maquinaria y modalidad de trabajo según tipo de laguna y accesibilidad.',
    },
    {
      name: 'Protección del entorno',
      detail:
        'Priorizamos soluciones mecánicas y una ejecución ordenada para cuidar el ecosistema y el uso del predio.',
    },
    {
      name: 'Continuidad operativa',
      detail:
        'Podemos combinar la limpieza puntual con un esquema posterior de mantenimiento si el proyecto lo necesita.',
    },
  ],
  faqItems: [
    {
      question: '¿Qué incluye un servicio de limpieza de lagunas?',
      answer:
        'Incluye evaluación técnica, corte de vegetación acuática, extracción de residuos y definición del manejo del material retirado según el tipo de intervención.',
    },
    {
      question: '¿La limpieza de lagunas se hace con químicos?',
      answer:
        'No. Nuestro enfoque prioriza soluciones mecánicas para controlar vegetación y residuos sin alterar innecesariamente el ecosistema del agua.',
    },
    {
      question: '¿Tienen cobertura en Zona Norte, Buenos Aires y otras provincias?',
      answer:
        'Sí. Coordinamos trabajos en Zona Norte, en distintos puntos de Buenos Aires y también en otros lugares de Argentina según el tipo de proyecto.',
    },
  ],
  relatedLinks: [
    {
      title: 'Página principal de limpieza de lagunas',
      description:
        'Conocé el enfoque general de Lagunas Claras para limpieza de lagunas, mantenimiento y recuperación de cuerpos de agua.',
      href: '/',
    },
    {
      title: 'Mantenimiento de lagos',
      description: 'Si además de una limpieza puntual necesitás continuidad y prevención.',
      href: '/mantenimiento-de-lagos',
    },
    {
      title: 'Mantenimiento de espejos de agua',
      description: 'Si necesitás continuidad operativa además de una limpieza puntual.',
      href: '/mantenimiento-de-espejos-de-agua',
    },
  ],
  serviceLabel: 'Limpieza de lagunas',
  breadcrumbLabel: 'Limpieza de lagunas',
};

export const mantenimientoDeLagosPage: LandingPageContent = {
  title: 'Mantenimiento de lagos | Lagunas Claras',
  description:
    'Servicio de mantenimiento de lagos, lagunas y cuerpos de agua para controlar vegetación, sostener claridad y evitar deterioro operativo en Zona Norte, Buenos Aires y Argentina.',
  h1: 'Mantenimiento de lagos, lagunas y cuerpos de agua',
  intro:
    'Diseñamos esquemas de mantenimiento de lagos para sostener la calidad del agua, anticipar acumulaciones de vegetación y evitar que el problema escale a una recuperación más costosa, con cobertura en Zona Norte, Buenos Aires y distintos puntos de Argentina.',
  heroBullets: [
    'Seguimiento técnico para sostener estética, funcionalidad y equilibrio del agua.',
    'Control preventivo de vegetación acuática y residuos antes de que afecten la operación.',
    'Intervenciones programadas para lagos ornamentales, lagunas y espejos de agua.',
  ],
  processTitle: 'Qué contempla un plan de mantenimiento',
  processBody: [
    'El mantenimiento de lagos no se resuelve con una sola limpieza. Necesita periodicidad, lectura del comportamiento del agua y definición de tareas según estación, uso y entorno.',
    'Por eso trabajamos con diagnósticos iniciales, cronogramas y ajustes según evolución del cuerpo de agua, priorizando intervenciones mecánicas y de bajo impacto.',
    'El objetivo es sostener resultados: menos acumulación, mejor claridad, menor proliferación y más previsibilidad para administración y propietarios.',
  ],
  coverageTitle: 'Dónde y para quién trabajamos',
  coverageBody:
    'Brindamos mantenimiento de lagos en desarrollos privados, clubes, municipios e instituciones que necesitan continuidad operativa y una imagen cuidada del entorno acuático en Zona Norte, Buenos Aires y otros puntos del país.',
  coverageBullets: [
    'Planes periódicos para lagos ornamentales y lagunas de barrios cerrados.',
    'Cobertura en Zona Norte, Buenos Aires y otras provincias de Argentina.',
    'Articulación entre mantenimiento preventivo y acciones de recuperación cuando hace falta.',
  ],
  proofTitle: 'Qué aporta un mantenimiento bien planificado',
  proofItems: [
    {
      name: 'Prevención',
      detail: 'Reduce la acumulación de vegetación y evita intervenciones más costosas a futuro.',
    },
    {
      name: 'Estabilidad visual y operativa',
      detail: 'Sostiene claridad, orden y mejores condiciones de uso del cuerpo de agua.',
    },
    {
      name: 'Plan adaptado',
      detail:
        'La frecuencia y las tareas se definen según el comportamiento real del lago o laguna.',
    },
  ],
  faqItems: [
    {
      question: '¿Cada cuánto conviene hacer mantenimiento de lagos?',
      answer:
        'Depende del tamaño, la carga de nutrientes, el tipo de vegetación y el uso del lago. Después de la evaluación inicial definimos una frecuencia razonable.',
    },
    {
      question: '¿Mantenimiento de lagos y limpieza de lagunas es lo mismo?',
      answer:
        'No exactamente. La limpieza suele resolver un problema puntual; el mantenimiento busca prevenir que vuelva a aparecer y sostener condiciones estables.',
    },
    {
      question: '¿Tienen cobertura en Zona Norte, Buenos Aires y otras provincias?',
      answer:
        'Sí. Coordinamos trabajos en Zona Norte, en distintos puntos de Buenos Aires y también en otros lugares de Argentina según el tipo de proyecto.',
    },
  ],
  relatedLinks: [
    {
      title: 'Mantenimiento de espejos de agua',
      description: 'Alternativa orientada a lagunas ornamentales y espejos de agua intervenidos.',
      href: '/mantenimiento-de-espejos-de-agua',
    },
    {
      title: 'Limpieza de lagunas',
      description:
        'Si hoy el problema principal es recuperar una laguna ya afectada por vegetación y residuos.',
      href: '/',
    },
  ],
  serviceLabel: 'Mantenimiento de lagos',
  breadcrumbLabel: 'Mantenimiento de lagos',
};

export const mantenimientoDeEspejosPage: LandingPageContent = {
  title: 'Mantenimiento de espejos de agua | Lagunas Claras',
  description:
    'Mantenimiento de espejos de agua, lagunas ornamentales y cuerpos de agua para sostener claridad, orden visual y funcionamiento en Zona Norte, Buenos Aires y Argentina.',
  h1: 'Mantenimiento de espejos de agua con seguimiento técnico',
  intro:
    'El mantenimiento de espejos de agua apunta a evitar que la vegetación, los residuos y el deterioro visual vuelvan a instalarse. Por eso trabajamos con una lógica preventiva y no solo reactiva, con cobertura en Zona Norte, Buenos Aires y distintos puntos de Argentina.',
  heroBullets: [
    'Planes de seguimiento para espejos de agua y lagunas ornamentales.',
    'Control preventivo de vegetación acuática, residuos y desequilibrios visibles.',
    'Adaptación del servicio según escala, accesibilidad y exigencia paisajística del predio.',
  ],
  processTitle: 'Por qué conviene mantener y no esperar al problema grande',
  processBody: [
    'Cuando un espejo de agua se deja sin seguimiento, la vegetación avanza, se acumulan residuos y la intervención termina siendo más costosa y más invasiva.',
    'Con mantenimiento preventivo se puede sostener la claridad, mejorar la experiencia visual del predio y resolver antes de que aparezcan malos olores o acumulaciones críticas.',
    'Esto es especialmente importante en accesos, áreas comunes y espacios recreativos donde el agua forma parte directa de la percepción del lugar.',
  ],
  coverageTitle: 'Aplicaciones habituales',
  coverageBody:
    'Ofrecemos mantenimiento de espejos de agua en desarrollos residenciales, clubes, municipios e instituciones que necesitan previsibilidad y una imagen cuidada del entorno en Zona Norte, Buenos Aires y otros puntos del país.',
  coverageBullets: [
    'Mantenimiento periódico en barrios privados y countries.',
    'Intervenciones para espejos de agua ornamentales en espacios institucionales.',
    'Cobertura en Zona Norte, Buenos Aires y otros puntos del país.',
  ],
  proofTitle: 'Qué buscamos sostener con el mantenimiento',
  proofItems: [
    {
      name: 'Claridad visual',
      detail:
        'Mantenemos el espejo de agua en condiciones compatibles con su función paisajística y operativa.',
    },
    {
      name: 'Orden del entorno',
      detail:
        'Controlamos vegetación y residuos para evitar deterioro progresivo y pérdida de calidad visual.',
    },
    {
      name: 'Seguimiento preventivo',
      detail:
        'Ajustamos frecuencia y tareas según el comportamiento del cuerpo de agua y la exigencia del predio.',
    },
  ],
  faqItems: [
    {
      question: '¿Qué tareas puede incluir el mantenimiento de espejos de agua?',
      answer:
        'Puede incluir monitoreo, corte de vegetación, retiro de residuos, ajustes de frecuencia y recomendaciones para sostener el equilibrio del cuerpo de agua.',
    },
    {
      question: '¿Conviene hacer una limpieza inicial antes del mantenimiento?',
      answer:
        'Sí, cuando el espejo de agua ya está muy cargado. En esos casos conviene recuperar primero y luego sostener con mantenimiento.',
    },
    {
      question: '¿Tienen cobertura en Zona Norte, Buenos Aires y otras provincias?',
      answer:
        'Sí. Coordinamos trabajos en Zona Norte, en distintos puntos de Buenos Aires y también en otros lugares de Argentina según el tipo de proyecto.',
    },
  ],
  relatedLinks: [
    {
      title: 'Mantenimiento de lagos',
      description:
        'Enfoque preventivo aplicado a lagos, lagunas y cuerpos de agua de mayor escala.',
      href: '/mantenimiento-de-lagos',
    },
    {
      title: 'Limpieza de lagunas',
      description: 'Si hoy la prioridad es recuperar una laguna o espejo de agua ya afectado.',
      href: '/',
    },
  ],
  serviceLabel: 'Mantenimiento de espejos de agua',
  breadcrumbLabel: 'Mantenimiento de espejos de agua',
};
