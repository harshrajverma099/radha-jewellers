import React from 'react';
import { Phone, MessageCircle, MapPin, Navigation, Clock, Mail, Calendar, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { SectionHeading } from './SectionHeading';
import { Card3D } from './Card3D';
import { Stagger3D, StaggerItem3D, Scroll3DReveal } from './Motion3D';
import { siteConfig, getWhatsAppUrl, trackEvent } from '../data/siteConfig';

export const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-20 md:py-28 bg-ivory relative" aria-label="Contact Radha Jewellers">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <SectionHeading
          badge="Direct Assistance"
          title="We’d Love to Hear From You"
          subtitle="Have a question about our collections or planning a visit? Connect with Radha Jewellers."
        />

        <Stagger3D staggerDelay={0.12} className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* WhatsApp Card */}
          <StaggerItem3D className="flex">
            <Card3D maxTilt={10} depth={16} glare={true} className="w-full flex">
              <div className="w-full bg-white p-8 rounded-2xl border border-beige/80 shadow-luxury flex flex-col justify-between text-center">
                <div>
                  <div className="w-14 h-14 rounded-2xl bg-cream flex items-center justify-center text-gold-dark mx-auto mb-5 border border-gold/30">
                    <MessageCircle className="w-7 h-7" />
                  </div>
                  <h3 className="font-serif text-xl font-bold text-charcoal mb-2">
                    WhatsApp Chat
                  </h3>
                  <p className="text-xs text-warmgray-dark leading-relaxed font-light mb-6">
                    Enquire directly about festive offers, jewellery styles, or custom craftsmanship.
                  </p>
                </div>

                <a
                  href={getWhatsAppUrl("Hello Radha Jewellers, I’d like to know more about your jewellery collections.")}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => trackEvent('contact_card_whatsapp_click')}
                  className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-full bg-gold hover:bg-gold-dark text-white font-semibold text-xs uppercase tracking-wider transition-all shadow-sm"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Chat on WhatsApp</span>
                </a>
              </div>
            </Card3D>
          </StaggerItem3D>

          {/* Telephone Card */}
          <StaggerItem3D className="flex">
            <Card3D maxTilt={10} depth={16} glare={true} className="w-full flex">
              <div className="w-full bg-white p-8 rounded-2xl border border-beige/80 shadow-luxury flex flex-col justify-between text-center">
                <div>
                  <div className="w-14 h-14 rounded-2xl bg-cream flex items-center justify-center text-gold-dark mx-auto mb-5 border border-gold/30">
                    <Phone className="w-7 h-7" />
                  </div>
                  <h3 className="font-serif text-xl font-bold text-charcoal mb-2">
                    Call Showroom
                  </h3>
                  <p className="text-xs text-warmgray-dark leading-relaxed font-light mb-6">
                    Speak directly with our showroom team during visiting hours.
                  </p>
                </div>

                <a
                  href={siteConfig.phoneLink}
                  onClick={() => trackEvent('contact_card_call_click')}
                  className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-full border border-gold text-gold-dark hover:bg-gold hover:text-white font-semibold text-xs uppercase tracking-wider transition-all"
                >
                  <Phone className="w-4 h-4" />
                  <span>{siteConfig.phoneDisplay}</span>
                </a>
              </div>
            </Card3D>
          </StaggerItem3D>

          {/* Showroom Address Card */}
          <StaggerItem3D className="flex">
            <Card3D maxTilt={10} depth={16} glare={true} className="w-full flex">
              <div className="w-full bg-white p-8 rounded-2xl border border-beige/80 shadow-luxury flex flex-col justify-between text-center">
                <div>
                  <div className="w-14 h-14 rounded-2xl bg-cream flex items-center justify-center text-gold-dark mx-auto mb-5 border border-gold/30">
                    <MapPin className="w-7 h-7" />
                  </div>
                  <h3 className="font-serif text-xl font-bold text-charcoal mb-2">
                    Visit Us
                  </h3>
                  <p className="text-xs text-warmgray-dark leading-relaxed font-light mb-6">
                    {siteConfig.address.line1}, {siteConfig.address.landmark}, {siteConfig.address.city}
                  </p>
                </div>

                <a
                  href={siteConfig.directionsLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => trackEvent('contact_card_directions_click')}
                  className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-full border border-beige hover:border-gold bg-cream/30 text-charcoal hover:text-gold-dark font-medium text-xs uppercase tracking-wider transition-all"
                >
                  <Navigation className="w-4 h-4" />
                  <span>Get Directions</span>
                </a>
              </div>
            </Card3D>
          </StaggerItem3D>
        </Stagger3D>

        {/* Link to Dedicated Contact & Appointment Booking Page */}
        <div className="mt-12 text-center">
          <Link
            to="/contact"
            className="inline-flex items-center gap-2.5 px-8 py-4 rounded-full bg-emerald hover:bg-emerald-dark text-white font-semibold text-xs uppercase tracking-widest transition-all shadow-md hover:shadow-lg"
          >
            <Calendar className="w-4 h-4 text-gold" />
            <span>Book Showroom Appointment & Consultation</span>
            <ArrowRight className="w-4 h-4 text-gold-light" />
          </Link>
        </div>
      </div>
    </section>
  );
};

