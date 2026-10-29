import React from 'react';
import { Layout } from '../components/Layout';
import { Hero } from '../components/Hero';
import { About } from '../components/About';
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
      {/* 1. Hero Section */}
      <Hero />

      {/* 2. Brand Story & Heritage */}
      <About />

      {/* 3. The 3D Jewellery Experience */}
      <JewelleryExperienceSection />

      {/* 4. Discover Collections */}
      <Collections />

      {/* 5. Festive Promotional Offers */}
      <Offers />

      {/* 6. Featured Jewellery Showcase */}
      <FeaturedJewellery />

      {/* 7. Why Choose Us / Brand Values */}
      <WhyChooseUs />

      {/* 8. Showroom Experience */}
      <Showroom />

      {/* 9. Google Maps & Directions */}
      <MapSection />

      {/* 10. Stories of Trust */}
      <Testimonials />

      {/* 11. Instagram & Social Gallery */}
      <InstagramGallery />

      {/* 12. Direct Contact & Enquiry */}
      <Contact />
    </Layout>
  );
};

export default Home;
