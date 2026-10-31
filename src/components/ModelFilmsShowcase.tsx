import React, { useState, useRef } from 'react';
import { Play, Pause, Maximize2, MessageCircle, Sparkles, CheckCircle2, ChevronRight, X } from 'lucide-react';
import { SectionHeading } from './SectionHeading';
import { Card3D } from './Card3D';
import { Stagger3D, StaggerItem3D, Scroll3DReveal } from './Motion3D';
import { modelFilmsData, ModelFilm } from '../data/modelFilms';
import { getWhatsAppUrl, trackEvent } from '../data/siteConfig';

export const ModelFilmsShowcase: React.FC = () => {
  const [selectedFilm, setSelectedFilm] = useState<ModelFilm>(modelFilmsData[0]);
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [isPlaying, setIsPlaying] = useState<boolean>(true);
  const [modalFilm, setModalFilm] = useState<ModelFilm | null>(null);
  const mainVideoRef = useRef<HTMLVideoElement>(null);

  const categories = [
    { label: 'All Model Shoots', value: 'all' },
    { label: 'Bridal Trousseau', value: 'Bridal Heritage' },
    { label: 'Traditional Gold', value: 'Traditional Gold' },
    { label: 'Diamond & Solitaire', value: 'Diamond Jewellery' },
    { label: 'Earrings & Bangles', value: 'Earrings & Drops' },
  ];

  const filteredFilms = modelFilmsData.filter((film) => {
    if (activeCategory === 'all') return true;
    return film.category === activeCategory;
  });

  const handleSelectFilm = (film: ModelFilm) => {
    setSelectedFilm(film);
    setIsPlaying(true);
    if (mainVideoRef.current) {
      mainVideoRef.current.load();
      mainVideoRef.current.play().catch(() => {});
    }
    trackEvent('model_film_select', { film: film.title });
  };

  const toggleMainPlay = () => {
    if (!mainVideoRef.current) return;
    if (isPlaying) {
      mainVideoRef.current.pause();
      setIsPlaying(false);
    } else {
      mainVideoRef.current.play();
      setIsPlaying(true);
    }
  };

  return (
    <section
      id="model-films"
      className="py-20 md:py-28 bg-cream/30 dark:bg-emerald-noir/60 relative overflow-hidden transition-colors duration-300"
      aria-label="Model Jewellery Showcase Films"
    >
      {/* Decorative Gold Radial Glow */}
      <div className="absolute top-1/3 right-0 w-[500px] h-[500px] bg-gold/5 dark:bg-gold/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Heading */}
        <SectionHeading
          badge="Cinematic Model Shoots"
          title="Elegance in Motion"
          subtitle="Watch authentic Radha Jewellers bridal ornaments and fine collections captured in fluid, real-world motion."
        />

        {/* Category Filters */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat.value}
              onClick={() => setActiveCategory(cat.value)}
              className={`px-5 py-2 text-xs sm:text-sm font-medium rounded-full transition-all focus:outline-none focus:ring-2 focus:ring-gold ${
                activeCategory === cat.value
                  ? 'bg-emerald dark:bg-gold text-ivory dark:text-charcoal shadow-sm'
                  : 'bg-white dark:bg-emerald-surface text-charcoal dark:text-ivory border border-beige dark:border-white/10 hover:border-gold hover:text-gold-dark dark:hover:text-gold-light'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Featured Cinema Player Stage */}
        <div className="mb-14 bg-white dark:bg-emerald-surface rounded-3xl overflow-hidden border border-beige/80 dark:border-white/10 shadow-luxury dark:shadow-darkcard grid grid-cols-1 lg:grid-cols-12">
          {/* Main Video Viewport (Col 7) */}
          <div className="lg:col-span-7 relative h-72 sm:h-96 lg:h-[500px] bg-black">
            <video
              ref={mainVideoRef}
              key={selectedFilm.id}
              autoPlay
              muted
              loop
              playsInline
              poster={selectedFilm.posterSrc}
              className="w-full h-full object-cover"
            >
              <source src={selectedFilm.videoSrc} type="video/mp4" />
            </video>

            {/* Video Controls Overlay */}
            <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between z-20">
              <div className="flex items-center gap-2">
                <button
                  onClick={toggleMainPlay}
                  className="p-2.5 rounded-full bg-black/60 backdrop-blur-md border border-white/20 text-ivory hover:text-gold hover:border-gold transition-colors focus:outline-none"
                  aria-label={isPlaying ? 'Pause film' : 'Play film'}
                >
                  {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
                </button>
                <span className="px-3 py-1 rounded-full text-xs font-medium bg-black/60 backdrop-blur-md text-ivory border border-white/15">
                  {selectedFilm.duration} Reel
                </span>
              </div>

              <button
                onClick={() => setModalFilm(selectedFilm)}
                className="p-2.5 rounded-full bg-black/60 backdrop-blur-md border border-white/20 text-ivory hover:text-gold hover:border-gold transition-colors focus:outline-none"
                title="View Fullscreen"
                aria-label="View Fullscreen film"
              >
                <Maximize2 className="w-4 h-4" />
              </button>
            </div>

            {/* Category watermark tag */}
            <div className="absolute top-4 left-4 z-20">
              <span className="px-3.5 py-1 rounded-full text-xs font-semibold tracking-wider uppercase bg-gold text-white shadow-md">
                {selectedFilm.category}
              </span>
            </div>
          </div>

          {/* Film Narrative & Ornaments Details (Col 5) */}
          <div className="lg:col-span-5 p-6 sm:p-8 lg:p-10 flex flex-col justify-between bg-white dark:bg-emerald-surface">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-gold-dark dark:text-gold-light font-semibold">
                <Sparkles className="w-3.5 h-3.5 text-gold" />
                <span>FEATURED MODEL FILM</span>
              </div>

              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-charcoal dark:text-ivory leading-tight">
                {selectedFilm.title}
              </h3>

              <p className="text-xs sm:text-sm text-gold-dark dark:text-gold-light font-medium italic">
                {selectedFilm.subtitle}
              </p>

              <p className="text-sm text-warmgray-dark dark:text-beige/85 leading-relaxed font-light">
                {selectedFilm.description}
              </p>

              {/* Highlight Ornaments Breakdown */}
              <div className="pt-3 border-t border-beige/80 dark:border-white/10 space-y-2">
                <span className="text-xs font-semibold uppercase tracking-wider text-charcoal dark:text-ivory block">
                  Featured Jewellery Highlights:
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {selectedFilm.highlightPieces.map((piece, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-xs text-warmgray-dark dark:text-beige/75">
                      <CheckCircle2 className="w-3.5 h-3.5 text-gold flex-shrink-0" />
                      <span>{piece}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Direct WhatsApp CTA for this specific film */}
            <div className="pt-6 mt-6 border-t border-beige/80 dark:border-white/10">
              <a
                href={getWhatsAppUrl(`Hello Radha Jewellers, I saw the "${selectedFilm.title}" model film on your website and would like to enquire about this jewellery.`)}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackEvent('model_film_whatsapp_click', { film: selectedFilm.title })}
                className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-5 rounded-full bg-gold hover:bg-gold-dark text-white font-semibold text-xs uppercase tracking-wider transition-all shadow-sm"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Enquire About This Look on WhatsApp</span>
              </a>
            </div>
          </div>
        </div>

        {/* Thumbnail Film Carousel Track */}
        <div>
          <div className="flex items-center justify-between mb-4">
            <h4 className="font-serif text-lg font-bold text-charcoal dark:text-ivory">
              Explore All Model Films ({filteredFilms.length})
            </h4>
            <span className="text-xs text-warmgray dark:text-beige/70">
              Click any card to play in high definition
            </span>
          </div>

          <Stagger3D staggerDelay={0.08} className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
            {filteredFilms.map((film) => {
              const isCurrent = film.id === selectedFilm.id;
              return (
                <StaggerItem3D key={film.id}>
                  <Card3D maxTilt={8} depth={14} glare={true}>
                    <div
                      onClick={() => handleSelectFilm(film)}
                      className={`group relative rounded-2xl overflow-hidden cursor-pointer border transition-all ${
                        isCurrent
                          ? 'border-gold shadow-goldglow ring-2 ring-gold/40'
                          : 'border-beige/80 dark:border-white/10 hover:border-gold/50 shadow-luxury dark:shadow-darkcard'
                      } bg-white dark:bg-emerald-surface`}
                    >
                      {/* Thumbnail Image / Preview */}
                      <div className="relative h-44 overflow-hidden bg-charcoal">
                        <img
                          src={film.posterSrc}
                          alt={film.title}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-108"
                          loading="lazy"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />

                        {/* Play Icon Badge */}
                        <div className="absolute inset-0 flex items-center justify-center opacity-85 group-hover:opacity-100 group-hover:scale-110 transition-all">
                          <div className={`w-11 h-11 rounded-full flex items-center justify-center ${
                            isCurrent ? 'bg-gold text-white' : 'bg-black/60 text-white backdrop-blur-sm'
                          } shadow-lg`}>
                            <Play className="w-4 h-4 ml-0.5 fill-current" />
                          </div>
                        </div>

                        {/* Duration Pill */}
                        <div className="absolute bottom-2.5 right-2.5">
                          <span className="px-2 py-0.5 rounded text-[10px] font-semibold bg-black/70 text-white backdrop-blur-sm">
                            {film.duration}
                          </span>
                        </div>

                        {/* Category */}
                        <div className="absolute top-2.5 left-2.5">
                          <span className="px-2.5 py-0.5 rounded-full text-[10px] font-semibold uppercase tracking-wider bg-gold text-white shadow-sm">
                            {film.category}
                          </span>
                        </div>
                      </div>

                      {/* Card Info */}
                      <div className="p-3.5 space-y-1">
                        <h5 className="font-serif font-bold text-sm text-charcoal dark:text-ivory line-clamp-1 group-hover:text-gold-dark dark:group-hover:text-gold-light transition-colors">
                          {film.title}
                        </h5>
                        <p className="text-[11px] text-warmgray-dark dark:text-beige/75 line-clamp-1 font-light">
                          {film.subtitle}
                        </p>
                      </div>
                    </div>
                  </Card3D>
                </StaggerItem3D>
              );
            })}
          </Stagger3D>
        </div>
      </div>

      {/* Fullscreen Modal Cinema View */}
      {modalFilm && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-md p-4 sm:p-8"
          role="dialog"
          aria-modal="true"
        >
          <div className="relative w-full max-w-4xl bg-black rounded-3xl overflow-hidden border border-gold/40 shadow-2xl">
            <button
              onClick={() => setModalFilm(null)}
              className="absolute top-4 right-4 z-30 p-2.5 rounded-full bg-black/60 text-white hover:bg-gold transition-colors focus:outline-none"
              aria-label="Close cinema view"
            >
              <X className="w-5 h-5" />
            </button>

            <video
              autoPlay
              controls
              playsInline
              className="w-full max-h-[75vh] object-contain bg-black"
            >
              <source src={modalFilm.videoSrc} type="video/mp4" />
            </video>

            <div className="p-6 bg-emerald-dark text-ivory flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div>
                <span className="text-xs uppercase tracking-widest text-gold-light font-semibold block mb-1">
                  {modalFilm.category}
                </span>
                <h4 className="font-serif text-xl sm:text-2xl font-bold">{modalFilm.title}</h4>
                <p className="text-xs text-beige/80">{modalFilm.subtitle}</p>
              </div>

              <a
                href={getWhatsAppUrl(`Hello Radha Jewellers, I am watching the full cinema film "${modalFilm.title}" and would like to enquire about the jewellery.`)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gold hover:bg-gold-dark text-white font-semibold text-xs uppercase tracking-wider transition-all shadow-sm"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Enquire on WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
