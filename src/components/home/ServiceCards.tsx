
import React from 'react';
import { Link } from 'react-router-dom';
import { services } from '@/data/services';
import { ChevronRight } from 'lucide-react';
import { Card, CardContent, CardFooter } from '@/components/ui/card';

const ServiceCards: React.FC = () => {
  return (
    <div className="py-16 bg-white">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-ong-darkGray mb-4">Nuestros Servicios</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Ofrecemos una variedad de servicios de salud para apoyar a las comunidades vulnerables. 
            Todos nuestros servicios son proporcionados por profesionales cualificados.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service) => (
            <Card key={service.id} className="overflow-hidden transition-transform hover:translate-y-[-5px]">
              <div className="h-48 overflow-hidden">
                <img 
                  src={service.imageUrl} 
                  alt={service.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <CardContent className="pt-6">
                <h3 className="text-xl font-bold text-ong-darkGray mb-2">{service.title}</h3>
                <p className="text-gray-600 text-sm">{service.shortDescription}</p>
              </CardContent>
              <CardFooter className="pt-2 pb-4">
                <Link 
                  to={`/servicios/${service.id}`} 
                  className="text-ong-blue hover:text-ong-coral flex items-center text-sm font-medium"
                >
                  Ver más detalles
                  <ChevronRight size={16} className="ml-1" />
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link 
            to="/servicios" 
            className="inline-flex items-center px-6 py-3 border border-ong-blue text-ong-blue font-medium text-sm rounded-md hover:bg-ong-blue hover:text-white transition-colors"
          >
            Ver todos los servicios
            <ChevronRight size={16} className="ml-1" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ServiceCards;
