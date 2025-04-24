
import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const CTASection: React.FC = () => {
  return (
    <section className="py-16 bg-ong-blue">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center text-white">
          <h2 className="text-3xl font-bold mb-6">¿Necesitas ayuda? Estamos aquí para ti</h2>
          <p className="text-lg mb-8 opacity-90">
            No esperes más para recibir la atención que mereces. Nuestro equipo de profesionales 
            está listo para atenderte con calidad y calidez humana.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button asChild size="lg" className="bg-white text-ong-blue hover:bg-gray-100">
              <Link to="/servicios" className="flex items-center gap-2">
                Agendar una cita
                <ArrowRight size={16} />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-white/10">
              <Link to="/contacto">
                Contáctanos
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
