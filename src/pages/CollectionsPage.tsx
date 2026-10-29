import React from 'react';
import { Layout } from '../components/Layout';
import { Collections } from '../components/Collections';
import { Sparkles } from 'lucide-react';

export const CollectionsPage: React.FC = () => {
  return (
    <Layout>
      <div className="pt-20 sm:pt-24 pb-20 bg-ivory text-charcoal">
        {/* Editorial Header */}
        <section className="relative py-16 bg-emerald-dark text-ivory overflow-hidden">
          <div className="absolute inset-0 opacity-15 bg-[radial-gradient(#C6A15B_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />
          <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-gold/40 text-gold-light text-xs uppercase tracking-widest mb-4 bg-black/40 backdrop-blur-md">
              <Sparkles className="w-3.5 h-3.5 text-gold" />
              <span>CURATED SHOWROOM CATALOG</span>
            </div>

            <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight mb-4">
              Our Fine <span className="text-gold-gradient italic font-normal">Collections.</span>
            </h1>

            <p className="text-base sm:text-lg text-beige/90 max-w-2xl mx-auto font-light leading-relaxed">
              Explore twelve distinct jewellery categories crafted for cherished traditions, unforgettable bridal ceremonies, and the beauty of everyday poise.
            </p>
          </div>
        </section>

        {/* Complete Collections Component */}
        <Collections />
      </div>
    </Layout>
  );
};

export default CollectionsPage;
