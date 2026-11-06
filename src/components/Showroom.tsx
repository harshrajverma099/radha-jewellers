import React from 'react';
import { MapPin, Phone, MessageCircle, Clock, Sparkles, Navigation, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { SectionHeading } from './SectionHeading';
import { Card3D } from './Card3D';
import { Scroll3DReveal } from './Motion3D';
import { siteConfig, getWhatsAppUrl, trackEvent } from '../data/siteConfig';

export const Showroom: React.FC = () => {
  return (
    <section id="showroom" className="py-20 md:py-28 bg-cream/40 dark:bg-emerald-noir/40 relative transition-colors duration-300" aria-label="Our Showroom">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <SectionHeading
          badge="Showroom Experience"
          title="Visit Radha Jewellers"
          subtitle="Discover our collections in person and experience the beauty of jewellery up close. We look forward to welcoming you to our showroom in Hata, Kushinagar."
        />

        {/* Editorial Composition: Architecture Image + Showroom Details in 3D */}
        <Scroll3DReveal delay={0.15}>
          <div className="bg-white dark:bg-emerald-surface rounded-3xl overflow-hidden border border-beige/80 dark:border-white/10 shadow-luxury dark:shadow-darkcard grid grid-cols-1 lg:grid-cols-12">
            {/* Left Column: Showroom Interior Showcase with 3D Tilt */}
            <div className="lg:col-span-7 relative h-72 sm:h-96 lg:h-auto min-h-[380px] bg-charcoal">
              <Card3D maxTilt={5} depth={16} glare={true} className="w-full h-full">
                <div className="w-full h-full relative">
                  <img
                    src="/images/showroom/showroom-interior.jpg"
                    alt="Radha Jewellers Showroom Interior in Hata, Kushinagar"
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal/70 via-transparent to-transparent pointer-events-none" />

                  <div className="absolute bottom-6 left-6 right-6 text-ivory">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-semibold tracking-wider uppercase bg-gold text-white mb-2 shadow-sm">
                      <Sparkles className="w-3.5 h-3.5" />
                      <span>Showroom at Hata</span>
                    </span>
                    <p className="font-serif text-xl sm:text-2xl font-bold">
                      An Ambiance of Warmth & Elegance
                    </p>
                    <p className="text-xs sm:text-sm text-beige/90">
                      Experience delicate kundan, gold, and diamond artistry in personal comfort.
                    </p>
                  </div>
                </div>
              </Card3D>
            </div>

            {/* Right Column: Address & Direct Actions */}
            <div className="lg:col-span-5 p-8 sm:p-10 lg:p-12 flex flex-col justify-between bg-white dark:bg-emerald-surface">
            <div className="space-y-6">
              <div>
                <p className="text-xs uppercase tracking-widestluxury text-gold-dark dark:text-gold-light font-semibold mb-2">
                  CONVENIENT LOCATION
                </p>
                <h3 className="font-serif text-2xl sm:text-3xl font-bold text-charcoal dark:text-ivory leading-tight mb-3">
                  Radha Jewellers
                </h3>
                <p className="text-sm text-warmgray-dark dark:text-beige/85 leading-relaxed font-light">
                  Located prominently in the heart of Hata on Main Road, easily accessible for visitors across Kushinagar and neighbouring districts.
                </p>
              </div>

              {/* Address Card */}
              <div className="p-5 rounded-2xl bg-cream/40 dark:bg-emerald-midnight/60 border border-beige/80 dark:border-white/10 space-y-3">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-gold-dark dark:text-gold-light flex-shrink-0 mt-0.5" />
                  <div className="text-xs sm:text-sm text-charcoal dark:text-ivory leading-relaxed">
                    <p className="font-semibold text-charcoal dark:text-ivory">{siteConfig.address.line1}</p>
                    <p className="text-warmgray-dark dark:text-beige/75">{siteConfig.address.landmark}</p>
                    <p className="text-warmgray-dark dark:text-beige/75">
                      {siteConfig.address.city}, {siteConfig.address.district}, {siteConfig.address.state} - {siteConfig.address.pincode}, {siteConfig.address.country}
                    </p>
                  </div>
                </div>

                {/* Opening Hours (only displayed if verified and configured) */}
                {siteConfig.openingHours && (
                  <div className="flex items-center gap-2.5 pt-3 border-t border-beige dark:border-white/10 text-xs text-warmgray-dark dark:text-beige/75">
                    <Clock className="w-4 h-4 text-gold flex-shrink-0" />
                    <span>{siteConfig.openingHours}</span>
                  </div>
                )}
              </div>

              {/* Contact Reference */}
              <div className="flex items-center gap-3 text-xs sm:text-sm text-charcoal dark:text-ivory">
                <div className="w-8 h-8 rounded-full bg-cream dark:bg-emerald-midnight flex items-center justify-center text-gold-dark dark:text-gold-light">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <span className="block text-[11px] text-warmgray dark:text-beige/70 uppercase tracking-wider">Showroom Helpline</span>
                  <a href={siteConfig.phoneLink} className="font-semibold text-charcoal dark:text-ivory hover:text-gold-dark dark:hover:text-gold-light transition-colors">
                    {siteConfig.phoneDisplay}
                  </a>
                </div>
              </div>
            </div>

            {/* Direct Conversion Actions */}
            <div className="pt-8 space-y-3">
              <Link
                to="/showroom"
                className="w-full flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-emerald hover:bg-emerald-dark text-white font-semibold text-xs uppercase tracking-wider transition-all shadow-sm"
              >
                <span>View Full Showroom & Visitor Guide</span>
                <ArrowRight className="w-4 h-4 text-gold-light" />
              </Link>

              <a
                href={siteConfig.directionsLink}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackEvent('showroom_directions_click')}
                className="w-full flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-gold hover:bg-gold-dark text-white font-semibold text-xs uppercase tracking-wider transition-all shadow-sm"
              >
                <Navigation className="w-4 h-4" />
                <span>Get Directions via Google Maps</span>
              </a>

              <div className="grid grid-cols-2 gap-3">
                <a
                  href={siteConfig.phoneLink}
                  onClick={() => trackEvent('showroom_call_click')}
                  className="flex items-center justify-center gap-1.5 px-4 py-3 rounded-full border border-beige dark:border-white/15 hover:border-gold dark:hover:border-gold-light bg-cream/30 dark:bg-emerald-midnight/60 text-charcoal dark:text-ivory hover:text-gold-dark dark:hover:text-gold-light font-medium text-xs uppercase tracking-wider transition-all text-center"
                >
                  <Phone className="w-3.5 h-3.5 text-gold" />
                  <span>Call Now</span>
                </a>

                <a
                  href={getWhatsAppUrl("Hello Radha Jewellers, I am planning a visit to your showroom in Hata.")}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => trackEvent('showroom_whatsapp_click')}
                  className="flex items-center justify-center gap-1.5 px-4 py-3 rounded-full border border-beige dark:border-white/15 hover:border-gold dark:hover:border-gold-light bg-cream/30 dark:bg-emerald-midnight/60 text-charcoal dark:text-ivory hover:text-gold-dark dark:hover:text-gold-light font-medium text-xs uppercase tracking-wider transition-all text-center"
                >
                  <MessageCircle className="w-3.5 h-3.5 text-gold" />
                  <span>WhatsApp</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </Scroll3DReveal>
      </div>
    </section>
  );
};

