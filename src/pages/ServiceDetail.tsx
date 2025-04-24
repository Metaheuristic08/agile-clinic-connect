
import React from 'react';
import { useParams, Navigate } from 'react-router-dom';
import Layout from '@/components/layout/Layout';
import ServiceDetailComponent from '@/components/services/ServiceDetail';
import { getServiceById } from '@/data/services';

const ServiceDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const service = id ? getServiceById(id) : undefined;

  if (!service) {
    return <Navigate to="/servicios" replace />;
  }

  return (
    <Layout>
      <ServiceDetailComponent service={service} />
    </Layout>
  );
};

export default ServiceDetail;
