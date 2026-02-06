import React from "react";
import { Layout } from "../../layouts/Layout";
import { AboutSeven } from "../../components/About/AboutSeven";
import { FeatureFive } from "../../components/Features/FeatureFive";
import { BrandSix } from "../../components/Brand/BrandSix";

const AboutPage = () => {
  return (
    <Layout breadcrumb={"About"} title={"Nosotros"}>
      {/* about-area */}
      <AboutSeven />

      {/* features-area */}
      <FeatureFive />

      {/* team-area */}
      {/*
      <TeamAreaThree />
      */}
      {/*
      <TestimonialAreaOne />
      */}
      {/* brand-area */}
      <BrandSix />
    </Layout>
  );
};

export default AboutPage;
