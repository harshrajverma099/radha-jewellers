import React, { useEffect, useRef, useState } from 'react';
import { Sparkles } from 'lucide-react';

interface ScatteredVideo {
  id: string;
  src: string;
  poster: string;
  title: string;
  category: string;
  aspect: 'portrait' | 'landscape' | 'square' | 'editorial';
}

const galleryVideos: ScatteredVideo[] = [
  {
    id: 'vid-1',
    src: '/videos/optimized/hero-mobile-portrait.mp4',
    poster: '/images/posters/hero-mobile-portrait-poster.webp',
    title: 'The Royal Trousseau',
    category: 'Bridal Heritage',
    aspect: 'portrait',
  },
  {
    id: 'vid-2',
    src: '/videos/optimized/hero-royal-bridal.mp4',
    poster: '/images/posters/hero-royal-bridal-poster.webp',
    title: 'Palace Splendour',
    category: 'Heirloom 22K Gold',
    aspect: 'landscape',
  },
  {
    id: 'vid-3',
    src: '/videos/optimized/model-film-necklace-macro.mp4',
    poster: '/images/posters/model-film-necklace-macro-poster.webp',
    title: 'Artisanal Setting in Motion',
    category: 'Macro Craftsmanship',
    aspect: 'editorial',
  },
  {
    id: 'vid-4',
    src: '/videos/optimized/model-film-contemporary.mp4',
    poster: '/images/posters/model-film-contemporary-poster.webp',
    title: 'Solitaire Radiance',
    category: 'Diamond Suite',
    aspect: 'square',
  },
  {
    id: 'vid-5',
    src: '/videos/optimized/model-film-classic-gold.mp4',
    poster: '/images/posters/model-film-classic-gold-poster.webp',
    title: 'Imperial Kundan & Polki',
    category: 'Traditional Artistry',
    aspect: 'landscape',
  },
  {
    id: 'vid-6',
    src: '/videos/optimized/model-film-festive-earrings.mp4',
    poster: '/images/posters/model-film-festive-earrings-poster.webp',
    title: 'Festive Chandbalis',
    category: 'Earrings & Drops',
    aspect: 'portrait',
  },
  {
    id: 'vid-7',
    src: '/videos/optimized/model-film-solitaire-rings.mp4',
    poster: '/images/posters/model-film-solitaire-rings-poster.webp',
    title: 'Luminous Rings & Kadas',
    category: 'Hallmark Gold',
    aspect: 'editorial',
  },
  {
    id: 'vid-8',
    src: '/videos/optimized/model-film-temple-heritage.mp4',
    poster: '/images/posters/model-film-temple-heritage-poster.webp',
    title: 'Antique Temple Splendour',
    category: 'Temple Jewellery',
    aspect: 'landscape',
  },
];

interface VideoCardProps {
  video: ScatteredVideo;
  index: number;
}

