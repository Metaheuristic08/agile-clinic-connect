
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Menu, X, Phone, User } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container py-3">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <div className="h-10 w-10 rounded-full bg-ong-blue flex items-center justify-center">
              <span className="text-white font-bold text-lg">OC</span>
            </div>
            <div className="hidden sm:block">
              <h1 className="text-xl font-bold text-ong-blue">ONG Clínica Ágil</h1>
              <p className="text-xs text-ong-darkGray">Salud accesible para todos</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            <Link to="/" className="text-ong-darkGray hover:text-ong-blue transition-colors">
              Inicio
            </Link>
            <Link to="/servicios" className="text-ong-darkGray hover:text-ong-blue transition-colors">
              Servicios
            </Link>
            <Link to="/faq" className="text-ong-darkGray hover:text-ong-blue transition-colors">
              Preguntas Frecuentes
            </Link>
            <Link to="/contacto" className="text-ong-darkGray hover:text-ong-blue transition-colors">
              Contacto
            </Link>
            <div className="flex items-center gap-3">
              <Button variant="outline" size="sm" className="flex items-center gap-2">
                <Phone size={16} />
                <span className="hidden lg:inline">Emergencia</span>
              </Button>
              <Button className="bg-ong-blue hover:bg-blue-700 flex items-center gap-2">
                <User size={16} />
                <span>Iniciar Sesión</span>
              </Button>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Button variant="ghost" size="sm" onClick={toggleMenu} className="p-1">
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden pt-4 pb-3 border-t mt-3 animate-fade-in">
            <div className="flex flex-col gap-2">
              <Link 
                to="/" 
                className="px-2 py-2 text-ong-darkGray rounded-md hover:bg-ong-lightGray"
                onClick={() => setIsMenuOpen(false)}
              >
                Inicio
              </Link>
              <Link 
                to="/servicios" 
                className="px-2 py-2 text-ong-darkGray rounded-md hover:bg-ong-lightGray"
                onClick={() => setIsMenuOpen(false)}
              >
                Servicios
              </Link>
              <Link 
                to="/faq" 
                className="px-2 py-2 text-ong-darkGray rounded-md hover:bg-ong-lightGray"
                onClick={() => setIsMenuOpen(false)}
              >
                Preguntas Frecuentes
              </Link>
              <Link 
                to="/contacto" 
                className="px-2 py-2 text-ong-darkGray rounded-md hover:bg-ong-lightGray"
                onClick={() => setIsMenuOpen(false)}
              >
                Contacto
              </Link>
              <div className="flex gap-2 mt-2">
                <Button variant="outline" size="sm" className="flex items-center gap-2 flex-1">
                  <Phone size={16} />
                  <span>Emergencia</span>
                </Button>
                <Button className="bg-ong-blue hover:bg-blue-700 flex items-center gap-2 flex-1">
                  <User size={16} />
                  <span>Iniciar Sesión</span>
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
