import React, { useState } from 'react';
import { 
  Sparkles, 
  MessageCircle, 
  Phone, 
  MapPin, 
  Tag, 
  ArrowRight, 
  Copy, 
  Check, 
  Gift, 
  ShieldCheck, 
  Award,
  Gem,
  CheckCircle2,
  Clock
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { Card3D } from './Card3D';
import { Scroll3DReveal } from './Motion3D';
import { activePromotions } from '../data/offers';
import { siteConfig, getWhatsAppUrl, trackEvent } from '../data/siteConfig';

export const Offers: React.FC = () => {
  const [selectedOfferIndex, setSelectedOfferIndex] = useState(0);
  const [copiedCode, setCopiedCode] = useState<string | null>(null);

  const currentPromo = activePromotions[selectedOfferIndex] || activePromotions[0];

  if (!currentPromo) {
    return null;
  }

  const handleCopyCode = (code: string) => {
    navigator.clipboard.writeText(code);
    setCopiedCode(code);
    setTimeout(() => {
      setCopiedCode(null);
    }, 2500);
  };

  return (
    <section
      id="offers"
      className="py-24 sm:py-32 bg-ivory dark:bg-emerald-noir relative overflow-hidden text-charcoal dark:text-ivory transition-colors duration-300"
      aria-label="Festive Promotional Offers"
    >
      {/* Decorative Gold Festive Radiant Background Glows */}
      <div className="absolute top-1/4 -right-20 w-[550px] h-[550px] bg-gold/15 dark:bg-gold/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 -left-20 w-[600px] h-[600px] bg-emerald/15 dark:bg-gold/5 rounded-full blur-3xl pointer-events-none" />
      
      {/* Traditional Auspicious Pattern Grid */}
      <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.06] pointer-events-none bg-[radial-gradient(#C6A15B_1.5px,transparent_1.5px)] [background-size:28px_28px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Editorial Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cream/80 dark:bg-emerald-surface/70 border border-gold/40 text-gold-dark dark:text-gold-light text-xs uppercase tracking-widest font-semibold mb-4 shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-gold animate-pulse" />
            <span>FESTIVE CELEBRATIONS & OFFERS</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-5xl md:text-6xl font-normal tracking-tight text-charcoal dark:text-ivory leading-[1.15] mb-5">
            Festive Privileges & <span className="text-gold-gradient italic font-normal">Royal Rewards.</span>
          </h2>

          <p className="text-sm sm:text-base md:text-lg text-warmgray-dark dark:text-beige/85 font-light leading-relaxed max-w-2xl mx-auto">
            Celebrate auspicious beginnings with extraordinary festive savings on hallmarked 22K gold, Kundan, and heirloom bridal jewellery at our Hata showroom.
          </p>

          {/* Luxury Accent Divider */}
          <div className="flex items-center justify-center gap-3 mt-6">
            <div className="h-px w-16 bg-gold/40 dark:bg-gold/30" />
            <span className="w-1.5 h-1.5 rotate-45 border border-gold bg-gold/30" />
            <div className="h-px w-16 bg-gold/40 dark:bg-gold/30" />
          </div>
        </div>

        {/* Interactive Festive Offer Switcher Tabs */}
        <div className="flex items-center justify-center gap-2 sm:gap-4 mb-10 overflow-x-auto pb-2 max-w-full">
          {activePromotions.map((promo, idx) => (
            <button
              key={promo.id}
              onClick={() => {
                setSelectedOfferIndex(idx);
                trackEvent('offer_tab_click', { offer: promo.title });
              }}
              className={`px-4 sm:px-6 py-2.5 sm:py-3 rounded-full text-xs sm:text-sm font-medium transition-all duration-300 flex items-center gap-2 whitespace-nowrap ${
                selectedOfferIndex === idx
                  ? 'bg-gold text-white shadow-goldglow scale-102 font-semibold'
                  : 'bg-cream/60 dark:bg-emerald-surface/50 text-charcoal/80 dark:text-ivory/80 hover:text-gold-dark dark:hover:text-gold-light border border-gold/25 hover:border-gold/50'
              }`}
            >
              {idx === 0 && <Sparkles className="w-4 h-4 text-amber-200" />}
              {idx === 1 && <Gift className="w-4 h-4 text-amber-200" />}
              {idx === 2 && <ShieldCheck className="w-4 h-4 text-amber-200" />}
              <span>{promo.title}</span>
            </button>
          ))}
        </div>

        {/* The VIP Festive Privilege Vault Card */}
        <Card3D maxTilt={4} depth={18} glare={true} className="w-full">
          <div className="relative rounded-3xl overflow-hidden border-2 border-gold/50 dark:border-gold/40 shadow-2xl bg-gradient-to-br from-cream via-ivory to-cream dark:from-emerald-dark dark:via-emerald-noir dark:to-emerald-dark p-6 sm:p-10 lg:p-14">
            
            {/* Ornate Gold Filigree Corner Ornaments */}
            <div className="absolute top-0 left-0 w-16 h-16 border-t-2 border-l-2 border-gold/60 rounded-tl-3xl pointer-events-none" />
            <div className="absolute top-0 right-0 w-16 h-16 border-t-2 border-r-2 border-gold/60 rounded-tr-3xl pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-16 h-16 border-b-2 border-l-2 border-gold/60 rounded-bl-3xl pointer-events-none" />
            <div className="absolute bottom-0 right-0 w-16 h-16 border-b-2 border-r-2 border-gold/60 rounded-br-3xl pointer-events-none" />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center relative z-10">
              
              {/* Left Column: Visual Banner with Festive Frame & Savings Pill */}
              <div className="lg:col-span-5 relative">
                <div className="relative rounded-2xl overflow-hidden border border-gold/40 shadow-luxurydark group bg-black">
                  <img
                    src={currentPromo.image}
                    alt={`${currentPromo.title} - ${currentPromo.discountText}`}
                    className="w-full h-auto object-cover transform transition-transform duration-700 group-hover:scale-105"
                  />
                  
                  {/* Floating Festive Badge */}
                  <div className="absolute top-4 left-4 z-10">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-semibold tracking-wider uppercase bg-gold text-white shadow-goldglow">
                      <Sparkles className="w-3.5 h-3.5 text-white animate-pulse" />
                      <span>{currentPromo.badge || 'Festive Special'}</span>
                    </span>
                  </div>

                  {/* Shading overlay for depth */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
                  
                  {/* Bottom Image Sub-label */}
                  <div className="absolute bottom-3 left-4 right-4 pointer-events-none flex items-center justify-between">
                    <span className="text-[10px] tracking-widest text-gold-light uppercase font-medium">
                      RADHA JEWELLERS • HATA
                    </span>
                    <span className="text-[10px] text-ivory/80">
                      HALLMARK 22K GOLD
                    </span>
                  </div>
                </div>

                {/* Savings Callout Pill */}
                <div className="mt-4 p-3.5 rounded-xl bg-gold/10 dark:bg-gold/15 border border-gold/40 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Award className="w-4 h-4 text-gold" />
                    <span className="text-xs font-semibold text-gold-dark dark:text-gold-light uppercase tracking-wider">
                      Festive Value Guarantee
                    </span>
                  </div>
                  <span className="text-xs font-bold text-charcoal dark:text-ivory">
                    Save up to ₹15,000+
                  </span>
                </div>
              </div>

              {/* Right Column: Festive Details, Highlight Box & Interactive Voucher */}
              <div className="lg:col-span-7 flex flex-col justify-center space-y-6">
                
                {/* Festive Category & Subtitle */}
                <div>
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-[11px] uppercase tracking-widest font-semibold border border-gold/40 text-gold-dark dark:text-gold-light bg-gold/10 dark:bg-emerald-surface/60 mb-3">
                    <Clock className="w-3 h-3 text-gold" />
                    <span>LIMITED TIME SHOWROOM PRIVILEGE</span>
                  </div>

                  <h3 className="font-serif text-2xl sm:text-4xl font-bold text-charcoal dark:text-ivory tracking-tight mb-2">
                    {currentPromo.title}
                  </h3>

                  {currentPromo.subtitle && (
                    <p className="font-serif text-base sm:text-lg text-gold-dark dark:text-gold-light italic font-normal">
                      “{currentPromo.subtitle}”
                    </p>
                  )}
                </div>

                {/* Golden Discount Highlight Banner */}
                <div className="relative p-6 rounded-2xl bg-gradient-to-r from-emerald-dark/95 via-emerald-noir/90 to-emerald-dark/95 border-2 border-gold/60 shadow-goldglow text-ivory overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gold/20 rounded-full blur-2xl pointer-events-none" />
                  
                  <div className="relative z-10 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <div>
                      <span className="text-[11px] uppercase tracking-widest text-gold-light font-bold block mb-1">
                        EXCLUSIVE FESTIVE DISCOUNT
                      </span>
                      <p className="font-serif text-2xl sm:text-3xl md:text-4xl font-extrabold text-gold-gradient tracking-tight leading-none drop-shadow-md">
                        {currentPromo.discountText}
                      </p>
                    </div>

                    {/* Interactive Voucher Code Pill */}
                    {currentPromo.voucherCode && (
                      <div className="flex-shrink-0 bg-black/60 border border-gold/50 rounded-xl p-2.5 text-center">
                        <span className="text-[9px] uppercase tracking-widest text-beige/80 block mb-1">
                          VOUCHER CODE
                        </span>
                        <div className="flex items-center gap-2">
                          <code className="text-sm font-mono font-bold text-gold-light tracking-wider">
                            {currentPromo.voucherCode}
                          </code>
                          <button
                            onClick={() => handleCopyCode(currentPromo.voucherCode!)}
                            className="p-1.5 rounded-lg bg-gold/20 hover:bg-gold/30 text-gold-light transition-colors"
                            title="Copy Voucher Code"
                          >
                            {copiedCode === currentPromo.voucherCode ? (
                              <Check className="w-3.5 h-3.5 text-emerald-300" />
                            ) : (
                              <Copy className="w-3.5 h-3.5 text-gold-light" />
                            )}
                          </button>
                        </div>
                        {copiedCode === currentPromo.voucherCode && (
                          <span className="text-[9px] text-emerald-300 font-medium block mt-0.5">
                            Code Copied!
                          </span>
                        )}
                      </div>
                    )}
                  </div>
                </div>

                {/* Offer Description */}
                <p className="text-sm sm:text-base text-warmgray-dark dark:text-beige/90 leading-relaxed font-light">
                  {currentPromo.description}
                </p>

                {/* Included Perks Grid */}
                {currentPromo.perks && currentPromo.perks.length > 0 && (
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-1">
                    {currentPromo.perks.map((perk, pIdx) => (
                      <div 
                        key={pIdx}
                        className="flex items-center gap-2 p-2 rounded-lg bg-cream/70 dark:bg-emerald-surface/50 border border-gold/20 text-xs text-charcoal/90 dark:text-ivory/90"
                      >
                        <CheckCircle2 className="w-3.5 h-3.5 text-gold flex-shrink-0" />
                        <span className="font-medium">{perk}</span>
                      </div>
                    ))}
                  </div>
                )}

                {/* Terms Disclaimer */}
                {currentPromo.terms && (
                  <p className="text-xs text-warmgray dark:text-beige/70 italic border-l-2 border-gold/40 pl-3">
                    * {currentPromo.terms}
                  </p>
                )}

                {/* Primary & Secondary Action CTAs */}
                <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                  <a
                    href={getWhatsAppUrl(currentPromo.whatsappMessage)}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => trackEvent('promo_whatsapp_click', { promo: currentPromo.id })}
                    className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-gold hover:bg-gold-dark text-white font-semibold text-xs sm:text-sm uppercase tracking-wider shadow-goldglow transition-all transform hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-gold"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>Claim Offer via WhatsApp</span>
                  </a>

                  <a
                    href={siteConfig.phoneLink}
                    onClick={() => trackEvent('promo_call_click', { promo: currentPromo.id })}
                    className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-full border border-gold/40 hover:border-gold text-charcoal dark:text-ivory hover:text-gold-dark dark:hover:text-gold-light bg-cream/80 dark:bg-emerald-surface/60 font-medium text-xs sm:text-sm uppercase tracking-wider transition-all"
                  >
                    <Phone className="w-4 h-4 text-gold" />
                    <span>Call Showroom</span>
                  </a>

                  <Link
                    to="/showroom"
                    onClick={() => trackEvent('promo_showroom_click', { promo: currentPromo.id })}
                    className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-full border border-gold/40 hover:border-gold text-gold-dark dark:text-gold-light hover:text-gold bg-transparent font-medium text-xs sm:text-sm uppercase tracking-wider transition-all"
                  >
                    <MapPin className="w-4 h-4 text-gold" />
                    <span>Visit in Hata</span>
                  </Link>
                </div>

              </div>
            </div>
          </div>
        </Card3D>

        {/* Showroom Trust Guarantees Strip */}
        <div className="mt-12 sm:mt-16 grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          <div className="p-4 rounded-2xl bg-cream/60 dark:bg-emerald-surface/40 border border-gold/30 text-center flex flex-col items-center">
            <Award className="w-6 h-6 text-gold mb-2" />
            <h4 className="font-serif text-sm sm:text-base font-bold text-charcoal dark:text-ivory mb-0.5">
              100% BIS Hallmarked
            </h4>
            <p className="text-[11px] text-warmgray-dark dark:text-beige/75 font-light">
              Every gold creation certified by Govt. of India standard
            </p>
          </div>

          <div className="p-4 rounded-2xl bg-cream/60 dark:bg-emerald-surface/40 border border-gold/30 text-center flex flex-col items-center">
            <Gem className="w-6 h-6 text-gold mb-2" />
            <h4 className="font-serif text-sm sm:text-base font-bold text-charcoal dark:text-ivory mb-0.5">
              Certified Gemstones
            </h4>
            <p className="text-[11px] text-warmgray-dark dark:text-beige/75 font-light">
              IGI & GIA laboratory verified natural diamonds & Polki
            </p>
          </div>

          <div className="p-4 rounded-2xl bg-cream/60 dark:bg-emerald-surface/40 border border-gold/30 text-center flex flex-col items-center">
            <ShieldCheck className="w-6 h-6 text-gold mb-2" />
            <h4 className="font-serif text-sm sm:text-base font-bold text-charcoal dark:text-ivory mb-0.5">
              Zero Melting Deductions
            </h4>
            <p className="text-[11px] text-warmgray-dark dark:text-beige/75 font-light">
              100% full market value on your old gold exchange
            </p>
          </div>

          <div className="p-4 rounded-2xl bg-cream/60 dark:bg-emerald-surface/40 border border-gold/30 text-center flex flex-col items-center">
            <Sparkles className="w-6 h-6 text-gold mb-2" />
            <h4 className="font-serif text-sm sm:text-base font-bold text-charcoal dark:text-ivory mb-0.5">
              Over 20 Years of Trust
            </h4>
            <p className="text-[11px] text-warmgray-dark dark:text-beige/75 font-light">
              Serving Kushinagar with unwavering purity since 2003
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};
