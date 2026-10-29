import React from 'react';
import { Sparkles, HeartHandshake, Award, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { SectionHeading } from './SectionHeading';
import { Card3D } from './Card3D';
import { Floating3D, Scroll3DReveal, Stagger3D, StaggerItem3D } from './Motion3D';
import { siteConfig } from '../data/siteConfig';

export const About: React.FC = () => {
  const pillars = [
    {
      icon: Sparkles,
      title: 'Heritage & Tradition',
      description:
        'Jewellery that reflects the richness of Indian culture and the sacred significance of life’s most meaningful traditions and milestones.',
    },
    {
      icon: HeartHandshake,
      title: 'Trust & Relationships',
      description:
        'A warm, personal approach built since 2003, assisting families in discovering jewellery for weddings, celebrations, and cherished everyday memories.',
    },
    {
      icon: Award,
      title: 'Craftsmanship & Beauty',
      description:
        'An enduring appreciation for intricate details, fine finishes, and the timeless artistry that gives gold and precious stones their lasting splendour.',
    },
  ];

  return (
    <section id="about" className="py-20 md:py-28 bg-ivory relative" aria-label="About Radha Jewellers">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <SectionHeading
          badge="Our Heritage"
          title="A Legacy Woven in Elegance"
          subtitle="Where cherished Indian traditions meet thoughtful design and heartfelt relationships."
        />

        {/* Editorial Layout: Image Composition + Narrative */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Visual Showcase: Showroom & Craft Imagery in 3D */}
          <div className="lg:col-span-5 relative">
            <Scroll3DReveal direction="right" delay={0.1}>
              <Card3D maxTilt={6} depth={20} glare={true}>
                <div className="relative z-10 rounded-2xl overflow-hidden shadow-luxury border-2 border-beige bg-white p-2">
                  <img
                    src="/images/showroom/showroom-interior.jpg"
                    alt="Radha Jewellers Showroom Experience in Hata, Kushinagar"
                    className="w-full h-[380px] sm:h-[450px] object-cover rounded-xl"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-emerald-dark/60 via-transparent to-transparent pointer-events-none" />
                  <div className="absolute bottom-6 left-6 right-6 text-ivory">
                    <p className="text-xs uppercase tracking-widest text-gold-light font-medium">SHOWROOM EXPERIENCE</p>
                    <p className="font-serif text-lg font-semibold">Welcoming Generations Since 2003</p>
                  </div>
                </div>
              </Card3D>
            </Scroll3DReveal>

            {/* Overlapping Floating Since 2003 Heritage Plaque */}
            <div className="absolute -bottom-6 -right-4 sm:-right-6 z-20">
              <Floating3D amplitude={5} duration={4.5}>
                <div className="bg-emerald p-6 rounded-xl shadow-luxurydark border border-gold/40 max-w-[200px] text-center transform hover:scale-105 transition-transform">
                  <span className="block text-xs uppercase tracking-widest text-gold-light font-semibold mb-1">
                    FOUNDED
                  </span>
                  <span className="font-serif text-3xl font-bold text-ivory block leading-none mb-1">
                    2003
                  </span>
                  <span className="text-[10px] text-beige/80 uppercase tracking-widest block">
                    OVER TWO DECADES OF TRUST
                  </span>
                </div>
              </Floating3D>
            </div>

            {/* Subtle decorative gold frame backdrop */}
            <div className="absolute -top-4 -left-4 w-full h-full border border-gold/30 rounded-2xl -z-0 pointer-events-none hidden sm:block" />
          </div>

          {/* Narrative Content with 3D Depth */}
          <div className="lg:col-span-7 space-y-6">
            <Scroll3DReveal direction="left" delay={0.2}>
              <div className="inline-block">
                <p className="font-serif text-2xl sm:text-3xl text-charcoal font-semibold leading-relaxed mb-4">
                  “Since 2003, Radha Jewellers has represented the enduring beauty of jewellery and the emotions attached to life’s most meaningful moments.”
                </p>
              </div>

              <p className="text-base sm:text-lg text-warmgray-dark leading-relaxed font-light mb-4">
                Inspired by Indian heritage and an appreciation for timeless elegance, our brand brings together tradition, thoughtful design and a welcoming showroom experience in Hata, Kushinagar.
              </p>

              <p className="text-sm sm:text-base text-warmgray-dark leading-relaxed">
                We believe jewellery is far more than adornment — it is an emotion passed through generations, an auspicious blessing on wedding days, and a personal companion to the milestones that shape family histories.
              </p>
            </Scroll3DReveal>

            {/* 3 Pillars Grid with Staggered 3D Tilt */}
            <Stagger3D staggerDelay={0.15} className="pt-6 grid grid-cols-1 sm:grid-cols-3 gap-6 border-t border-beige">
              {pillars.map((pillar) => {
                const Icon = pillar.icon;
                return (
                  <StaggerItem3D key={pillar.title}>
                    <Card3D maxTilt={8} depth={10} glare={false} className="h-full">
                      <div className="space-y-2 p-3 rounded-xl bg-white/50 border border-beige/60 h-full hover:border-gold/40 transition-colors">
                        <div className="w-10 h-10 rounded-lg bg-cream flex items-center justify-center text-gold-dark border border-beige/80">
                          <Icon className="w-5 h-5" />
                        </div>
                        <h3 className="font-serif font-semibold text-lg text-charcoal">
                          {pillar.title}
                        </h3>
                        <p className="text-xs sm:text-sm text-warmgray leading-relaxed">
                          {pillar.description}
                        </p>
                      </div>
                    </Card3D>
                  </StaggerItem3D>
                );
              })}
            </Stagger3D>

            {/* Read Full Story Button */}
            <Scroll3DReveal delay={0.4}>
              <div className="pt-4">
                <Link
                  to="/about"
                  className="inline-flex items-center gap-2 text-xs uppercase tracking-widest font-semibold text-gold-dark hover:text-charcoal transition-colors group"
                >
                  <span>Read Our Full 20-Year Heritage Story</span>
                  <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </Scroll3DReveal>
          </div>
        </div>
      </div>
    </section>
  );
};

