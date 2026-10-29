import React from 'react';
import { Instagram, Sparkles, ExternalLink } from 'lucide-react';
import { SectionHeading } from './SectionHeading';
import { Card3D } from './Card3D';
import { Stagger3D, StaggerItem3D } from './Motion3D';
import { galleryData } from '../data/gallery';
import { siteConfig, trackEvent } from '../data/siteConfig';

export const InstagramGallery: React.FC = () => {
  const hasInstagram = Boolean(siteConfig.instagramUrl && siteConfig.instagramUrl.trim().length > 0);

  return (
    <section id="gallery" className="py-20 md:py-28 bg-cream/30 relative" aria-label="Social & Lifestyle Gallery">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <SectionHeading
          badge="Social Editorial"
          title="A Glimpse of Our World"
          subtitle="Capturing the intimate beauty of gold, bridal jewellery, and memories crafted at Radha Jewellers."
        />

        {/* Varied Proportions Gallery Grid with Staggered 3D Depth */}
        <Stagger3D staggerDelay={0.07} className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-6">
          {galleryData.map((item) => (
            <StaggerItem3D key={item.id} className="flex">
              <Card3D maxTilt={12} depth={18} glare={true} className="w-full h-64 sm:h-72">
                <div className="w-full h-full group relative rounded-2xl overflow-hidden bg-charcoal border border-beige/80 shadow-luxury cursor-pointer">
                  <img
                    src={item.image}
                    alt={item.caption}
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-115"
                    loading="lazy"
                  />
                  {/* Dark Hover Overlay with Tag & Caption */}
                  <div className="absolute inset-0 bg-gradient-to-t from-emerald-dark/95 via-emerald-dark/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-4 flex flex-col justify-end text-ivory">
                    <span className="text-[10px] uppercase tracking-widest text-gold-light font-semibold mb-1">
                      {item.tag}
                    </span>
                    <p className="text-xs font-serif leading-snug line-clamp-2">
                      {item.caption}
                    </p>
                    <div className="mt-2 flex items-center gap-1 text-[10px] text-beige/80">
                      <Sparkles className="w-3 h-3 text-gold" />
                      <span>Radha Jewellers</span>
                    </div>
                  </div>
                </div>
              </Card3D>
            </StaggerItem3D>
          ))}
        </Stagger3D>

        {/* Optional Instagram Link (only rendered if verified and configured) */}
        {hasInstagram && (
          <div className="mt-12 text-center">
            <a
              href={siteConfig.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackEvent('gallery_instagram_click')}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-beige hover:border-gold bg-white text-charcoal hover:text-gold-dark font-medium text-xs uppercase tracking-wider transition-all shadow-sm"
            >
              <Instagram className="w-4 h-4 text-gold" />
              <span>Follow @radhajewellers on Instagram</span>
              <ExternalLink className="w-3.5 h-3.5 text-warmgray" />
            </a>
          </div>
        )}
      </div>
    </section>
  );
};
