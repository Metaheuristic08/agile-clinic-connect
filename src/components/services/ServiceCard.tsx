
import React from 'react';
import { Link } from 'react-router-dom';
import { Service } from '@/types/service';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Calendar, Clock, ChevronRight } from 'lucide-react';

interface ServiceCardProps {
  service: Service;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ service }) => {
  return (
    <Card className="overflow-hidden h-full transition-transform hover:translate-y-[-5px]">
      <div className="h-48 overflow-hidden">
        <img 
          src={service.imageUrl} 
          alt={service.title}
          className="w-full h-full object-cover"
        />
      </div>
      <CardContent className="pt-6">
        <h3 className="text-xl font-bold text-ong-darkGray mb-2">{service.title}</h3>
        <p className="text-gray-600 text-sm mb-4">{service.shortDescription}</p>
        
        <div className="flex items-center gap-6 mt-4 text-sm text-gray-500">
          <div className="flex items-center gap-1">
            <Clock size={16} className="text-ong-blue" />
            <span>{service.duration} min</span>
          </div>
          <div className="flex items-center gap-1">
            <Calendar size={16} className="text-ong-blue" />
            <span>{service.availableDays.length} días</span>
          </div>
        </div>
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
  );
};

export default ServiceCard;
