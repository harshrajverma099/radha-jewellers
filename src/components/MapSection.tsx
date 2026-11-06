import React from 'react';
import { MapPin, Navigation, ExternalLink } from 'lucide-react';
import { SectionHeading } from './SectionHeading';
import { Scroll3DReveal } from './Motion3D';
import { siteConfig, trackEvent } from '../data/siteConfig';

export const MapSection: React.FC = () => {
  const embedUrl = siteConfig.embedMapUrl;

  return (
    <section id="location" className="py-20 bg-ivory dark:bg-emerald-noir relative transition-colors duration-300" aria-label="Showroom Location & Map">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <SectionHeading
          badge="Find Us Easily"
          title="Showroom Location"
          subtitle="Centrally located in Hata Bazar, opposite Ucchtar Prathmik Kanya Vidyalaya."
        />

        {/* Map Container & Address Card in 3D */}
        <Scroll3DReveal delay={0.15}>
          <div className="bg-white dark:bg-emerald-surface rounded-3xl overflow-hidden border border-beige/80 dark:border-white/10 shadow-luxury dark:shadow-darkcard flex flex-col lg:flex-row">
          {/* Map Frame - Interactive Google Map */}
          <div className="relative w-full lg:w-2/3 h-80 sm:h-96 lg:h-[460px] bg-cream dark:bg-emerald-midnight group">
            <iframe
              title="Radha Jewellers Showroom Google Map"
              src={embedUrl}
              className="w-full h-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
            {/* Quick Map Overlay Badge */}
            <div className="absolute top-4 left-4 bg-white/95 dark:bg-emerald-midnight/95 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-beige dark:border-white/10 shadow-sm flex items-center gap-2 text-xs font-semibold text-charcoal dark:text-ivory pointer-events-none">
              <span className="w-2 h-2 rounded-full bg-gold animate-pulse" />
              <span>Radha Jewellers • Hata Bazar</span>
            </div>

            {/* Floating Quick Action Button */}
            <a
              href={siteConfig.directionsLink}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackEvent('map_floating_directions_click')}
              className="absolute bottom-4 right-4 bg-black/85 hover:bg-gold text-white text-xs font-medium px-4 py-2 rounded-full border border-gold/40 shadow-md backdrop-blur-md flex items-center gap-1.5 transition-all transform hover:scale-105"
            >
              <Navigation className="w-3.5 h-3.5 text-gold-light" />
              <span>Open in Maps App</span>
            </a>
          </div>

          {/* Location Summary & Navigation CTAs */}
          <div className="w-full lg:w-1/3 p-8 sm:p-10 flex flex-col justify-between bg-white dark:bg-emerald-surface border-t lg:border-t-0 lg:border-l border-beige dark:border-white/10">
            <div className="space-y-6">
              <div>
                <span className="text-[11px] uppercase tracking-widestluxury text-gold-dark dark:text-gold-light font-semibold block mb-1">
                  EXACT SHOWROOM LOCATION
                </span>
                <h3 className="font-serif text-2xl font-bold text-charcoal dark:text-ivory mb-1">
                  Radha Jewellers
                </h3>
                <p className="text-xs text-warmgray dark:text-beige/70">Timeless Elegance Since 2003</p>
              </div>

              <div className="space-y-2 text-sm text-warmgray-dark dark:text-beige/85">
                <p className="font-semibold text-charcoal dark:text-ivory flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-gold flex-shrink-0" />
                  <span>{siteConfig.address.line1}</span>
                </p>
                <p className="pl-6">{siteConfig.address.landmark}</p>
                <p className="pl-6">
                  {siteConfig.address.city}, {siteConfig.address.district} - {siteConfig.address.pincode}
                </p>
                <p className="pl-6">
                  {siteConfig.address.state}, {siteConfig.address.country}
                </p>
              </div>
            </div>

            {/* Navigation Actions */}
            <div className="pt-8 space-y-3">
              <a
                href={siteConfig.directionsLink}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackEvent('map_directions_click')}
                className="w-full flex items-center justify-center gap-2 px-5 py-3.5 rounded-full bg-gold hover:bg-gold-dark text-white font-semibold text-xs uppercase tracking-wider transition-all shadow-sm"
              >
                <Navigation className="w-4 h-4" />
                <span>Get Directions in Google Maps</span>
              </a>

              <a
                href={siteConfig.googleMapsLink}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackEvent('map_open_app_click')}
                className="w-full flex items-center justify-center gap-2 px-5 py-3 rounded-full border border-beige dark:border-white/15 hover:border-gold dark:hover:border-gold-light bg-cream/30 dark:bg-emerald-midnight/60 text-charcoal dark:text-ivory hover:text-gold-dark dark:hover:text-gold-light font-medium text-xs uppercase tracking-wider transition-all"
              >
                <span>Open Radha Jewellers on Google Maps</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>

              <a
                href={siteConfig.shortMapsLink}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackEvent('map_shortlink_click')}
                className="w-full flex items-center justify-center gap-1.5 py-1.5 text-[11px] text-warmgray dark:text-beige/70 hover:text-gold-dark dark:hover:text-gold-light transition-colors text-center"
              >
                <span>Direct Google Maps Link</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>
        </div>
      </Scroll3DReveal>
    </div>
  </section>
  );
};

