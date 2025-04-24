
export interface FAQ {
  question: string;
  answer: string;
  category: 'general' | 'services' | 'appointments' | 'policies';
}

export const faqs: FAQ[] = [
  {
    question: '¿Qué servicios ofrece la ONG Clínica Ágil?',
    answer: 'Ofrecemos servicios de psicología, pruebas de VIH, trabajo social y nutrición, todos enfocados en poblaciones vulnerables y completamente gratuitos.',
    category: 'general'
  },
  {
    question: '¿Cómo puedo agendar una cita?',
    answer: 'Puede agendar una cita a través de nuestro sistema online en la sección "Reservar Cita", llamando a nuestro número de teléfono, o visitando personalmente nuestras instalaciones en horario de atención.',
    category: 'appointments'
  },
  {
    question: '¿Necesito algún documento para acceder a los servicios?',
    answer: 'Para la mayoría de los servicios, se recomienda traer una identificación oficial. Para servicios específicos como pruebas de VIH o nutrición, podría requerirse documentación adicional que se detalla en la descripción del servicio.',
    category: 'services'
  },
  {
    question: '¿Los servicios tienen algún costo?',
    answer: 'No, todos nuestros servicios son completamente gratuitos gracias al apoyo de donantes y organizaciones colaboradoras.',
    category: 'general'
  },
  {
    question: '¿Qué hago si necesito cancelar o reprogramar mi cita?',
    answer: 'Si necesita cancelar o reprogramar, puede hacerlo a través de nuestro sistema online o llamando con al menos 24 horas de anticipación. Esto nos permite ofrecer el espacio a otra persona que lo necesite.',
    category: 'appointments'
  },
  {
    question: '¿Cómo se manejan mis datos personales?',
    answer: 'Toda la información que nos proporciona es estrictamente confidencial y está protegida por nuestras políticas de privacidad. Solo el personal autorizado tiene acceso a los datos necesarios para brindarle atención adecuada.',
    category: 'policies'
  },
  {
    question: '¿Qué debo esperar en mi primera visita?',
    answer: 'En su primera visita, le pediremos completar un formulario con información básica. Luego, según el servicio solicitado, tendrá una evaluación inicial para determinar sus necesidades específicas y el plan de atención adecuado.',
    category: 'general'
  },
  {
    question: '¿Cuánto tiempo dura cada cita?',
    answer: 'La duración varía según el servicio: las consultas de psicología duran aproximadamente 50 minutos, las pruebas de VIH 30 minutos, las consultas de trabajo social 45 minutos, y las de nutrición 40 minutos.',
    category: 'services'
  },
  {
    question: '¿Ofrecen servicios de emergencia?',
    answer: 'Sí, contamos con un servicio de atención para crisis emocionales y situaciones urgentes dentro de nuestro horario de atención. Para emergencias médicas graves, recomendamos acudir directamente a un hospital o llamar a servicios de emergencia.',
    category: 'services'
  },
  {
    question: '¿Puedo solicitar un profesional específico para mi atención?',
    answer: 'Sí, al momento de agendar puede solicitar atención con un profesional específico, sujeto a su disponibilidad. También puede especificar preferencias como el género del profesional para sentirse más cómodo.',
    category: 'appointments'
  }
];

export const getFAQsByCategory = (category: string): FAQ[] => {
  if (category === 'all') {
    return faqs;
  }
  return faqs.filter(faq => faq.category === category);
};
