import React from 'react';
import { Sparkles, MessageCircle, Phone, MapPin, Tag, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Card3D } from './Card3D';
import { Scroll3DReveal } from './Motion3D';
import { getFeaturedPromotion } from '../data/offers';
import { siteConfig, getWhatsAppUrl, trackEvent } from '../data/siteConfig';

export const Offers: React.FC = () => {
  const promo = getFeaturedPromotion();

  // If no active promotion is enabled/valid, the section safely returns null
  if (!promo) {
    return null;
  }

  return (
    <section
      id="offers"
      className="py-20 md:py-28 bg-emerald relative overflow-hidden text-ivory"
      aria-label="Festive Promotional Offer"
    >
      {/* Decorative festive ambient background glow */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gold/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gold-dark/20 rounded-full blur-3xl pointer-events-none" />

      {/* Subtle traditional lattice watermark */}
      <div className="absolute inset-0 opacity-5 pointer-events-none bg-[radial-gradient(#C6A15B_1px,transparent_1px)] [background-size:24px_24px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Promotion Banner & Imagery with 3D Tilt */}
          <div className="lg:col-span-6 relative">
            <Scroll3DReveal direction="right" delay={0.1}>
              <Card3D maxTilt={6} depth={20} glare={true}>
                <div className="relative rounded-2xl overflow-hidden border-2 border-gold/40 shadow-luxurydark bg-emerald-dark p-2">
                  <img
                    src={promo.image}
                    alt={`${promo.title} - ${promo.discountText}`}
                    className="w-full h-auto object-cover rounded-xl shadow-inner transform transition-transform duration-500 hover:scale-102"
                    loading="lazy"
                  />
                  <div className="absolute top-6 left-6">
                    <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-semibold tracking-wider uppercase bg-gold text-white shadow-md">
                      <Sparkles className="w-3.5 h-3.5" />
                      <span>{promo.badge || 'Seasonal Special'}</span>
                    </span>
                  </div>
                </div>
              </Card3D>
            </Scroll3DReveal>

            {/* Subtle decorative gold corner flourish */}
            <div className="absolute -bottom-4 -right-4 w-28 h-28 border-r-2 border-b-2 border-gold/40 rounded-br-2xl pointer-events-none hidden sm:block" />
          </div>

          {/* Right Column: Festive Copy & Call to Actions */}
          <div className="lg:col-span-6 space-y-6">
            <Scroll3DReveal direction="left" delay={0.2}>
              {/* Festival Badge */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs uppercase tracking-widestluxury font-medium border border-gold/50 text-gold-light bg-emerald-dark/60 mb-4">
                <Tag className="w-3.5 h-3.5 text-gold" />
                <span>LIMITED SEASONAL PROMOTION</span>
              </div>

              {/* Campaign Title */}
              <div className="mb-4">
                <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-ivory mb-2">
                  {promo.title}
                </h2>
                {promo.subtitle && (
                  <p className="font-serif text-lg sm:text-xl text-gold-light italic">
                    “{promo.subtitle}”
                  </p>
                )}
              </div>

              {/* Highlighted Discount Card in 3D */}
              <Card3D maxTilt={5} depth={12} glare={true} className="mb-6">
                <div className="p-6 rounded-2xl bg-emerald-dark/80 border border-gold/50 shadow-luxury">
                  <p className="text-xs uppercase tracking-widest text-beige/80 font-medium mb-1">
                    FESTIVE PRIVILEGE
                  </p>
                  <p className="font-serif text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gold-light tracking-tight leading-tight">
                    {promo.discountText}
                  </p>
                </div>
              </Card3D>

              {/* Supporting Copy */}
              <p className="text-base text-beige/90 leading-relaxed font-light mb-4">
                {promo.description}
              </p>

              {/* Configurable Terms & Conditions (if supplied) */}
              {promo.terms && (
                <p className="text-xs text-beige/70 italic border-l-2 border-gold/40 pl-3 mb-6">
                  * {promo.terms}
                </p>
              )}
            </Scroll3DReveal>

            {/* 3 Prominent CTAs */}
            <div className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5">
              <a
                href={getWhatsAppUrl(promo.whatsappMessage)}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackEvent('promo_whatsapp_click', { promo: promo.id })}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-gold hover:bg-gold-dark text-white font-semibold text-xs uppercase tracking-wider shadow-goldglow transition-all transform hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-gold"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Enquire on WhatsApp</span>
              </a>

              <a
                href={siteConfig.phoneLink}
                onClick={() => trackEvent('promo_call_click', { promo: promo.id })}
                className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-full border border-white/20 hover:border-gold-light text-ivory hover:text-gold-light bg-white/5 font-medium text-xs uppercase tracking-wider transition-all"
              >
                <Phone className="w-3.5 h-3.5 text-gold" />
                <span>Call Now</span>
              </a>

              <Link
                to="/offers"
                onClick={() => trackEvent('promo_view_full_page_click', { promo: promo.id })}
                className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-full border border-gold/40 hover:border-gold text-gold-light bg-black/30 font-medium text-xs uppercase tracking-wider transition-all"
              >
                <span>Offer Terms & Details</span>
                <ArrowRight className="w-3.5 h-3.5 text-gold" />
              </Link>

              <Link
                to="/showroom"
                onClick={() => trackEvent('promo_showroom_click', { promo: promo.id })}
                className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-full border border-white/20 hover:border-gold-light text-ivory hover:text-gold-light bg-white/5 font-medium text-xs uppercase tracking-wider transition-all"
              >
                <MapPin className="w-3.5 h-3.5 text-gold" />
                <span>Visit Showroom</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

