
import React from 'react';
import { Service } from '@/types/service';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Clock, Calendar, CheckCircle, Info } from 'lucide-react';

interface ServiceDetailProps {
  service: Service;
}

const ServiceDetail: React.FC<ServiceDetailProps> = ({ service }) => {
  return (
    <div className="container py-12">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left column with image */}
        <div className="lg:col-span-1">
          <div className="rounded-lg overflow-hidden shadow-md">
            <img 
              src={service.imageUrl} 
              alt={service.title}
              className="w-full h-auto"
            />
          </div>
          
          <div className="mt-6 bg-white p-5 rounded-lg shadow-sm">
            <h3 className="text-lg font-semibold mb-4 text-ong-darkGray">Detalles del Servicio</h3>
            
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <Clock className="h-5 w-5 text-ong-blue mt-0.5" />
                <div>
                  <p className="font-medium text-ong-darkGray">Duración</p>
                  <p className="text-gray-600">{service.duration} minutos</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <Calendar className="h-5 w-5 text-ong-blue mt-0.5" />
                <div>
                  <p className="font-medium text-ong-darkGray">Días disponibles</p>
                  <p className="text-gray-600">{service.availableDays.join(', ')}</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <Info className="h-5 w-5 text-ong-blue mt-0.5" />
                <div>
                  <p className="font-medium text-ong-darkGray">Costo</p>
                  <p className="text-gray-600">{service.price}</p>
                </div>
              </div>
            </div>
            
            <div className="mt-6">
              <Button asChild className="w-full bg-ong-coral hover:bg-orange-600">
                <Link to={`/reservar/${service.id}`}>
                  Agendar Cita
                </Link>
              </Button>
            </div>
          </div>
        </div>
        
        {/* Right column with description and professionals */}
        <div className="lg:col-span-2">
          <h1 className="text-3xl font-bold text-ong-darkGray mb-4">{service.title}</h1>
          
          <div className="prose max-w-none text-gray-600 mb-8">
            <p className="text-lg mb-4">{service.fullDescription}</p>
          </div>
          
          {service.requirements && (
            <div className="mb-8">
              <h3 className="text-xl font-semibold mb-3 text-ong-darkGray">Requisitos</h3>
              <ul className="space-y-2">
                {service.requirements.map((req, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600">{req}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
          
          <div>
            <h3 className="text-xl font-semibold mb-4 text-ong-darkGray">Profesionales</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {service.professionals.map((professional) => (
                <div key={professional.id} className="bg-white p-4 rounded-lg shadow-sm flex gap-4">
                  <div className="w-16 h-16 rounded-full overflow-hidden flex-shrink-0">
                    <img 
                      src={professional.imageUrl} 
                      alt={professional.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-semibold text-ong-darkGray">{professional.name}</h4>
                    <p className="text-sm text-ong-blue">{professional.specialty}</p>
                    <p className="text-sm text-gray-500 mt-1">
                      Disponible: {professional.availableDays.join(', ')}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetail;