const AutoplayVideoCard: React.FC<VideoCardProps> = ({ video, index }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const target = containerRef.current;
    if (!target) return;

    // Viewport detection via IntersectionObserver
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const vid = videoRef.current;
          if (entry.isIntersecting) {
            setIsVisible(true);
            if (vid) {
              // Lazy-set source only when near viewport to conserve bandwidth
              if (!vid.src && !vid.currentSrc) {
                vid.src = video.src;
                vid.load();
              }
              const playPromise = vid.play();
              if (playPromise !== undefined) {
                playPromise.catch(() => {
                  // Handled gracefully if browser power-saving restricts autoplay
                });
              }
            }
          } else {
            setIsVisible(false);
            if (vid && !vid.paused) {
              vid.pause();
            }
          }
        });
      },
      {
        threshold: 0.15,
        rootMargin: '120px 0px 120px 0px',
      }
    );

    observer.observe(target);

    return () => {
      observer.disconnect();
      if (videoRef.current && !videoRef.current.paused) {
        videoRef.current.pause();
      }
    };
  }, [video.src]);

  // Tailored aspect ratios with safe maximum bounds
  const getAspectClass = (aspect: ScatteredVideo['aspect']) => {
    switch (aspect) {
      case 'portrait':
        return 'aspect-[9/16] max-h-[600px]';
      case 'editorial':
        return 'aspect-[4/5] max-h-[540px]';
      case 'square':
        return 'aspect-square max-h-[480px]';
      case 'landscape':
      default:
        return 'aspect-[16/9] max-h-[440px]';
    }
  };

  return (
    <div
      ref={containerRef}
      className="relative w-full"
    >
      <div
        className={`group relative rounded-3xl overflow-hidden border border-gold/30 dark:border-white/10 shadow-luxury dark:shadow-darkcard bg-emerald-dark transition-all duration-700 ${
          isVisible ? 'opacity-100 scale-100' : 'opacity-90 scale-[0.99]'
        }`}
      >
        {/* Aspect Ratio Video Container (Zero Controls, Pure Visual) */}
        <div className={`relative w-full ${getAspectClass(video.aspect)} overflow-hidden bg-black pointer-events-none select-none`}>
          <video
            ref={videoRef}
            muted
            loop
            playsInline
            preload="none"
            poster={video.poster}
            disablePictureInPicture
            disableRemotePlayback
            onLoadedData={() => setIsLoaded(true)}
            className={`w-full h-full object-cover transition-opacity duration-700 ${
              isLoaded ? 'opacity-100' : 'opacity-90'
            }`}
          />

          {/* Luxury Ambient Shading */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent pointer-events-none" />

          {/* Floating Luxury Editorial Label */}
          <div className="absolute bottom-4 left-4 right-4 z-10 pointer-events-none flex items-end justify-between">
            <div>
              <span className="text-[10px] uppercase tracking-widest text-gold-light font-semibold block mb-0.5 drop-shadow-sm">
                0{index + 1} • {video.category}
              </span>
              <h3 className="font-serif text-base sm:text-xl font-bold text-ivory drop-shadow-md">
                {video.title}
              </h3>
            </div>

            <div className="w-2 h-2 rounded-full bg-gold animate-pulse flex-shrink-0 mb-1" />
          </div>
        </div>

        {/* Subtle Hairline Gold Corner Ornament */}
        <div className="absolute top-0 right-0 w-12 h-12 border-t border-r border-gold/30 rounded-tr-3xl pointer-events-none" />
      </div>
    </div>
  );
};

