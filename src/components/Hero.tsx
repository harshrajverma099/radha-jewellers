import React from 'react';
import { ArrowRight, MapPin, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Floating3D, Scroll3DReveal } from './Motion3D';
import { trackEvent } from '../data/siteConfig';

export const Hero: React.FC = () => {
  return (
    <section
      id="home"
      className="relative min-h-[92vh] lg:min-h-screen flex items-center justify-center bg-emerald-dark overflow-hidden pt-24 pb-16 lg:py-0"
      aria-label="Hero Section"
    >
      {/* Background Cinematic Image with Luxury Dark Emerald Gradient Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/hero/hero-jewellery.jpg"
          alt="Opulent 22k Indian Bridal Gold Jewellery by Radha Jewellers"
          className="w-full h-full object-cover object-center transform scale-105 transition-transform duration-1000 ease-out"
          loading="eager"
          fetchPriority="high"
        />
        {/* Multilayered radial and linear dark gradient for impeccable text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-dark/95 via-emerald-dark/80 to-emerald-dark/60 lg:to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-emerald-dark via-transparent to-black/40" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-transparent via-black/20 to-emerald-dark/90 pointer-events-none" />
      </div>

      {/* Decorative Gold Radial Glow */}
      <div className="absolute -top-40 -left-40 w-96 h-96 bg-gold/15 rounded-full blur-3xl pointer-events-none" />

      {/* Hero Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-12 lg:py-24">
        <div className="max-w-2xl lg:max-w-3xl">
          {/* 3D Floating Heritage Badge */}
          <Floating3D amplitude={6} duration={5} className="inline-block mb-6">
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-black/40 backdrop-blur-md border border-gold/40 shadow-luxury">
              <span className="w-2 h-2 rounded-full bg-gold animate-pulse" />
              <span className="text-xs sm:text-sm font-medium tracking-widestluxury uppercase text-gold-light">
                SINCE 2003 • HATA, KUSHINAGAR
              </span>
            </div>
          </Floating3D>

          {/* Brand Signature */}
          <div className="mb-3">
            <h2 className="text-sm sm:text-base uppercase tracking-ultrawide font-medium text-beige/80">
              RADHA JEWELLERS
            </h2>
          </div>

          {/* Primary Headline with 3D Depth */}
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-ivory tracking-tight leading-[1.08] mb-6 drop-shadow-sm">
            An Eternal Legacy of <span className="text-gold-gradient italic font-normal">Elegance.</span>
          </h1>

          {/* Supporting Copy */}
          <p className="text-base sm:text-lg md:text-xl text-beige/90 leading-relaxed font-light mb-8 max-w-xl">
            Discover timeless jewellery inspired by Indian tradition, thoughtful craftsmanship and the beauty of life’s most cherished moments.
          </p>

          {/* Primary & Secondary Call to Actions */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 mb-10">
            <Link
              to="/collections"
              onClick={() => trackEvent('hero_cta_collections')}
              className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 text-xs sm:text-sm font-semibold tracking-wider uppercase rounded-full bg-gold hover:bg-gold-dark text-white shadow-goldglow transition-all transform hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-gold focus:ring-offset-2 focus:ring-offset-emerald-dark"
            >
              <span>Explore Collections</span>
              <ArrowRight className="w-4 h-4" />
            </Link>

            <Link
              to="/3d-experience"
              onClick={() => trackEvent('hero_cta_3d')}
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-xs sm:text-sm font-medium tracking-wider uppercase rounded-full bg-black/40 hover:bg-black/60 backdrop-blur-md text-gold-light border border-gold/40 hover:border-gold transition-all focus:outline-none focus:ring-2 focus:ring-gold"
            >
              <Sparkles className="w-4 h-4 text-gold" />
              <span>3D Jewellery View</span>
            </Link>

            <Link
              to="/showroom"
              onClick={() => trackEvent('hero_cta_showroom')}
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-xs sm:text-sm font-medium tracking-wider uppercase rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-md text-ivory border border-white/20 hover:border-gold-light transition-all focus:outline-none focus:ring-2 focus:ring-white"
            >
              <MapPin className="w-4 h-4 text-gold-light" />
              <span>Visit Showroom</span>
            </Link>
          </div>

          {/* Subtle Heritage & Trust Bar */}
          <div className="pt-6 border-t border-white/15 flex flex-wrap items-center gap-y-3 gap-x-8 text-xs text-beige/80">
            <div className="flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-gold" />
              <span>Celebrating timeless beauty since 2003</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-gold/60" />
              <span>Showroom at Hata Main Road, Kushinagar</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom section gradient blend */}
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-ivory to-transparent pointer-events-none" />
    </section>
  );
};
