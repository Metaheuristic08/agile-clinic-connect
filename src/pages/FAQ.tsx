
import React, { useState } from 'react';
import Layout from '@/components/layout/Layout';
import FAQAccordion from '@/components/faq/FAQAccordion';
import { faqs, getFAQsByCategory } from '@/data/faqs';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const FAQ: React.FC = () => {
  const [category, setCategory] = useState<string>('all');
  const filteredFAQs = getFAQsByCategory(category);

  return (
    <Layout>
      <div className="bg-ong-lightGray py-12">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h1 className="text-4xl font-bold text-ong-darkGray mb-4">Preguntas Frecuentes</h1>
              <p className="text-gray-600">
                Encuentra respuestas a las preguntas más comunes sobre nuestros servicios, 
                políticas y proceso de citas.
              </p>
            </div>

            <Tabs defaultValue="all" onValueChange={setCategory} className="w-full">
              <div className="flex justify-center mb-6">
                <TabsList className="grid grid-cols-2 md:grid-cols-4">
                  <TabsTrigger value="all">Todas</TabsTrigger>
                  <TabsTrigger value="general">General</TabsTrigger>
                  <TabsTrigger value="services">Servicios</TabsTrigger>
                  <TabsTrigger value="appointments">Citas</TabsTrigger>
                </TabsList>
              </div>
              
              <TabsContent value="all">
                <FAQAccordion faqs={faqs} />
              </TabsContent>
              <TabsContent value="general">
                <FAQAccordion faqs={getFAQsByCategory('general')} />
              </TabsContent>
              <TabsContent value="services">
                <FAQAccordion faqs={getFAQsByCategory('services')} />
              </TabsContent>
              <TabsContent value="appointments">
                <FAQAccordion faqs={getFAQsByCategory('appointments')} />
              </TabsContent>
            </Tabs>

            <div className="mt-12 text-center p-6 bg-white rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-ong-darkGray mb-2">¿No encuentras lo que buscas?</h3>
              <p className="text-gray-600 mb-4">
                Si tienes alguna pregunta que no ha sido respondida aquí, no dudes en contactarnos.
              </p>
              <a 
                href="/contacto"
                className="inline-flex items-center px-6 py-3 bg-ong-blue text-white font-medium rounded-md hover:bg-blue-700 transition-colors"
              >
                Contáctanos
              </a>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default FAQ;
