import React from 'react';
import { MapPin, Phone, MessageCircle, Navigation, Clock, Sparkles, ShieldCheck, HeartHandshake } from 'lucide-react';
import { Layout } from '../components/Layout';
import { SectionHeading } from '../components/SectionHeading';
import { Card3D } from '../components/Card3D';
import { Stagger3D, StaggerItem3D, Scroll3DReveal } from '../components/Motion3D';
import { MapSection } from '../components/MapSection';
import { siteConfig, getWhatsAppUrl, trackEvent } from '../data/siteConfig';

export const ShowroomPage: React.FC = () => {
  const amenities = [
    {
      title: 'Private Bridal Consultations',
      desc: 'Comfortable, dedicated viewing spaces to curate your wedding sets with close family members.',
    },
    {
      title: 'Hallmark Gold Purity',
      desc: 'Every precious gold ornament adheres to official hallmarking standards for complete peace of mind.',
    },
    {
      title: 'Personalized Custom Design',
      desc: 'Sit with our experienced team to realize custom designs and bespoke jewelry tailored to your desires.',
    },
    {
      title: 'Convenient Hata Location',
      desc: 'Prominently situated on Hata Main Road, easily accessible across Kushinagar and neighbouring towns.',
    },
  ];

  return (
    <Layout>
      <div className="pt-20 sm:pt-24 pb-20 bg-ivory text-charcoal">
        {/* Editorial Header */}
      <section className="relative py-16 bg-emerald-dark text-ivory overflow-hidden">
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#C6A15B_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-gold/40 text-gold-light text-xs uppercase tracking-widest mb-4 bg-black/40 backdrop-blur-md">
            <MapPin className="w-3.5 h-3.5 text-gold" />
            <span>HATA • KUSHINAGAR</span>
          </div>

          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight mb-4">
            Visit Our <span className="text-gold-gradient italic font-normal">Showroom.</span>
          </h1>

          <p className="text-base sm:text-lg text-beige/90 max-w-2xl mx-auto font-light leading-relaxed">
            Step into our welcoming showroom to explore authentic jewellery collections and experience timeless hospitality in person.
          </p>
        </div>
      </section>

      {/* Showroom Visual & Address Spotlight with 3D Depth */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Scroll3DReveal delay={0.1}>
          <div className="bg-white rounded-3xl overflow-hidden border border-beige shadow-luxury grid grid-cols-1 lg:grid-cols-12 mb-16">
            <div className="lg:col-span-7 h-80 sm:h-96 lg:h-[480px] relative">
              <Card3D maxTilt={6} depth={20} glare={true} className="w-full h-full">
                <div className="w-full h-full relative">
                  <img
                    src="/images/showroom/showroom-interior.jpg"
                    alt="Radha Jewellers Showroom"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute bottom-6 left-6 right-6 text-ivory">
                    <span className="px-3 py-1 rounded-full text-xs font-semibold uppercase bg-gold text-white shadow-sm inline-block mb-2">
                      HATA SHOWROOM
                    </span>
                    <p className="font-serif text-2xl font-bold">An Ambiance of Luxury & Warmth</p>
                  </div>
                </div>
              </Card3D>
            </div>

          <div className="lg:col-span-5 p-8 sm:p-12 flex flex-col justify-between space-y-6">
            <div>
              <span className="text-xs uppercase tracking-widest text-gold-dark font-semibold block mb-1">
                LOCATION DETAILS
              </span>
              <h2 className="font-serif text-3xl font-bold text-charcoal mb-4">
                Radha Jewellers
              </h2>

              <div className="p-5 rounded-2xl bg-cream/40 border border-beige space-y-2 text-sm text-warmgray-dark">
                <p className="font-semibold text-charcoal">{siteConfig.address.line1}</p>
                <p>{siteConfig.address.landmark}</p>
                <p>
                  {siteConfig.address.city}, {siteConfig.address.district}, {siteConfig.address.state}, {siteConfig.address.country}
                </p>
                {siteConfig.openingHours && (
                  <p className="pt-2 text-xs font-medium text-charcoal">
                    Hours: {siteConfig.openingHours}
                  </p>
                )}
              </div>
            </div>

            <div className="space-y-3">
              <a
                href={siteConfig.directionsLink}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackEvent('showroom_page_directions')}
                className="w-full flex items-center justify-center gap-2 py-3.5 px-4 rounded-full bg-gold hover:bg-gold-dark text-white font-semibold text-xs uppercase tracking-wider transition-all shadow-sm"
              >
                <Navigation className="w-4 h-4" />
                <span>Get Directions in Google Maps</span>
              </a>

              <div className="grid grid-cols-2 gap-3">
                <a
                  href={siteConfig.phoneLink}
                  className="flex items-center justify-center gap-1.5 py-3 px-4 rounded-full border border-beige hover:border-gold bg-cream/30 text-charcoal hover:text-gold-dark font-medium text-xs uppercase tracking-wider transition-all"
                >
                  <Phone className="w-3.5 h-3.5 text-gold" />
                  <span>Call Us</span>
                </a>

                <a
                  href={getWhatsAppUrl("Hello Radha Jewellers, I would like to schedule a showroom visit.")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-1.5 py-3 px-4 rounded-full border border-beige hover:border-gold bg-cream/30 text-charcoal hover:text-gold-dark font-medium text-xs uppercase tracking-wider transition-all"
                >
                  <MessageCircle className="w-3.5 h-3.5 text-gold" />
                  <span>WhatsApp</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </Scroll3DReveal>

        {/* Showroom Amenities with Staggered 3D Tilt */}
        <Stagger3D staggerDelay={0.1} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {amenities.map((item) => (
            <StaggerItem3D key={item.title} className="flex">
              <Card3D maxTilt={10} depth={15} glare={true} className="w-full flex">
                <div className="w-full p-6 rounded-2xl bg-white border border-beige shadow-sm space-y-2">
                  <Sparkles className="w-5 h-5 text-gold" />
                  <h3 className="font-serif font-bold text-lg text-charcoal">{item.title}</h3>
                  <p className="text-xs text-warmgray-dark font-light leading-relaxed">{item.desc}</p>
                </div>
              </Card3D>
            </StaggerItem3D>
          ))}
        </Stagger3D>
      </section>

      {/* Embedded Map Section */}
      <MapSection />
    </div>
    </Layout>
  );
};
