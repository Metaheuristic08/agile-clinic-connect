
import React from 'react';
import Layout from '@/components/layout/Layout';
import ServiceCard from '@/components/services/ServiceCard';
import { services } from '@/data/services';
import { Button } from '@/components/ui/button';

const Services: React.FC = () => {
  return (
    <Layout>
      <div className="bg-ong-lightGray py-12">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h1 className="text-4xl font-bold text-ong-darkGray mb-4">Nuestros Servicios</h1>
            <p className="text-gray-600">
              Ofrecemos una variedad de servicios de salud y apoyo social completamente gratuitos. 
              Cada servicio está enfocado en cubrir necesidades específicas de nuestra comunidad 
              y es brindado por profesionales capacitados.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-ong-darkGray mb-4">
              ¿Necesitas más información o deseas comunicarte directamente con nosotros?
            </p>
            <Button asChild className="bg-ong-blue hover:bg-blue-700">
              <a href="/contacto">Contáctanos</a>
            </Button>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Services;
