import React, { useState, useRef, useEffect } from 'react';
import { ArrowRight, MapPin, Sparkles, Film } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Floating3D } from './Motion3D';
import { trackEvent } from '../data/siteConfig';

interface HeroScene {
  id: string;
  name: string;
  badge: string;
  desktopSrc: string;
  mobileSrc: string;
  poster: string;
}

const heroScenes: HeroScene[] = [
  {
    id: 'royal-bridal',
    name: 'Royal Bridal Trousseau',
    badge: '22K Heirloom Gold',
    desktopSrc: '/videos/optimized/hero-royal-bridal.mp4',
    mobileSrc: '/videos/optimized/hero-mobile-portrait.mp4',
    poster: '/images/posters/hero-royal-bridal-poster.webp',
  },
  {
    id: 'classic-gold',
    name: 'Imperial Kundan & Polki',
    badge: 'Traditional Craft',
    desktopSrc: '/videos/optimized/model-film-classic-gold.mp4',
    mobileSrc: '/videos/optimized/hero-mobile-portrait.mp4',
    poster: '/images/posters/model-film-classic-gold-poster.webp',
  },
  {
    id: 'contemporary',
    name: 'Contemporary Solitaires',
    badge: 'Diamond Splendour',
    desktopSrc: '/videos/optimized/model-film-contemporary.mp4',
    mobileSrc: '/videos/optimized/hero-mobile-portrait.mp4',
    poster: '/images/posters/model-film-contemporary-poster.webp',
  },
];

