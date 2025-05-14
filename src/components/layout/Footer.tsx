
import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Facebook, Instagram, Twitter } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-50 border-t pt-16 pb-8">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* About Section */}
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="h-10 w-10 rounded-full bg-ong-blue flex items-center justify-center">
                <span className="text-white font-bold text-lg">OC</span>
              </div>
              <h3 className="font-bold text-lg text-ong-blue">ONG Prevención Viña</h3>
            </div>
            <p className="text-sm text-gray-600 mb-6">
              Proporcionamos servicios de salud accesibles para comunidades vulnerables con un enfoque en atención integral y apoyo humanitario.
            </p>

          </div>

          {/* Services */}
          <div className="col-span-1">
            <h3 className="font-bold text-lg mb-4 text-ong-darkGray">Nuestros Servicios</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/servicios/psicologia" className="text-gray-600 hover:text-ong-blue transition-colors text-sm">
                  Psicología
                </Link>
              </li>
              <li>
                <Link to="/servicios/prueba-vih" className="text-gray-600 hover:text-ong-blue transition-colors text-sm">
                  Pruebas de VIH
                </Link>
              </li>
              <li>
                <Link to="/servicios/trabajo-social" className="text-gray-600 hover:text-ong-blue transition-colors text-sm">
                  Trabajo Social
                </Link>
              </li>
              <li>
                <Link to="/servicios/nutricion" className="text-gray-600 hover:text-ong-blue transition-colors text-sm">
                  Nutrición
                </Link>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div className="col-span-1">
            <h3 className="font-bold text-lg mb-4 text-ong-darkGray">Enlaces Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/sobre-nosotros" className="text-gray-600 hover:text-ong-blue transition-colors text-sm">
                  Sobre Nosotros
                </Link>
              </li>
              <li>
                <Link to="/faq" className="text-gray-600 hover:text-ong-blue transition-colors text-sm">
                  Preguntas Frecuentes
                </Link>
              </li>
            </ul>
          </div>
          {/*
          <div className="col-span-1">
            <h3 className="font-bold text-lg mb-4 text-ong-darkGray">Contacto</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-ong-blue mt-1 flex-shrink-0" />
                <span className="text-sm text-gray-600">
                  Av. Principal 123, Ciudad Central
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-ong-blue flex-shrink-0" />
                <span className="text-sm text-gray-600">+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="text-ong-blue flex-shrink-0" />
                <span className="text-sm text-gray-600">contacto@clinicaagil.org</span>
              </li>
            </ul>
          </div>
          */}
        </div>

        {/* Bottom Copyright */}
        <div className="border-t mt-12 pt-6 text-center">
          <p className="text-sm text-gray-500">
            © {new Date().getFullYear()} ONG Prevención Viña. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
