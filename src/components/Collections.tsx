import React, { useState, useEffect } from 'react';
import { ArrowUpRight, MessageCircle, X, Sparkles, CheckCircle2, Box, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { SectionHeading } from './SectionHeading';
import { Card3D } from './Card3D';
import { Stagger3D, StaggerItem3D, Scroll3DReveal } from './Motion3D';
import { collectionsData, CollectionItem } from '../data/collections';
import { models3dData } from '../data/models3d';
import { getWhatsAppUrl, trackEvent } from '../data/siteConfig';

export const Collections: React.FC = () => {
  const [selectedCollection, setSelectedCollection] = useState<CollectionItem | null>(null);
  const [activeFilter, setActiveFilter] = useState<string>('all');

  // Handle ESC key for modal
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && selectedCollection) {
        setSelectedCollection(null);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedCollection]);

  // Lock body scroll when modal open
  useEffect(() => {
    if (selectedCollection) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [selectedCollection]);

  const filterOptions = [
    { label: 'All Collections', value: 'all' },
    { label: 'Bridal & Heritage', value: 'bridal' },
    { label: 'Gold & Diamond', value: 'precious' },
    { label: 'Daily & Modern', value: 'daily' },
  ];

  const filteredItems = collectionsData.filter((item) => {
    if (activeFilter === 'all') return true;
    if (activeFilter === 'bridal') {
      return ['bridal-jewellery', 'traditional-jewellery', 'necklaces', 'custom-designs'].includes(item.id);
    }
    if (activeFilter === 'precious') {
      return ['gold-jewellery', 'diamond-jewellery', 'rings', 'bangles'].includes(item.id);
    }
    if (activeFilter === 'daily') {
      return ['daily-wear', 'chains', 'earrings', 'silver-jewellery'].includes(item.id);
    }
    return true;
  });

  return (
    <section id="collections" className="py-20 md:py-28 bg-cream/40 dark:bg-emerald-noir/40 relative transition-colors duration-300" aria-label="Our Collections">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <SectionHeading
          badge="Curated Catalog"
          title="Discover Our Collections"
          subtitle="Explore jewellery styles for cherished traditions, unforgettable celebrations and the beauty of everyday life."
        />

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {filterOptions.map((filter) => (
            <button
              key={filter.value}
              onClick={() => setActiveFilter(filter.value)}
              className={`px-5 py-2 text-xs sm:text-sm font-medium rounded-full transition-all focus:outline-none focus:ring-2 focus:ring-gold ${
                activeFilter === filter.value
                  ? 'bg-emerald dark:bg-gold text-ivory dark:text-charcoal shadow-sm'
                  : 'bg-white dark:bg-emerald-surface text-charcoal dark:text-ivory border border-beige dark:border-white/10 hover:border-gold hover:text-gold-dark dark:hover:text-gold-light'
              }`}
            >
              {filter.label}
            </button>
          ))}
        </div>

        {/* Hybrid Editorial Grid with Staggered 3D Cascade & Tilt */}
        <Stagger3D staggerDelay={0.08} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-6 md:gap-8">
          {filteredItems.map((item, index) => {
            // Create editorial variety: some wide feature cards, some standard
            const isFeatured = index === 0 || index === 3;
            const colSpan = isFeatured ? 'lg:col-span-8' : 'lg:col-span-4';

            return (
              <StaggerItem3D key={item.id} className={`${colSpan} flex`}>
                <Card3D
                  maxTilt={8}
                  depth={24}
                  glare={true}
                  className="w-full flex"
                  onClick={() => {
                    trackEvent('collection_card_click', { collection: item.name });
                    setSelectedCollection(item);
                  }}
                >
                  <div
                    className="w-full h-full group relative bg-white dark:bg-emerald-surface rounded-2xl overflow-hidden border border-beige/80 dark:border-white/10 shadow-luxury dark:shadow-darkcard cursor-pointer flex flex-col justify-between"
                    role="button"
                    tabIndex={0}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter' || e.key === ' ') {
                        setSelectedCollection(item);
                      }
                    }}
                    aria-label={`View ${item.name} details`}
                  >
                    {/* Image Container with 3D Depth */}
                    <div className={`relative overflow-hidden ${isFeatured ? 'h-72 sm:h-80 md:h-96' : 'h-64 sm:h-72'}`}>
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-charcoal/85 via-charcoal/25 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />

                      {/* Category Pill Tag */}
                      <div className="absolute top-4 left-4 z-10">
                        <span className="px-3 py-1 rounded-full text-[11px] font-semibold tracking-wider uppercase bg-black/50 backdrop-blur-md text-ivory border border-white/20">
                          {item.categoryTag}
                        </span>
                      </div>

                      {/* Corner Arrow Icon on Hover */}
                      <div className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-white/95 dark:bg-emerald-midnight text-charcoal dark:text-ivory flex items-center justify-center transform translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all shadow-md">
                        <ArrowUpRight className="w-4 h-4 text-gold-dark dark:text-gold-light" />
                      </div>

                      {/* Floating Title on bottom of image */}
                      <div className="absolute bottom-4 left-4 right-4 z-10 text-ivory">
                        <p className="text-xs uppercase tracking-widest text-gold-light font-medium mb-1">
                          {item.subtitle}
                        </p>
                        <h3 className="font-serif text-2xl sm:text-3xl font-bold leading-snug">
                          {item.name}
                        </h3>
                      </div>
                    </div>

                    {/* Card Bottom: Description & Quick Action */}
                    <div className="p-5 flex-1 flex flex-col justify-between bg-white dark:bg-emerald-surface">
                      <p className="text-sm text-warmgray-dark dark:text-beige/85 line-clamp-2 leading-relaxed mb-4">
                        {item.description}
                      </p>

                      <div className="flex items-center justify-between pt-3 border-t border-beige/60 dark:border-white/10 text-xs font-semibold uppercase tracking-wider text-gold-dark dark:text-gold-light group-hover:text-charcoal dark:group-hover:text-ivory transition-colors">
                        <span>Explore Collection</span>
                        <span className="text-sm">→</span>
                      </div>
                    </div>
                  </div>
                </Card3D>
              </StaggerItem3D>
            );
          })}
        </Stagger3D>

        {/* Link to Dedicated Collections Page */}
        <div className="mt-12 text-center">
          <Link
            to="/collections"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-emerald hover:bg-emerald-dark text-white font-semibold text-xs uppercase tracking-widest transition-all shadow-md hover:shadow-lg"
          >
            <span>View Complete Collections Catalog</span>
            <ArrowRight className="w-4 h-4 text-gold-light" />
          </Link>
          <p className="mt-4 text-xs text-warmgray dark:text-beige/70">
            * All collections are showcased for brand discovery and design consultation at our Hata showroom. We invite you to experience craftsmanship in person.
          </p>
        </div>
      </div>

      {/* Collection Lightbox / Detail Modal */}
      {selectedCollection && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6"
          role="dialog"
          aria-modal="true"
          aria-label={`${selectedCollection.name} Details`}
        >
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-black/70 backdrop-blur-sm transition-opacity"
            onClick={() => setSelectedCollection(null)}
          />

          {/* Modal Container */}
          <div className="relative w-full max-w-3xl bg-ivory dark:bg-emerald-surface rounded-2xl overflow-hidden shadow-2xl border border-beige dark:border-white/10 z-10 max-h-[90vh] flex flex-col md:flex-row">
            {/* Close Button */}
            <button
              onClick={() => setSelectedCollection(null)}
              className="absolute top-4 right-4 z-20 p-2 rounded-full bg-black/50 text-white hover:bg-black/80 transition-colors focus:outline-none focus:ring-2 focus:ring-gold"
              aria-label="Close dialog"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Left: Imagery */}
            <div className="w-full md:w-1/2 h-64 md:h-auto relative bg-charcoal">
              <img
                src={selectedCollection.image}
                alt={selectedCollection.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/60 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-4 left-4">
                <span className="px-3 py-1 rounded-full text-xs font-semibold tracking-wider uppercase bg-gold text-white">
                  {selectedCollection.categoryTag}
                </span>
              </div>
            </div>

            {/* Right: Content & Action */}
            <div className="w-full md:w-1/2 p-6 sm:p-8 flex flex-col justify-between overflow-y-auto">
              <div>
                <p className="text-xs uppercase tracking-widestluxury text-gold-dark dark:text-gold-light font-semibold mb-1">
                  RADHA JEWELLERS COLLECTION
                </p>
                <h3 className="font-serif text-2xl sm:text-3xl font-bold text-charcoal dark:text-ivory mb-2">
                  {selectedCollection.name}
                </h3>
                <p className="text-sm text-gold-dark dark:text-gold-light font-medium italic mb-4">
                  {selectedCollection.subtitle}
                </p>

                <p className="text-sm text-warmgray-dark dark:text-beige/85 leading-relaxed mb-6 font-light">
                  {selectedCollection.description}
                </p>

                {/* Highlights List */}
                <div className="space-y-2.5 mb-6">
                  <p className="text-xs font-semibold uppercase tracking-wider text-charcoal dark:text-ivory">
                    Craftsmanship Highlights:
                  </p>
                  {selectedCollection.highlights.map((highlight, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-xs text-warmgray-dark dark:text-beige/75">
                      <CheckCircle2 className="w-4 h-4 text-gold flex-shrink-0" />
                      <span>{highlight}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-4 border-t border-beige dark:border-white/10 space-y-2.5">
                {/* 3D Action if available for this category */}
                {(() => {
                  const matching3d = models3dData.find(
                    (m) =>
                      (selectedCollection.id === 'rings' && m.id === 'royal-solitaire-ring') ||
                      (selectedCollection.id === 'bangles' && m.id === 'temple-gold-kada') ||
                      (selectedCollection.id === 'necklaces' && m.id === 'kundan-pearl-pendant')
                  );

                  if (matching3d) {
                    return (
                      <Link
                        to="/3d-experience"
                        onClick={() => {
                          setSelectedCollection(null);
                          trackEvent('collection_to_3d_click', { model: matching3d.name });
                        }}
                        className="w-full flex items-center justify-center gap-2 px-5 py-3 rounded-full bg-emerald hover:bg-emerald-dark text-ivory font-semibold text-xs uppercase tracking-wider transition-all shadow-sm border border-gold/40"
                      >
                        <Box className="w-4 h-4 text-gold" />
                        <span>Explore in Interactive 3D ({matching3d.name})</span>
                      </Link>
                    );
                  }
                  return null;
                })()}

                <a
                  href={getWhatsAppUrl(selectedCollection.whatsappMessage)}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => trackEvent('collection_modal_whatsapp', { collection: selectedCollection.name })}
                  className="w-full flex items-center justify-center gap-2 px-5 py-3 rounded-full bg-gold hover:bg-gold-dark text-white font-semibold text-xs uppercase tracking-wider transition-all shadow-sm"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Enquire About This Collection</span>
                </a>

                <p className="text-center text-[11px] text-warmgray dark:text-beige/70">
                  Visit our showroom in Hata, Kushinagar to explore full designs in person.
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

