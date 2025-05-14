
import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Calendar, Phone } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <div className="bg-gradient-to-b from-ong-lightGray to-white py-16 md:py-24">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h1 className="text-4xl md:text-5xl font-bold text-ong-darkGray leading-tight">
              Salud accesible para <span className="text-ong-blue">comunidades vulnerables</span>
            </h1>
            <p className="text-lg text-gray-600">
              Ofrecemos servicios de psicología, pruebas de VIH, trabajo social y nutrición 
              para quienes más lo necesitan. Tu bienestar es nuestra prioridad.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg" className="bg-ong-blue hover:bg-blue-700 text-white">
                <Link to="/servicios" className="flex items-center gap-2">
                  <Calendar size={20} />
                  <span>Agendar Cita</span>
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <a href="tel:+15551234567" className="flex items-center gap-2">
                  <Phone size={20} />
                  <span>Línea de Emergencia</span>
                </a>
              </Button>
            </div>

            <div className="pt-4 flex items-center gap-3">
              <div className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm font-medium">
                Horario: Lun-Vie 9am-5pm
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -top-8 -left-8 w-24 h-24 bg-ong-coral rounded-full opacity-20"></div>
            <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-ong-blue rounded-full opacity-20"></div>
            <div className="bg-white rounded-xl shadow-lg p-3 relative z-10">
              <img 
                src="./src/assets/atencion-psico.jpg" 
                alt="Profesionales de salud" 
                className="w-full h-auto rounded-lg object-cover aspect-[4/3]"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
