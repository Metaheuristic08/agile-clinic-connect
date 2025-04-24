
import { Service } from '../types/service';

export const services: Service[] = [
  {
    id: 'psicologia',
    title: 'Psicología',
    shortDescription: 'Atención psicológica para apoyo emocional y salud mental',
    fullDescription: 'Nuestro servicio de psicología ofrece atención profesional para diversas necesidades de salud mental. Contamos con psicólogos especializados en trauma, ansiedad, depresión, adicciones y apoyo a personas con VIH. Ofrecemos un espacio seguro y confidencial para hablar sobre tus preocupaciones y trabajar en estrategias efectivas para mejorar tu bienestar emocional.',
    imageUrl: '/placeholder.svg',
    professionals: [
      {
        id: 'psico-1',
        name: 'Dra. María García',
        specialty: 'Psicología Clínica',
        imageUrl: '/placeholder.svg',
        bio: 'Especializada en trauma y terapia cognitivo-conductual con 10 años de experiencia.',
        availableDays: ['Lunes', 'Martes', 'Jueves']
      },
      {
        id: 'psico-2',
        name: 'Dr. Carlos Méndez',
        specialty: 'Psicología de la Salud',
        imageUrl: '/placeholder.svg',
        bio: 'Especializado en apoyo a personas con enfermedades crónicas y VIH.',
        availableDays: ['Miércoles', 'Viernes']
      }
    ],
    availableDays: ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes'],
    duration: 50,
    price: 'Gratuito'
  },
  {
    id: 'prueba-vih',
    title: 'Prueba de VIH',
    shortDescription: 'Pruebas rápidas y confidenciales con asesoramiento pre y post',
    fullDescription: 'Realizamos pruebas rápidas de VIH en un ambiente confidencial y seguro. Nuestro personal está capacitado para brindarte asesoramiento antes y después de la prueba, explicándote el procedimiento y respondiendo todas tus preguntas. El resultado se entrega en aproximadamente 20 minutos y ofrecemos apoyo emocional y orientación sobre los siguientes pasos, independientemente del resultado.',
    imageUrl: '/placeholder.svg',
    professionals: [
      {
        id: 'vih-1',
        name: 'Enf. Lucía Ramírez',
        specialty: 'Enfermería en Salud Pública',
        imageUrl: '/placeholder.svg',
        bio: 'Especializada en consejería y pruebas de VIH con enfoque en poblaciones vulnerables.',
        availableDays: ['Lunes', 'Martes', 'Jueves', 'Viernes']
      }
    ],
    availableDays: ['Lunes', 'Martes', 'Jueves', 'Viernes'],
    requirements: ['Traer identificación oficial', 'No es necesario estar en ayunas'],
    duration: 30,
    price: 'Gratuito'
  },
  {
    id: 'trabajo-social',
    title: 'Trabajo Social',
    shortDescription: 'Apoyo para acceder a recursos sociales y asistencia básica',
    fullDescription: 'El departamento de Trabajo Social ofrece orientación y apoyo para acceder a servicios sociales, programas de asistencia y recursos comunitarios. Ayudamos a realizar trámites para obtener documentación, acceso a seguridad social, vivienda, alimentación, y otros servicios básicos. Nuestro equipo trabaja para crear un plan de acción personalizado que aborde tus necesidades específicas.',
    imageUrl: '/placeholder.svg',
    professionals: [
      {
        id: 'tsocial-1',
        name: 'Ana Morales',
        specialty: 'Trabajo Social Comunitario',
        imageUrl: '/placeholder.svg',
        bio: 'Especializada en intervención con familias en situación de vulnerabilidad y gestión de recursos.',
        availableDays: ['Lunes', 'Miércoles', 'Viernes']
      }
    ],
    availableDays: ['Lunes', 'Miércoles', 'Viernes'],
    duration: 45,
    price: 'Gratuito'
  },
  {
    id: 'nutricion',
    title: 'Nutrición',
    shortDescription: 'Asesoría nutricional adaptada a necesidades específicas de salud',
    fullDescription: 'Nuestro servicio de nutrición proporciona evaluación y asesoramiento personalizado considerando tus necesidades específicas de salud. Desarrollamos planes de alimentación para personas con VIH, enfermedades crónicas, o quienes buscan mejorar su salud general. Ofrecemos seguimiento continuo para ajustar recomendaciones y educar sobre hábitos alimenticios saludables con presupuesto limitado.',
    imageUrl: '/placeholder.svg',
    professionals: [
      {
        id: 'nutri-1',
        name: 'Lic. Roberto Sánchez',
        specialty: 'Nutrición Clínica',
        imageUrl: '/placeholder.svg',
        bio: 'Especializado en nutrición para personas con VIH y enfermedades autoinmunes.',
        availableDays: ['Martes', 'Jueves']
      }
    ],
    availableDays: ['Martes', 'Jueves'],
    requirements: ['Traer estudios médicos recientes (si se tienen)'],
    duration: 40,
    price: 'Gratuito'
  }
];

export const getServiceById = (id: string): Service | undefined => {
  return services.find(service => service.id === id);
};
