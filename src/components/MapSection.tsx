import React from 'react';
import { MapPin, Navigation, ExternalLink } from 'lucide-react';
import { SectionHeading } from './SectionHeading';
import { Scroll3DReveal } from './Motion3D';
import { siteConfig, trackEvent } from '../data/siteConfig';

export const MapSection: React.FC = () => {
  const { latitude, longitude } = siteConfig.address;
  // OpenStreetMap embed based on verified coordinates (26.741685, 83.742696)
  // Ensures fast, zero-auth, zero-tracker responsive map rendering!
  const embedUrl = `https://www.openstreetmap.org/export/embed.html?bbox=${longitude - 0.015}%2C${latitude - 0.01}%2C${longitude + 0.015}%2C${latitude + 0.01}&layer=mapnik&marker=${latitude}%2C${longitude}`;

  return (
    <section id="location" className="py-20 bg-ivory dark:bg-emerald-noir relative transition-colors duration-300" aria-label="Showroom Location & Map">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <SectionHeading
          badge="Find Us Easily"
          title="Showroom Location"
          subtitle="Centrally located on Hata Main Road, opposite Ucchtar Prathmik Kanya Vidyalaya."
        />

        {/* Map Container & Address Card in 3D */}
        <Scroll3DReveal delay={0.15}>
          <div className="bg-white dark:bg-emerald-surface rounded-3xl overflow-hidden border border-beige/80 dark:border-white/10 shadow-luxury dark:shadow-darkcard flex flex-col lg:flex-row">
          {/* Map Frame */}
          <div className="relative w-full lg:w-2/3 h-80 sm:h-96 lg:h-[460px] bg-cream dark:bg-emerald-midnight">
            <iframe
              title="Radha Jewellers Showroom Map"
              src={embedUrl}
              className="w-full h-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
            {/* Quick Map Overlay Badge */}
            <div className="absolute top-4 left-4 bg-white/95 dark:bg-emerald-midnight/95 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-beige dark:border-white/10 shadow-sm flex items-center gap-2 text-xs font-semibold text-charcoal dark:text-ivory">
              <span className="w-2 h-2 rounded-full bg-gold" />
              <span>Radha Jewellers • Hata</span>
            </div>
          </div>

          {/* Location Summary & Navigation CTAs */}
          <div className="w-full lg:w-1/3 p-8 sm:p-10 flex flex-col justify-between bg-white dark:bg-emerald-surface border-t lg:border-t-0 lg:border-l border-beige dark:border-white/10">
            <div className="space-y-6">
              <div>
                <span className="text-[11px] uppercase tracking-widestluxury text-gold-dark dark:text-gold-light font-semibold block mb-1">
                  EXACT LOCATION
                </span>
                <h3 className="font-serif text-2xl font-bold text-charcoal dark:text-ivory mb-2">
                  Radha Jewellers
                </h3>
                <p className="text-xs text-warmgray dark:text-beige/70">Since 2003</p>
              </div>

              <div className="space-y-2 text-sm text-warmgray-dark dark:text-beige/85">
                <p className="font-semibold text-charcoal dark:text-ivory">{siteConfig.address.line1}</p>
                <p>{siteConfig.address.landmark}</p>
                <p>
                  {siteConfig.address.city}, {siteConfig.address.district}
                </p>
                <p>
                  {siteConfig.address.state}, {siteConfig.address.country}
                </p>
                <p className="text-xs text-gold-dark dark:text-gold-light font-mono pt-2">
                  Coords: {latitude.toFixed(6)}° N, {longitude.toFixed(6)}° E
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
                <span>Open in Google Maps App</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      </Scroll3DReveal>
    </div>
  </section>
  );
};

