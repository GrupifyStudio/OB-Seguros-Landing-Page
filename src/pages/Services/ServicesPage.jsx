import React from "react";
import { Layout } from "../../layouts/Layout";
import { ServiceFive } from "../../components/Services/ServiceFive";

const ServicesPage = () => {
  return (
    <Layout breadcrumb={"Servicios"}  title={'Nuestros Servicios'} >
      {/* services */}
      <ServiceFive />
    </Layout>
  );
};

export default ServicesPage;
