import { AboutThree } from "../../components/About/AboutThree";
import { BannerTwo } from "../../components/Banners/BannerTwo";
import { BrandTwo } from "../../components/Brand/BrandTwo";
import { CtaAreaOne } from "../../components/CtaAreas/CtaAreaOne";
import { FeatureTwo } from "../../components/Features/FeatureTwo";
import { OverviewAreaOne } from "../../components/OverviewAreas/OverviewAreaOne";
import { ServicesTwo } from "../../components/Services/ServicesTwo";
import { TestimonialAreaTwo } from "../../components/TestimonialAreas/TestimonialAreaTwo";
import { Layout } from "../../layouts/Layout";

const Home = () => {
  return (
    <Layout header={2} footer={2}>
      {/* banner area */}
      <BannerTwo />

      {/* feature area */}
      <FeatureTwo />

      {/* about-area */}
      <AboutThree />

      {/* brand-area */}
      <BrandTwo className={"pb-80"} />

      {/* services-area */}
      <ServicesTwo />

      {/* overview-area */}
      <OverviewAreaOne />

      {/* choose-area
      <ChooseAreaOne /> */}

      {/* project-area */}
      {/* <ProjectAreaTwo /> */}

      {/* cta-area */}
      <CtaAreaOne />

      {/* team area */}
      {/* <TeamAreaTwo /> */}

      {/* testimonial-area */}
      <TestimonialAreaTwo />

      {/* pricing-area */}
      {/* <PricingAreaTwo /> */}

      {/* blog-area */}
      {/* <BlogAreaTwo /> */}

      {/* request-area  */}
      {/* <RequestAreaTwo /> */}
    </Layout>
  );
};

export default Home;