export const ScatteredVideoGallery: React.FC = () => {
  return (
    <section
      id="scattered-gallery"
      className="py-20 sm:py-28 md:py-36 bg-ivory dark:bg-emerald-noir relative overflow-hidden transition-colors duration-300"
      aria-label="Editorial Jewellery Film Gallery"
    >
      {/* Decorative Gold Radial Atmospheric Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-gold/5 dark:bg-gold/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 -right-40 w-[600px] h-[600px] bg-emerald/10 dark:bg-gold/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Editorial Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-24">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cream/70 dark:bg-emerald-surface/60 border border-gold/40 text-gold-dark dark:text-gold-light text-xs uppercase tracking-widest font-semibold mb-4">
            <Sparkles className="w-3.5 h-3.5 text-gold animate-pulse" />
            <span>THE EDITORIAL GALLERY</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-5xl md:text-6xl font-normal text-charcoal dark:text-ivory tracking-tight leading-[1.1] mb-6">
            Elegance in <span className="text-gold-gradient italic font-normal">Fluid Motion.</span>
          </h2>

          <p className="text-sm sm:text-base md:text-lg text-warmgray-dark dark:text-beige/85 font-light leading-relaxed max-w-2xl mx-auto">
            Experience the intimate brilliance of gold and gemstones as they catch natural light. 
            Scroll through our living jewellery editorial, playing seamlessly as each creation comes into view.
          </p>

          <div className="flex items-center justify-center gap-3 mt-6">
            <div className="h-px w-16 bg-gold/40 dark:bg-gold/30" />
            <span className="w-1.5 h-1.5 rotate-45 border border-gold bg-gold/30" />
            <div className="h-px w-16 bg-gold/40 dark:bg-gold/30" />
          </div>
        </div>

        {/* =========================================================================
            SPREAD 1: Royal Bridal Heritage (Portrait + Cinematic Landscape Spread)
            ========================================================================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-10 lg:gap-12 items-start mb-16 sm:mb-20 lg:mb-28">
          {/* Item 1: Vertical Portrait (5 cols) */}
          <div className="lg:col-span-5">
            <AutoplayVideoCard video={galleryVideos[0]} index={0} />
          </div>

          {/* Item 2: Landscape Masterpiece (7 cols) + Poetic Vignette */}
          <div className="lg:col-span-7 flex flex-col gap-8 lg:pt-8">
            <AutoplayVideoCard video={galleryVideos[1]} index={1} />
            
            {/* Editorial Negative Space Poetry Vignette */}
            <div className="hidden lg:block p-8 border-l-2 border-gold/40 my-2">
              <span className="text-[11px] uppercase tracking-widest text-gold-dark dark:text-gold-light font-semibold mb-2 block">
                RADHA JEWELLERS • SINCE 2003
              </span>
              <p className="font-serif text-2xl text-charcoal/90 dark:text-ivory/90 font-light italic leading-relaxed">
                “Jewellery is not merely adorned; it breathes, catches the glimmer of sacred fire, and moves in rhythm with celebratory joy.”
              </p>
            </div>
          </div>
        </div>

        {/* =========================================================================
            SPREAD 2: Artisanal Setting & Solitaire Radiance (Macro + Square Spread)
            ========================================================================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-10 lg:gap-12 items-start mb-16 sm:mb-20 lg:mb-28">
          {/* Item 3: Macro Editorial (6 cols, staggered on desktop) */}
          <div className="lg:col-span-6 lg:pt-12">
            <AutoplayVideoCard video={galleryVideos[2]} index={2} />
          </div>

          {/* Item 4: Square Solitaire Radiance (6 cols) */}
          <div className="lg:col-span-6">
            <AutoplayVideoCard video={galleryVideos[3]} index={3} />
          </div>
        </div>

        {/* =========================================================================
            SPREAD 3: Traditional Craft & Festive Drops (Landscape + Portrait Spread)
            ========================================================================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-10 lg:gap-12 items-start mb-16 sm:mb-20 lg:mb-28">
          {/* Item 5: Traditional Kundan & Polki (7 cols) */}
          <div className="lg:col-span-7 flex flex-col gap-8">
            <AutoplayVideoCard video={galleryVideos[4]} index={4} />
            
            {/* 22K Karigar Heritage Accent */}
            <div className="hidden lg:flex items-center gap-6 p-6 rounded-2xl bg-cream/50 dark:bg-emerald-surface/40 border border-gold/30">
              <span className="font-serif text-4xl sm:text-5xl font-bold text-gold-dark/60 dark:text-gold-light/40 flex-shrink-0">
                22K
              </span>
              <p className="text-xs text-warmgray-dark dark:text-beige/80 leading-relaxed font-light">
                Crafted in certified hallmark gold with ancient Kundan and Polki settings passed through generations of master karigars in Kushinagar.
              </p>
            </div>
          </div>

          {/* Item 6: Vertical Chandbalis (5 cols, staggered on desktop) */}
          <div className="lg:col-span-5 lg:pt-16">
            <AutoplayVideoCard video={galleryVideos[5]} index={5} />
          </div>
        </div>

        {/* =========================================================================
            SPREAD 4: Luminous Rings & Temple Splendour (Editorial + Landscape Spread)
            ========================================================================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-10 lg:gap-12 items-start mb-16 sm:mb-20 lg:mb-28">
          {/* Item 7: Editorial Ring Suite (5 cols) */}
          <div className="lg:col-span-5">
            <AutoplayVideoCard video={galleryVideos[6]} index={6} />
          </div>

          {/* Item 8: Temple Heritage Splendour (7 cols, staggered on desktop) */}
          <div className="lg:col-span-7 lg:pt-10">
            <AutoplayVideoCard video={galleryVideos[7]} index={7} />
          </div>
        </div>

        {/* Closing Editorial Note */}
        <div className="mt-16 sm:mt-24 text-center">
          <p className="text-xs uppercase tracking-widest text-warmgray dark:text-beige/70 font-medium">
            Every creation is available for private showroom viewing and custom bridal consultation at Hata Bazar.
          </p>
        </div>

      </div>
    </section>
  );
};
