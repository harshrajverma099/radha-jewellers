import React, { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { Phone, MessageCircle, Menu, X, Sparkles, Sun, Moon } from 'lucide-react';
import { siteConfig, getWhatsAppUrl, trackEvent } from '../data/siteConfig';
import { useTheme } from '../context/ThemeContext';

interface NavbarProps {
  onToggleMobileMenu: () => void;
  isMobileMenuOpen: boolean;
}

export const Navbar: React.FC<NavbarProps> = ({ onToggleMobileMenu, isMobileMenuOpen }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: '3D Experience', path: '/3d-experience', isSpecial: true },
    { name: 'Collections', path: '/collections' },
    { name: 'Offers', path: '/offers' },
    { name: 'Showroom', path: '/showroom' },
    { name: 'Contact', path: '/contact' },
  ];

  // Determine if navbar should have transparent background (only on homepage before scrolling)
  const isDarkTransparent = isHomePage && !isScrolled;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isDarkTransparent
          ? 'bg-emerald-dark/60 backdrop-blur-sm border-b border-white/10 py-4'
          : 'bg-ivory/95 dark:bg-emerald-noir/95 backdrop-blur-md shadow-sm border-b border-beige/80 dark:border-white/10 py-3'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Logo & Signature */}
          <Link
            to="/"
            className="flex items-center gap-3 group focus:outline-none focus:ring-2 focus:ring-gold rounded-sm"
            aria-label={`${siteConfig.brandName} - Since ${siteConfig.established}`}
            onClick={() => trackEvent('nav_logo_click')}
          >
            <img
              src="/images/radha-jewellers-logo.png"
              alt="Radha Jewellers Logo"
              className={`h-10 sm:h-12 w-auto object-contain transition-transform duration-300 group-hover:scale-105 ${
                isDarkTransparent ? 'brightness-110 drop-shadow-md' : 'dark:brightness-110'
              }`}
              onError={(e) => {
                (e.target as HTMLImageElement).src = '/images/radha-jewellers-logo.svg';
              }}
            />
            <div className="hidden sm:flex flex-col">
              <span
                className={`font-serif text-lg font-bold tracking-wider leading-none transition-colors ${
                  isDarkTransparent ? 'text-ivory' : 'text-charcoal dark:text-ivory'
                }`}
              >
                RADHA JEWELLERS
              </span>
              <span
                className={`text-[9px] uppercase tracking-widest font-medium transition-colors ${
                  isDarkTransparent ? 'text-gold-light' : 'text-gold-dark dark:text-gold-light'
                }`}
              >
                SINCE 2003 • HATA
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-6 xl:space-x-7" aria-label="Main Navigation">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                className={({ isActive }) =>
                  `text-sm font-medium tracking-wide transition-all relative py-1 focus:outline-none focus:ring-1 focus:ring-gold flex items-center gap-1.5 ${
                    isDarkTransparent
                      ? isActive
                        ? 'text-gold-light font-semibold border-b-2 border-gold-light'
                        : 'text-ivory/90 hover:text-gold-light'
                      : isActive
                      ? 'text-gold-dark dark:text-gold-light font-semibold border-b-2 border-gold-dark dark:border-gold-light'
                      : 'text-charcoal/90 dark:text-ivory/80 hover:text-gold-dark dark:hover:text-gold-light'
                  }`
                }
              >
                {link.isSpecial && <Sparkles className="w-3.5 h-3.5 text-gold animate-pulse" />}
                <span>{link.name}</span>
              </NavLink>
            ))}
          </nav>

          {/* Right Action CTAs: Theme Switcher, Call & WhatsApp */}
          <div className="hidden sm:flex items-center space-x-3">
            {/* Theme Toggle Button */}
            <button
              onClick={toggleTheme}
              className={`p-2 rounded-full border transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-gold ${
                isDarkTransparent
                  ? 'border-white/20 text-ivory hover:text-gold-light hover:border-gold-light bg-black/20'
                  : 'border-beige dark:border-white/15 text-charcoal dark:text-ivory hover:text-gold-dark dark:hover:text-gold-light bg-white/70 dark:bg-emerald-surface/70'
              }`}
              title={theme === 'dark' ? 'Switch to Light Theme' : 'Switch to Dark Theme'}
              aria-label={theme === 'dark' ? 'Switch to Light Theme' : 'Switch to Dark Theme'}
            >
              {theme === 'dark' ? (
                <Sun className="w-4 h-4 text-gold-light transition-transform hover:rotate-45" />
              ) : (
                <Moon className="w-4 h-4 text-charcoal transition-transform hover:-rotate-12" />
              )}
            </button>

            <a
              href={siteConfig.phoneLink}
              onClick={() => trackEvent('nav_call_click')}
              className={`inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-medium rounded-full transition-all border focus:outline-none focus:ring-2 focus:ring-gold ${
                isDarkTransparent
                  ? 'border-white/20 text-ivory hover:border-gold-light hover:text-gold-light bg-black/20'
                  : 'border-beige dark:border-white/15 text-charcoal dark:text-ivory hover:border-gold hover:text-gold-dark dark:hover:text-gold-light bg-white/60 dark:bg-emerald-surface/60'
              }`}
              aria-label={`Call Radha Jewellers at ${siteConfig.phoneDisplay}`}
            >
              <Phone className="w-3.5 h-3.5 text-gold" />
              <span>{siteConfig.phoneDisplay}</span>
            </a>

            <a
              href={getWhatsAppUrl('Hello Radha Jewellers, I would like to enquire about your jewellery collections.')}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackEvent('nav_whatsapp_click')}
              className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold uppercase tracking-wider rounded-full bg-gold hover:bg-gold-dark text-white shadow-sm transition-all transform hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-gold focus:ring-offset-2"
              aria-label="Enquire on WhatsApp"
            >
              <MessageCircle className="w-3.5 h-3.5" />
              <span>WhatsApp Enquiry</span>
            </a>
          </div>

          {/* Mobile Actions: Theme Toggle + WhatsApp + Menu Hamburger */}
          <div className="flex sm:hidden items-center gap-2">
            <button
              onClick={toggleTheme}
              className={`p-2 rounded-full border transition-all focus:outline-none focus:ring-2 focus:ring-gold ${
                isDarkTransparent
                  ? 'border-white/20 text-ivory hover:text-gold-light bg-black/20'
                  : 'border-beige dark:border-white/15 text-charcoal dark:text-ivory bg-white/70 dark:bg-emerald-surface/70'
              }`}
              aria-label={theme === 'dark' ? 'Switch to Light Theme' : 'Switch to Dark Theme'}
            >
              {theme === 'dark' ? (
                <Sun className="w-4 h-4 text-gold-light" />
              ) : (
                <Moon className="w-4 h-4 text-charcoal" />
              )}
            </button>

            <a
              href={getWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-gold text-white focus:outline-none focus:ring-2 focus:ring-gold"
              aria-label="Quick WhatsApp enquiry"
            >
              <MessageCircle className="w-4 h-4" />
            </a>

            <button
              onClick={onToggleMobileMenu}
              className={`p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-gold transition-colors ${
                isDarkTransparent ? 'text-ivory hover:bg-white/10' : 'text-charcoal dark:text-ivory hover:bg-beige/40 dark:hover:bg-white/10'
              }`}
              aria-label={isMobileMenuOpen ? 'Close Menu' : 'Open Navigation Menu'}
              aria-expanded={isMobileMenuOpen}
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};
