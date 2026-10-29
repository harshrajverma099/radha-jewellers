import React from 'react';
import { MessageCircle, Sparkles } from 'lucide-react';
import { SectionHeading } from './SectionHeading';
import { Card3D } from './Card3D';
import { Stagger3D, StaggerItem3D } from './Motion3D';
import { featuredJewelleryData } from '../data/featured';
import { getWhatsAppUrl, trackEvent } from '../data/siteConfig';

export const FeaturedJewellery: React.FC = () => {
  return (
    <section id="featured" className="py-20 md:py-28 bg-ivory relative" aria-label="Featured Jewellery Showcase">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <SectionHeading
          badge="Editorial Showcase"
          title="Selected for Their Timeless Beauty"
          subtitle="A handpicked presentation of emblematic ornaments that embody Indian elegance and enduring aesthetic grace."
        />

        {/* Editorial 3D Cascade Grid */}
        <Stagger3D staggerDelay={0.12} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredJewelleryData.map((item) => (
            <StaggerItem3D key={item.id} className="flex">
              <Card3D maxTilt={8} depth={20} glare={true} className="w-full flex">
                <div className="w-full group bg-white rounded-2xl overflow-hidden border border-beige/80 shadow-luxury flex flex-col justify-between">
                  {/* Image Frame */}
                  <div className="relative h-72 sm:h-80 overflow-hidden bg-charcoal">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />

                    {/* Category Badge */}
                    <div className="absolute top-4 left-4">
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-semibold tracking-wider uppercase bg-white/90 text-charcoal shadow-sm">
                        <Sparkles className="w-3 h-3 text-gold" />
                        <span>{item.category}</span>
                      </span>
                    </div>
                  </div>

                  {/* Editorial Details */}
                  <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                    <div>
                      <h3 className="font-serif text-xl sm:text-2xl font-bold text-charcoal mb-2 leading-snug">
                        {item.title}
                      </h3>
                      <p className="text-sm text-warmgray-dark leading-relaxed font-light">
                        {item.description}
                      </p>
                    </div>

                    {/* WhatsApp Enquiry Button */}
                    <div className="pt-4 border-t border-beige/60">
                      <a
                        href={getWhatsAppUrl(item.whatsappMessage)}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={() => trackEvent('featured_whatsapp_click', { item: item.title })}
                        className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-full border border-beige hover:border-gold bg-cream/30 text-charcoal hover:text-gold-dark font-medium text-xs uppercase tracking-wider transition-all"
                      >
                        <MessageCircle className="w-3.5 h-3.5 text-gold-dark" />
                        <span>Enquire on WhatsApp</span>
                      </a>
                    </div>
                  </div>
                </div>
              </Card3D>
            </StaggerItem3D>
          ))}
        </Stagger3D>
      </div>
    </section>
  );
};
