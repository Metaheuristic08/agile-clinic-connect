
import React from 'react';
import { HeartHandshake, Shield, Users } from 'lucide-react';

const MissionSection: React.FC = () => {
  const features = [
    {
      icon: <HeartHandshake className="h-10 w-10 text-ong-coral" />,
      title: 'Atención Humanizada',
      description: 'Brindamos servicios centrados en la dignidad y respeto a cada persona, sin discriminación.'
    },
    {
      icon: <Shield className="h-10 w-10 text-ong-blue" />,
      title: 'Confidencialidad',
      description: 'Garantizamos la privacidad de toda la información compartida durante nuestros servicios.'
    },
    {
      icon: <Users className="h-10 w-10 text-ong-coral" />,
      title: 'Enfoque Comunitario',
      description: 'Trabajamos con y para la comunidad, adaptando nuestros servicios a necesidades reales.'
    }
  ];

  return (
    <div className="py-16 bg-ong-lightGray">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-bold text-ong-darkGray mb-4">Nuestra Misión</h2>
          <p className="text-gray-600">
            os dedicamos a mejorar la salud y calidad de vida de comunidades vulnerables 
            a través de servicios accesibles, integrados y de alta calidad. Creemos que la salud es un derecho 
            fundamental y trabajamos para eliminar barreras de acceso.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-sm text-center">
              <div className="inline-flex items-center justify-center mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2 text-ong-darkGray">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MissionSection;
