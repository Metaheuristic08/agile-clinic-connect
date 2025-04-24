
import React from 'react';
import { Star } from 'lucide-react';

interface Testimonial {
  quote: string;
  author: string;
  service: string;
  rating: number;
}

const testimonials: Testimonial[] = [
  {
    quote: "El apoyo psicológico que recibí me ayudó a superar un momento muy difícil en mi vida. La doctora fue muy profesional y empática.",
    author: "Elena M.",
    service: "Psicología",
    rating: 5
  },
  {
    quote: "El proceso para la prueba de VIH fue rápido, confidencial y me sentí respetado en todo momento. El personal fue muy amable y me explicó todo claramente.",
    author: "Juan C.",
    service: "Prueba de VIH",
    rating: 5
  },
  {
    quote: "Gracias a la trabajadora social pude acceder a programas de asistencia que no conocía. Ha cambiado mi situación completamente.",
    author: "María L.",
    service: "Trabajo Social",
    rating: 4
  }
];

const TestimonialSection: React.FC = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-ong-darkGray mb-4">Lo que dicen nuestros pacientes</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Estas son algunas experiencias de personas que han utilizado nuestros servicios y han querido compartir su testimonio.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-ong-lightGray p-6 rounded-lg">
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`h-5 w-5 ${
                      i < testimonial.rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'
                    }`}
                  />
                ))}
              </div>
              <p className="text-gray-600 italic mb-4">"{testimonial.quote}"</p>
              <div>
                <p className="font-semibold text-ong-darkGray">{testimonial.author}</p>
                <p className="text-sm text-gray-500">Servicio: {testimonial.service}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
