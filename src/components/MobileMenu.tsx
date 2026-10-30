import React, { useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Phone, MessageCircle, MapPin, X, ArrowRight, Sparkles, Sun, Moon } from 'lucide-react';
import { siteConfig, getWhatsAppUrl, trackEvent } from '../data/siteConfig';
import { useTheme } from '../context/ThemeContext';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export const MobileMenu: React.FC<MobileMenuProps> = ({ isOpen, onClose }) => {
  const { theme, toggleTheme, setTheme } = useTheme();

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: '3D Experience', path: '/3d-experience', isSpecial: true },
    { name: 'Collections', path: '/collections' },
    { name: 'Festive Offers', path: '/offers' },
    { name: 'Visit Showroom', path: '/showroom' },
    { name: 'Contact Us', path: '/contact' },
  ];

  return (
    <div
      className="fixed inset-0 z-50 lg:hidden flex justify-end"
      role="dialog"
      aria-modal="true"
      aria-label="Mobile Navigation Menu"
    >
      {/* Dimmed backdrop */}
      <div
        className="fixed inset-0 bg-black/60 backdrop-blur-sm transition-opacity"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Drawer panel */}
      <div className="relative w-full max-w-xs sm:max-w-sm bg-ivory dark:bg-emerald-noir h-full shadow-2xl flex flex-col justify-between overflow-y-auto border-l border-beige dark:border-white/10 transition-colors duration-300">
        {/* Header inside drawer */}
        <div className="p-5 border-b border-beige dark:border-white/10 flex items-center justify-between bg-cream/40 dark:bg-emerald-midnight/70">
          <Link to="/" onClick={onClose} className="flex items-center gap-2.5">
            <img
              src="/images/radha-jewellers-logo.png"
              alt="Radha Jewellers"
              className="h-9 w-auto object-contain dark:brightness-110"
              onError={(e) => {
                (e.target as HTMLImageElement).src = '/images/radha-jewellers-logo.svg';
              }}
            />
            <div>
              <span className="font-serif font-bold text-base tracking-wider block text-charcoal dark:text-ivory">
                RADHA JEWELLERS
              </span>
              <span className="text-[9px] uppercase tracking-widest text-gold-dark dark:text-gold-light font-medium block">
                SINCE 2003
              </span>
            </div>
          </Link>

          <button
            onClick={onClose}
            className="p-2 rounded-full hover:bg-beige/60 dark:hover:bg-white/10 text-charcoal dark:text-ivory focus:outline-none focus:ring-2 focus:ring-gold"
            aria-label="Close navigation menu"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Theme Preference Bar */}
        <div className="px-5 pt-4 pb-2">
          <div className="flex items-center justify-between p-2 rounded-xl bg-cream/50 dark:bg-emerald-surface/60 border border-beige/60 dark:border-white/10">
            <span className="text-xs uppercase tracking-wider font-medium text-charcoal dark:text-ivory flex items-center gap-1.5 pl-1">
              {theme === 'dark' ? <Moon className="w-3.5 h-3.5 text-gold-light" /> : <Sun className="w-3.5 h-3.5 text-gold-dark" />}
              Theme
            </span>
            <div className="flex items-center gap-1 bg-white/70 dark:bg-emerald-midnight/80 p-0.5 rounded-lg border border-beige/40 dark:border-white/10">
              <button
                onClick={() => setTheme('light')}
                className={`flex items-center gap-1 px-2.5 py-1 rounded-md text-xs font-medium transition-all ${
                  theme === 'light'
                    ? 'bg-gold text-white shadow-sm'
                    : 'text-charcoal/70 dark:text-ivory/70 hover:text-charcoal'
                }`}
              >
                <Sun className="w-3 h-3" />
                <span>Light</span>
              </button>
              <button
                onClick={() => setTheme('dark')}
                className={`flex items-center gap-1 px-2.5 py-1 rounded-md text-xs font-medium transition-all ${
                  theme === 'dark'
                    ? 'bg-gold text-white shadow-sm'
                    : 'text-charcoal/70 dark:text-ivory/70 hover:text-ivory'
                }`}
              >
                <Moon className="w-3 h-3" />
                <span>Dark</span>
              </button>
            </div>
          </div>
        </div>

        {/* Links list */}
        <div className="px-5 py-4 space-y-1">
          {navLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              onClick={() => {
                trackEvent('mobile_nav_click', { link: link.name });
                onClose();
              }}
              className={({ isActive }) =>
                `flex items-center justify-between px-3.5 py-3 rounded-xl transition-all font-medium text-base group ${
                  isActive
                    ? 'bg-cream dark:bg-emerald-surface text-gold-dark dark:text-gold-light font-semibold border-l-4 border-gold'
                    : 'text-charcoal dark:text-ivory/85 hover:text-gold-dark dark:hover:text-gold-light hover:bg-cream/60 dark:hover:bg-emerald-surface/40'
                }`
              }
            >
              <div className="flex items-center gap-2">
                {link.isSpecial && <Sparkles className="w-4 h-4 text-gold animate-spin" />}
                <span>{link.name}</span>
              </div>
              <ArrowRight className="w-4 h-4 opacity-40 group-hover:opacity-100 transform -translate-x-1 group-hover:translate-x-0 transition-all text-gold" />
            </NavLink>
          ))}
        </div>

        {/* Bottom Contact Actions */}
        <div className="p-5 border-t border-beige dark:border-white/10 bg-cream/30 dark:bg-emerald-midnight/60 space-y-3">
          <a
            href={getWhatsAppUrl('Hello Radha Jewellers, I would like to enquire about your jewellery.')}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackEvent('mobile_menu_whatsapp_click')}
            className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-lg bg-gold hover:bg-gold-dark text-white font-medium text-sm transition-colors shadow-sm"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Enquire on WhatsApp</span>
          </a>

          <div className="grid grid-cols-2 gap-2">
            <a
              href={siteConfig.phoneLink}
              onClick={() => trackEvent('mobile_menu_call_click')}
              className="flex items-center justify-center gap-1.5 px-3 py-2.5 rounded-lg border border-beige dark:border-white/15 bg-white dark:bg-emerald-surface text-charcoal dark:text-ivory hover:border-gold hover:text-gold-dark dark:hover:text-gold-light text-xs font-medium transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-gold" />
              <span>Call Showroom</span>
            </a>

            <a
              href={siteConfig.directionsLink}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackEvent('mobile_menu_directions_click')}
              className="flex items-center justify-center gap-1.5 px-3 py-2.5 rounded-lg border border-beige dark:border-white/15 bg-white dark:bg-emerald-surface text-charcoal dark:text-ivory hover:border-gold hover:text-gold-dark dark:hover:text-gold-light text-xs font-medium transition-colors"
            >
              <MapPin className="w-3.5 h-3.5 text-gold" />
              <span>Get Directions</span>
            </a>
          </div>

          <div className="pt-2 text-center text-[11px] text-warmgray dark:text-beige/70">
            <p className="font-serif text-charcoal dark:text-ivory font-semibold text-xs mb-0.5">Radha Jewellers • Hata</p>
            <p>{siteConfig.address.landmark}, {siteConfig.address.city}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