export const Hero: React.FC = () => {
  const [activeSceneIndex, setActiveSceneIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const activeScene = heroScenes[activeSceneIndex];

  // Screen size check for vertical mobile video
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Update video playback when scene changes, ensuring continuous, unpausable autoplay & loop
  useEffect(() => {
    const vid = videoRef.current;
    if (!vid) return;

    // Enforce DOM muted & loop properties for strict Safari & Chrome compatibility
    vid.defaultMuted = true;
    vid.muted = true;
    vid.loop = true;

    const playVideo = () => {
      const playPromise = vid.play();
      if (playPromise !== undefined) {
        playPromise.catch(() => {
          // If browser policy initially delayed autoplay, immediately play on first interaction
          const unlockAutoplay = () => {
            vid.play().catch(() => {});
            window.removeEventListener('click', unlockAutoplay);
            window.removeEventListener('touchstart', unlockAutoplay);
            window.removeEventListener('scroll', unlockAutoplay);
          };
          window.addEventListener('click', unlockAutoplay, { once: true, passive: true });
          window.addEventListener('touchstart', unlockAutoplay, { once: true, passive: true });
          window.addEventListener('scroll', unlockAutoplay, { once: true, passive: true });
        });
      }
    };

    playVideo();

    // STRICT "NO PAUSE" GUARANTEE: If video is ever paused by the browser, immediately resume playback
    const handlePause = () => {
      vid.play().catch(() => {});
    };

    // When video ends, immediately rewind and replay seamlessly
    const handleEnded = () => {
      vid.currentTime = 0;
      vid.play().catch(() => {});
    };

    // When tab/window regains focus or visibility
    const handleVisibility = () => {
      if (!document.hidden) {
        vid.play().catch(() => {});
      }
    };

    vid.addEventListener('pause', handlePause);
    vid.addEventListener('ended', handleEnded);
    document.addEventListener('visibilitychange', handleVisibility);
    window.addEventListener('focus', handleVisibility);

    // Continuous heartbeat verification: guarantees video is playing at all times
    const heartbeat = setInterval(() => {
      if (vid.paused) {
        vid.play().catch(() => {});
      }
    }, 1500);

    return () => {
      vid.removeEventListener('pause', handlePause);
      vid.removeEventListener('ended', handleEnded);
      document.removeEventListener('visibilitychange', handleVisibility);
      window.removeEventListener('focus', handleVisibility);
      clearInterval(heartbeat);
    };
  }, [activeSceneIndex, isMobile]);

  return (
    <section
      id="home"
      className="relative min-h-[95vh] lg:min-h-screen flex items-center justify-center bg-black overflow-hidden pt-24 pb-16 lg:py-0"
      aria-label="Hero Section"
    >
      {/* Real Model Jewellery Video Background - Natural Video Colors (Zero Green Texture, Strictly Non-Pausable) */}
      <div className="absolute inset-0 z-0 pointer-events-none select-none">
        <video
          ref={videoRef}
          key={`${activeScene.id}-${isMobile ? 'mobile' : 'desktop'}`}
          src={isMobile ? activeScene.mobileSrc : activeScene.desktopSrc}
          autoPlay
          muted
          loop
          playsInline
          poster={activeScene.poster}
          disablePictureInPicture
          disableRemotePlayback
          className="w-full h-full object-cover object-center pointer-events-none select-none"
        />

        {/* Clean Neutral Dark Scrim for text readability (Zero Green Tint/Texture) */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
      </div>

      {/* Decorative Gold Radial Glow */}
      <div className="absolute -top-40 -left-40 w-96 h-96 bg-gold/15 rounded-full blur-3xl pointer-events-none" />

      {/* Hero Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-12 lg:py-24">
        <div className="max-w-2xl lg:max-w-3xl">
          {/* 3D Floating Heritage Badge */}
          <Floating3D amplitude={6} duration={5} className="inline-block mb-6">
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-black/45 backdrop-blur-md border border-gold/40 shadow-luxury">
              <span className="w-2 h-2 rounded-full bg-gold animate-pulse" />
              <span className="text-xs sm:text-sm font-medium tracking-widestluxury uppercase text-gold-light">
                SINCE 2003 • HATA, KUSHINAGAR
              </span>
            </div>
          </Floating3D>

          {/* Brand Signature */}
          <div className="mb-3">
            <h2 className="text-sm sm:text-base uppercase tracking-ultrawide font-medium text-beige/85">
              RADHA JEWELLERS
            </h2>
          </div>

          {/* Primary Headline */}
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-ivory tracking-tight leading-[1.08] mb-6 drop-shadow-md">
            An Eternal Legacy of <span className="text-gold-gradient italic font-normal">Elegance.</span>
          </h1>

          {/* Supporting Copy */}
          <p className="text-base sm:text-lg md:text-xl text-beige/90 leading-relaxed font-light mb-8 max-w-xl">
            Discover timeless jewellery inspired by Indian tradition, thoughtful craftsmanship and the beauty of life’s most cherished celebrations.
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

          {/* Interactive Model Video Film Switcher (Autoplay & Continuous Repeat) */}
          <div className="pt-6 border-t border-white/15 flex items-center justify-between gap-4">
            <div className="flex items-center gap-2 overflow-x-auto max-w-full pb-1 sm:pb-0">
              <span className="text-[11px] uppercase tracking-widest text-gold-light font-medium mr-1 flex items-center gap-1.5 flex-shrink-0">
                <Film className="w-3.5 h-3.5" />
                <span>Model Film:</span>
              </span>
              {heroScenes.map((scene, idx) => (
                <button
                  key={scene.id}
                  onClick={() => {
                    setActiveSceneIndex(idx);
                    trackEvent('hero_scene_switch', { scene: scene.name });
                  }}
                  className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all whitespace-nowrap flex items-center gap-1.5 ${
                    activeSceneIndex === idx
                      ? 'bg-gold text-white shadow-goldglow'
                      : 'bg-black/40 text-ivory/80 hover:text-gold-light border border-white/15 hover:border-gold/40'
                  }`}
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-current" />
                  <span>{scene.name}</span>
                </button>
              ))}
            </div>

            {/* Continuous Loop / Autoplay Indicator */}
            <div className="hidden sm:flex items-center gap-2 text-[11px] tracking-widest text-gold-light/80 uppercase font-medium">
              <span className="w-2 h-2 rounded-full bg-gold animate-pulse" />
              <span>Autoplay Loop</span>
            </div>
          </div>
        </div>
      </div>

      {/* Subtle bottom fade to seamlessly blend into next section without green tint */}
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-black/60 to-transparent pointer-events-none" />
    </section>
  );
};
