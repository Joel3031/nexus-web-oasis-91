
import Layout from '@/components/layout/Layout';
import HeroCard from '@/components/home/HeroCard';
import ProductsSection from '@/components/home/ProductsSection';
import ServicesSection from '@/components/home/ServicesSection';
import BaasSection from '@/components/home/BaasSection';
import GlobalTeamSection from '@/components/home/GlobalTeamSection';
import OfficesSection from '@/components/home/OfficesSection';

const heroImage = "/lovable-uploads/40bbc752-566e-47d9-bc1c-b46347fbb9eb.png";

const Index = () => {
  return (
    <Layout>
      <div className="flex flex-col w-full overflow-x-hidden">
        {/* First hero card */}
        <section className="my-10 md:my-14 mx-2 md:mx-0">
          <HeroCard
            title="Tailored Digital Solutions for Scalable Growth"
            description="Unlock the full potential of digital transformation with our end-to-end technology services, designed to accelerate your business growth and create lasting impact."
            buttonText="Explore Our Services"
            buttonLink="/services"
            imageUrl={heroImage}
          />
        </section>
        {/* Second hero card for BaaS */}
        <section className="my-10 md:my-14 mx-2 md:mx-0">
          <HeroCard
            title="Accelerate Your Banking as a Service (BaaS) Transformation with Finexsus"
            description="260+ APIs in Just 8 Weeks! Launch next-gen banking products quickly with our full-featured and secure BaaS platform."
            buttonText="Discover Finexsus BaaS"
            buttonLink="/products/finexus"
            imageUrl={heroImage}
          />
        </section>
        <ProductsSection />
        <ServicesSection />
        <BaasSection />
        <GlobalTeamSection />
        <OfficesSection />
      </div>
    </Layout>
  );
};

export default Index;
