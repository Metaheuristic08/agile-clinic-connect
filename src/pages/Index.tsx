
import React from 'react';
import Layout from '@/components/layout/Layout';
import Hero from '@/components/home/Hero';
import ServiceCards from '@/components/home/ServiceCards';
import MissionSection from '@/components/home/MissionSection';
import TestimonialSection from '@/components/home/TestimonialSection';
import CTASection from '@/components/home/CTASection';

const Index: React.FC = () => {
  return (
    <Layout>
      <Hero />
      <ServiceCards />
      <MissionSection />
      <TestimonialSection />
      <CTASection />
    </Layout>
  );
};

export default Index;
