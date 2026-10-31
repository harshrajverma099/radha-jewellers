import React from 'react';
import { Layout } from '../components/Layout';
import { Hero } from '../components/Hero';
import { About } from '../components/About';
import { ModelFilmsShowcase } from '../components/ModelFilmsShowcase';
import { JewelleryExperienceSection } from '../components/JewelleryExperienceSection';
import { Collections } from '../components/Collections';
import { FeaturedJewellery } from '../components/FeaturedJewellery';
import { Offers } from '../components/Offers';
import { WhyChooseUs } from '../components/WhyChooseUs';
import { Testimonials } from '../components/Testimonials';
import { Showroom } from '../components/Showroom';
import { MapSection } from '../components/MapSection';
import { InstagramGallery } from '../components/InstagramGallery';
import { Contact } from '../components/Contact';

export const Home: React.FC = () => {
  return (
    <Layout>
      {/* 1. Cinematic Model Video Hero */}
      <Hero />

      {/* 2. Brand Story & Heritage */}
      <About />

      {/* 3. Elegance in Motion — Real Model Jewellery Films */}
      <ModelFilmsShowcase />

      {/* 4. The 3D Jewellery Experience */}
      <JewelleryExperienceSection />

      {/* 5. Discover Collections */}
      <Collections />

      {/* 6. Festive Promotional Offers */}
      <Offers />

      {/* 7. Featured Jewellery Showcase */}
      <FeaturedJewellery />

      {/* 8. Why Choose Us / Brand Values */}
      <WhyChooseUs />

      {/* 9. Showroom Experience */}
      <Showroom />

      {/* 10. Google Maps & Directions */}
      <MapSection />

      {/* 11. Stories of Trust */}
      <Testimonials />

      {/* 12. Instagram & Social Gallery */}
      <InstagramGallery />

      {/* 13. Direct Contact & Enquiry */}
      <Contact />
    </Layout>
  );
};

export default Home;
