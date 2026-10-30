import React from 'react';
import { Link } from 'react-router-dom';
import { Sparkles, HeartHandshake, Award, ShieldCheck, ArrowRight, MapPin, Calendar } from 'lucide-react';
import { Layout } from '../components/Layout';
import { SectionHeading } from '../components/SectionHeading';
import { Card3D } from '../components/Card3D';
import { Stagger3D, StaggerItem3D, Scroll3DReveal } from '../components/Motion3D';
import { siteConfig } from '../data/siteConfig';

export const AboutPage: React.FC = () => {
  const milestones = [
    {
      year: '2003',
      title: 'Showroom Inception in Hata',
      desc: 'Founded with a dedication to purity, traditional Indian artistry, and authentic personal service in Kushinagar.',
    },
    {
      year: '2010',
      title: 'Bridal Heritage Collections',
      desc: 'Established our signature bridal trousseau curation, dressing brides across Uttar Pradesh with heirloom ornaments.',
    },
    {
      year: '2018',
      title: 'Showroom Modernization',
      desc: 'Enhanced our physical showroom experience with private consultation vitrines and expanded diamond jewellery suites.',
    },
    {
      year: 'Today',
      title: 'A Legacy of Trust',
      desc: 'Over two decades of celebrated relationships, combining time-honoured heritage with modern 3D design appreciation.',
    },
  ];

  return (
    <Layout>
      <div className="pt-20 sm:pt-24 pb-20 bg-ivory dark:bg-emerald-noir text-charcoal dark:text-ivory transition-colors duration-300">
        {/* Editorial Header Banner */}
      <section className="relative py-16 sm:py-24 bg-emerald-dark text-ivory overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="/images/showroom/showroom-interior.jpg"
            alt="Radha Jewellers Showroom Interior"
            className="w-full h-full object-cover opacity-25"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-emerald-dark via-emerald-dark/80 to-transparent" />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-gold/40 text-gold-light text-xs uppercase tracking-widest mb-4 bg-black/30 backdrop-blur-md">
            <span className="w-1.5 h-1.5 rounded-full bg-gold" />
            <span>ESTABLISHED SINCE 2003</span>
          </div>

          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight mb-4">
            A Legacy Woven in <span className="text-gold-gradient italic font-normal">Elegance.</span>
          </h1>

          <p className="text-base sm:text-lg text-beige/90 max-w-2xl mx-auto font-light leading-relaxed">
            Discover the story of Radha Jewellers — where cherished Indian traditions meet thoughtful design, uncompromising purity, and heartfelt relationships.
          </p>
        </div>
      </section>

      {/* Main Narrative & Showroom Composition */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          <div className="lg:col-span-6 relative">
            <Scroll3DReveal direction="right" delay={0.1}>
              <Card3D maxTilt={7} depth={22} glare={true}>
                <div className="rounded-3xl overflow-hidden border-2 border-beige dark:border-white/10 shadow-luxury dark:shadow-darkcard bg-white dark:bg-emerald-card p-2">
                  <img
                    src="/images/showroom/showroom-interior.jpg"
                    alt="Radha Jewellers Showroom"
                    className="w-full h-[450px] object-cover rounded-2xl"
                  />
                </div>
              </Card3D>
            </Scroll3DReveal>
            {/* Heritage Plaque */}
            <div className="absolute -bottom-6 -right-4 sm:-right-6 bg-emerald dark:bg-emerald-surface p-6 rounded-2xl shadow-luxurydark border border-gold/40 text-ivory text-center max-w-[210px] z-10">
              <span className="block text-xs uppercase tracking-widest text-gold-light font-semibold mb-1">
                OUR PROMISE
              </span>
              <span className="font-serif text-2xl font-bold block mb-1">
                Since 2003
              </span>
              <span className="text-[10px] text-beige/80 uppercase tracking-widest block">
                Two Decades of Timeless Beauty
              </span>
            </div>
          </div>

          <div className="lg:col-span-6 space-y-6">
            <div className="inline-block">
              <span className="text-xs uppercase tracking-widestluxury text-gold-dark dark:text-gold-light font-semibold">
                OUR BEGINNINGS
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-charcoal dark:text-ivory mt-1">
                Rooted in Kushinagar, Celebrated Across Generations
              </h2>
            </div>

            <p className="text-base text-warmgray-dark dark:text-beige/85 leading-relaxed font-light">
              Since 2003, Radha Jewellers has represented the enduring beauty of jewellery and the emotions attached to life’s most meaningful moments. Located in Hata, Kushinagar, our showroom has been a cornerstone for families preparing for weddings, festive occasions, and milestone celebrations.
            </p>

            <p className="text-base text-warmgray-dark dark:text-beige/75 leading-relaxed font-light">
              We believe jewellery is far more than adornment — it is a blessing passed down through generations, an emotional heirloom, and a symbol of lasting relationships built on mutual respect and integrity.
            </p>

            <div className="pt-4 flex flex-wrap gap-4">
              <Link
                to="/3d-experience"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gold hover:bg-gold-dark text-white font-semibold text-xs uppercase tracking-wider transition-all shadow-sm"
              >
                <Sparkles className="w-4 h-4" />
                <span>Explore in 3D</span>
              </Link>

              <Link
                to="/showroom"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-beige dark:border-white/15 hover:border-gold dark:hover:border-gold-light bg-cream/30 dark:bg-emerald-surface/60 text-charcoal dark:text-ivory hover:text-gold-dark dark:hover:text-gold-light font-medium text-xs uppercase tracking-wider transition-all"
              >
                <MapPin className="w-4 h-4 text-gold-dark dark:text-gold-light" />
                <span>Visit Showroom in Hata</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 3 Core Pillars */}
      <section className="py-16 bg-cream/40 dark:bg-emerald-midnight/40 border-y border-beige dark:border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Brand Values"
            title="The Three Pillars of Radha Jewellers"
            subtitle="The enduring principles that define our showroom hospitality and artistic direction."
          />

          <Stagger3D staggerDelay={0.12} className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <StaggerItem3D className="flex">
              <Card3D maxTilt={8} depth={16} glare={true} className="w-full flex">
                <div className="w-full bg-white dark:bg-emerald-surface p-8 rounded-2xl border border-beige dark:border-white/10 shadow-luxury dark:shadow-darkcard space-y-3">
                  <div className="w-12 h-12 rounded-xl bg-ivory dark:bg-emerald-midnight flex items-center justify-center text-gold-dark dark:text-gold-light border border-gold/30">
                    <Sparkles className="w-6 h-6" />
                  </div>
                  <h3 className="font-serif font-bold text-xl text-charcoal dark:text-ivory">Heritage & Tradition</h3>
                  <p className="text-sm text-warmgray-dark dark:text-beige/75 leading-relaxed font-light">
                    Jewellery that pays homage to traditional Indian artistry — including Kundan, Polki, Nakshi, and filigree craftsmanship that honors cultural identity.
                  </p>
                </div>
              </Card3D>
            </StaggerItem3D>

            <StaggerItem3D className="flex">
              <Card3D maxTilt={8} depth={16} glare={true} className="w-full flex">
                <div className="w-full bg-white dark:bg-emerald-surface p-8 rounded-2xl border border-beige dark:border-white/10 shadow-luxury dark:shadow-darkcard space-y-3">
                  <div className="w-12 h-12 rounded-xl bg-ivory dark:bg-emerald-midnight flex items-center justify-center text-gold-dark dark:text-gold-light border border-gold/30">
                    <HeartHandshake className="w-6 h-6" />
                  </div>
                  <h3 className="font-serif font-bold text-xl text-charcoal dark:text-ivory">Trust & Relationships</h3>
                  <p className="text-sm text-warmgray-dark dark:text-beige/75 leading-relaxed font-light">
                    A warm, family-oriented showroom environment where clients receive honest guidance, transparent advice, and thoughtful personal recommendations.
                  </p>
                </div>
              </Card3D>
            </StaggerItem3D>

            <StaggerItem3D className="flex">
              <Card3D maxTilt={8} depth={16} glare={true} className="w-full flex">
                <div className="w-full bg-white dark:bg-emerald-surface p-8 rounded-2xl border border-beige dark:border-white/10 shadow-luxury dark:shadow-darkcard space-y-3">
                  <div className="w-12 h-12 rounded-xl bg-ivory dark:bg-emerald-midnight flex items-center justify-center text-gold-dark dark:text-gold-light border border-gold/30">
                    <Award className="w-6 h-6" />
                  </div>
                  <h3 className="font-serif font-bold text-xl text-charcoal dark:text-ivory">Craftsmanship & Beauty</h3>
                  <p className="text-sm text-warmgray-dark dark:text-beige/75 leading-relaxed font-light">
                    An uncompromising dedication to balanced proportions, refined finishing, and durable gold settings that retain their majestic grace for lifetimes.
                  </p>
                </div>
              </Card3D>
            </StaggerItem3D>
          </Stagger3D>
        </div>
      </section>

      {/* Historical Milestones */}
      <section className="py-20 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Two Decades"
          title="Milestones of Our Journey"
          subtitle="A heritage rooted in dedication, craftsmanship, and community relationships."
        />

        <div className="space-y-6">
          {milestones.map((m) => (
            <div
              key={m.year}
              className="flex flex-col sm:flex-row items-start sm:items-center gap-6 p-6 rounded-2xl bg-white dark:bg-emerald-surface border border-beige dark:border-white/10 shadow-sm dark:shadow-darkcard"
            >
              <div className="w-20 sm:w-28 flex-shrink-0">
                <span className="font-serif text-2xl sm:text-3xl font-bold text-gold-dark dark:text-gold-light block">
                  {m.year}
                </span>
              </div>
              <div className="flex-1 space-y-1">
                <h4 className="font-serif font-bold text-lg text-charcoal dark:text-ivory">{m.title}</h4>
                <p className="text-sm text-warmgray-dark dark:text-beige/75 font-light leading-relaxed">{m.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
      </div>
    </Layout>
  );
};
