import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, MessageCircle, MapPin, Navigation, ArrowUp, Instagram, Star, Sparkles } from 'lucide-react';
import { siteConfig, getWhatsAppUrl, trackEvent } from '../data/siteConfig';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: '3D Experience', path: '/3d-experience', isSpecial: true },
    { name: 'Collections', path: '/collections' },
    { name: 'Festive Offers', path: '/offers' },
    { name: 'Visit Showroom', path: '/showroom' },
    { name: 'Contact', path: '/contact' },
  ];

  const collectionLinks = [
    { name: 'Gold Jewellery', path: '/collections' },
    { name: 'Bridal & Wedding Jewellery', path: '/collections' },
    { name: 'Traditional Indian Jewellery', path: '/collections' },
    { name: 'Diamond Jewellery', path: '/collections' },
    { name: 'Necklaces & Chokers', path: '/collections' },
    { name: 'Bangles & Kadas', path: '/collections' },
    { name: 'Rings & Bands', path: '/collections' },
    { name: 'Earrings & Jhumkas', path: '/collections' },
  ];

  const hasInstagram = Boolean(siteConfig.instagramUrl && siteConfig.instagramUrl.trim().length > 0);
  const hasReviews = Boolean(siteConfig.googleReviewsUrl && siteConfig.googleReviewsUrl.trim().length > 0);

  return (
    <footer className="bg-emerald-dark text-beige/90 pt-16 pb-24 lg:pb-16 border-t border-gold/30 relative" aria-label="Footer">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-16 border-b border-white/10">
          {/* Brand Column (Col 5) */}
          <div className="lg:col-span-5 space-y-6">
            <Link to="/" className="flex items-center gap-3">
              <img
                src="/images/radha-jewellers-logo.png"
                alt="Radha Jewellers Logo"
                className="h-14 sm:h-16 w-auto object-contain brightness-110 drop-shadow-md"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = '/images/radha-jewellers-logo.svg';
                }}
              />
              <div>
                <span className="font-serif text-2xl font-bold tracking-wider block text-ivory">
                  RADHA JEWELLERS
                </span>
                <span className="text-xs uppercase tracking-widest text-gold-light font-medium block">
                  SINCE 2003 • HATA, KUSHINAGAR
                </span>
              </div>
            </Link>

            <p className="text-sm text-beige/80 leading-relaxed font-light max-w-sm">
              Discover timeless jewellery inspired by Indian tradition, thoughtful craftsmanship and the beauty of life’s most cherished celebrations.
            </p>

            <div className="pt-2">
              <p className="font-serif italic text-lg text-gold-light">
                “Timeless Elegance. Cherished Forever.”
              </p>
            </div>

            {/* Optional Verified Social/Review links */}
            {(hasInstagram || hasReviews) && (
              <div className="flex items-center gap-3 pt-2">
                {hasInstagram && (
                  <a
                    href={siteConfig.instagramUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-9 h-9 rounded-full bg-white/5 border border-white/15 flex items-center justify-center text-ivory hover:text-gold hover:border-gold transition-colors"
                    aria-label="Instagram Profile"
                  >
                    <Instagram className="w-4 h-4" />
                  </a>
                )}
                {hasReviews && (
                  <a
                    href={siteConfig.googleReviewsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-9 h-9 rounded-full bg-white/5 border border-white/15 flex items-center justify-center text-ivory hover:text-gold hover:border-gold transition-colors"
                    aria-label="Google Reviews"
                  >
                    <Star className="w-4 h-4" />
                  </a>
                )}
              </div>
            )}
          </div>

          {/* Quick Navigation Links (Col 2) */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="font-serif text-lg font-semibold text-ivory tracking-wide">
              Explore Pages
            </h4>
            <ul className="space-y-2 text-xs">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="hover:text-gold-light transition-colors py-0.5 flex items-center gap-1.5"
                  >
                    {link.isSpecial && <Sparkles className="w-3 h-3 text-gold" />}
                    <span>{link.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Collections Showcase Links (Col 2) */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="font-serif text-lg font-semibold text-ivory tracking-wide">
              Collections
            </h4>
            <ul className="space-y-2 text-xs">
              {collectionLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="hover:text-gold-light transition-colors block py-0.5"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Showroom & Contact Details (Col 3) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="font-serif text-lg font-semibold text-ivory tracking-wide">
              Showroom Details
            </h4>

            <div className="space-y-3 text-xs leading-relaxed">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-gold flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-medium text-ivory">{siteConfig.brandName}</p>
                  <p>{siteConfig.address.line1}</p>
                  <p>{siteConfig.address.landmark}</p>
                  <p>{siteConfig.address.city}, {siteConfig.address.district}, {siteConfig.address.state} - {siteConfig.address.pincode}</p>
                </div>
              </div>

              <div className="flex items-center gap-2.5 pt-1">
                <Phone className="w-4 h-4 text-gold flex-shrink-0" />
                <a
                  href={siteConfig.phoneLink}
                  className="hover:text-gold-light text-ivory font-medium transition-colors"
                >
                  {siteConfig.phoneDisplay}
                </a>
              </div>

              <div className="flex items-center gap-2.5">
                <MessageCircle className="w-4 h-4 text-gold flex-shrink-0" />
                <a
                  href={getWhatsAppUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-gold-light text-ivory font-medium transition-colors"
                >
                  WhatsApp Consultation
                </a>
              </div>

              <div className="pt-2">
                <a
                  href={siteConfig.directionsLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => trackEvent('footer_directions_click')}
                  className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full border border-gold/40 text-gold-light hover:bg-gold hover:text-white transition-all text-xs"
                >
                  <Navigation className="w-3 h-3" />
                  <span>Get Directions</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Scroll to Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-beige/70">
          <p>
            © {currentYear} {siteConfig.brandName}. All rights reserved. Since {siteConfig.established}.
          </p>

          <p className="text-[11px] text-center">
            A premium jewellery showroom discovery experience for Hata, Kushinagar.
          </p>

          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-1 text-gold-light hover:text-white transition-colors focus:outline-none"
            aria-label="Back to top"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
};
