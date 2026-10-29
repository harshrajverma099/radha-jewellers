import React from 'react';
import { Sparkles, MessageCircle, Phone, MapPin, Tag, CheckCircle2 } from 'lucide-react';
import { Layout } from '../components/Layout';
import { getFeaturedPromotion } from '../data/offers';
import { siteConfig, getWhatsAppUrl, trackEvent } from '../data/siteConfig';

export const OffersPage: React.FC = () => {
  const promo = getFeaturedPromotion();

  return (
    <Layout>
      <div className="pt-20 sm:pt-24 pb-20 bg-ivory text-charcoal">
        {/* Editorial Header */}
      <section className="relative py-16 bg-emerald-dark text-ivory overflow-hidden">
        <div className="absolute inset-0 opacity-15 bg-[radial-gradient(#C6A15B_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-gold/40 text-gold-light text-xs uppercase tracking-widest mb-4 bg-black/40 backdrop-blur-md">
            <Sparkles className="w-3.5 h-3.5 text-gold" />
            <span>SEASONAL CELEBRATIONS</span>
          </div>

          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight mb-4">
            Festive <span className="text-gold-gradient italic font-normal">Privileges.</span>
          </h1>

          <p className="text-base sm:text-lg text-beige/90 max-w-2xl mx-auto font-light leading-relaxed">
            Celebrate life’s most luminous festivities with exclusive showroom privileges and timeless gold artistry.
          </p>
        </div>
      </section>

      {/* Main Campaign Section */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {promo ? (
          <div className="bg-emerald rounded-3xl overflow-hidden border-2 border-gold/40 shadow-luxurydark text-ivory p-8 sm:p-12 lg:p-16 relative">
            <div className="absolute -top-32 -right-32 w-80 h-80 bg-gold/20 rounded-full blur-3xl pointer-events-none" />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
              {/* Banner Image */}
              <div className="lg:col-span-6">
                <div className="rounded-2xl overflow-hidden border border-gold/40 shadow-2xl bg-emerald-dark">
                  <img
                    src={promo.image}
                    alt={`${promo.title} - ${promo.discountText}`}
                    className="w-full h-auto object-cover"
                  />
                </div>
              </div>

              {/* Offer Details */}
              <div className="lg:col-span-6 space-y-6">
                <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs uppercase tracking-widest border border-gold/40 text-gold-light bg-black/30">
                  <Tag className="w-3.5 h-3.5 text-gold" />
                  <span>SPECIAL SHOWROOM CAMPAIGN</span>
                </div>

                <div>
                  <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold mb-2">
                    {promo.title}
                  </h2>
                  {promo.subtitle && (
                    <p className="font-serif text-xl text-gold-light italic">
                      “{promo.subtitle}”
                    </p>
                  )}
                </div>

                {/* Highlight Box */}
                <div className="p-6 rounded-2xl bg-emerald-dark/90 border border-gold/60">
                  <span className="text-xs uppercase tracking-widest text-beige/80 block mb-1">
                    EXCLUSIVE OFFER
                  </span>
                  <p className="font-serif text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gold-light">
                    {promo.discountText}
                  </p>
                </div>

                <p className="text-base text-beige/90 leading-relaxed font-light">
                  {promo.description}
                </p>

                {promo.terms && (
                  <p className="text-xs text-beige/70 italic border-l-2 border-gold/50 pl-3">
                    * {promo.terms}
                  </p>
                )}

                {/* Direct Action Buttons */}
                <div className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                  <a
                    href={getWhatsAppUrl(promo.whatsappMessage)}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => trackEvent('offers_page_whatsapp', { promo: promo.id })}
                    className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-gold hover:bg-gold-dark text-white font-semibold text-xs uppercase tracking-wider transition-all shadow-goldglow"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>Enquire on WhatsApp</span>
                  </a>

                  <a
                    href={siteConfig.phoneLink}
                    className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-full border border-white/20 hover:border-gold-light text-ivory hover:text-gold-light bg-white/5 font-medium text-xs uppercase tracking-wider transition-all"
                  >
                    <Phone className="w-3.5 h-3.5 text-gold" />
                    <span>Call Showroom</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="text-center py-20 bg-white rounded-3xl border border-beige p-8">
            <h3 className="font-serif text-2xl font-bold mb-2">No Active Promotion at This Time</h3>
            <p className="text-sm text-warmgray">Please check back soon for upcoming festive privileges.</p>
          </div>
        )}
      </section>

      {/* Showroom Visit Invitation */}
      <section className="py-12 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="p-8 sm:p-10 rounded-3xl bg-white border border-beige shadow-luxury space-y-4">
          <div className="w-12 h-12 rounded-full bg-cream mx-auto flex items-center justify-center text-gold-dark">
            <MapPin className="w-6 h-6" />
          </div>
          <h3 className="font-serif text-2xl font-bold text-charcoal">
            Visit Our Showroom in Hata
          </h3>
          <p className="text-sm text-warmgray-dark max-w-xl mx-auto font-light leading-relaxed">
            Experience the festive collections in person at {siteConfig.address.fullFormatted}.
          </p>
          <div className="pt-2">
            <a
              href={siteConfig.directionsLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-emerald text-ivory hover:bg-emerald-dark font-medium text-xs uppercase tracking-wider transition-all"
            >
              <span>Get Directions on Google Maps</span>
            </a>
          </div>
        </div>
      </section>
      </div>
    </Layout>
  );
};
