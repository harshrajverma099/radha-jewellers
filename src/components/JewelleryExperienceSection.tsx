import React, { useState } from 'react';
import { Sparkles, Eye, ShieldCheck, HeartHandshake, Compass, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { SectionHeading } from './SectionHeading';
import { JewelleryViewer3D } from './JewelleryViewer3D';
import { JewelleryModel3D, models3dData } from '../data/models3d';
import { getWhatsAppUrl, trackEvent } from '../data/siteConfig';

export const JewelleryExperienceSection: React.FC = () => {
  const [activeModel, setActiveModel] = useState<JewelleryModel3D>(models3dData[0]);

  return (
    <section
      id="experience3d"
      className="py-20 md:py-28 bg-ivory relative overflow-hidden"
      aria-label="Interactive 3D Jewellery Experience"
    >
      {/* Decorative Gold Radial Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-gold/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Heading */}
        <SectionHeading
          badge="Interactive 3D Artistry"
          title="The Jewellery Experience"
          subtitle="Discover the details, explore the design and experience timeless elegance from every angle."
        />

        {/* 3D Showcase Card */}
        <div className="mb-12">
          <JewelleryViewer3D
            initialModelId={activeModel.id}
            onModelSelect={(model) => setActiveModel(model)}
          />
        </div>

        {/* Informative Editorial Details Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start bg-white p-8 sm:p-10 rounded-3xl border border-beige/80 shadow-luxury">
          {/* Left: Model Narrative */}
          <div className="lg:col-span-7 space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs uppercase tracking-widest text-gold-dark font-medium bg-cream/60">
              <Compass className="w-3.5 h-3.5 text-gold" />
              <span>DESIGN INSPECTION • {activeModel.category}</span>
            </div>

            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-charcoal">
              {activeModel.name}
            </h3>

            <p className="text-base text-warmgray-dark leading-relaxed font-light">
              {activeModel.description}
            </p>

            <div className="pt-2 flex flex-wrap gap-4 text-xs text-charcoal">
              <div className="p-3 rounded-xl bg-cream/40 border border-beige flex items-center gap-2.5">
                <span className="w-2 h-2 rounded-full bg-gold" />
                <span className="font-medium text-warmgray-dark">Metal:</span>
                <span className="font-semibold">{activeModel.metalType}</span>
              </div>

              <div className="p-3 rounded-xl bg-cream/40 border border-beige flex items-center gap-2.5">
                <span className="w-2 h-2 rounded-full bg-emerald" />
                <span className="font-medium text-warmgray-dark">Stone Setting:</span>
                <span className="font-semibold">{activeModel.gemstone}</span>
              </div>
            </div>
          </div>

          {/* Right: Showroom Guidance & Authenticity Guarantee */}
          <div className="lg:col-span-5 p-6 rounded-2xl bg-cream/30 border border-beige space-y-4">
            <div className="flex items-center gap-2 text-gold-dark font-serif font-bold text-lg">
              <Sparkles className="w-5 h-5 text-gold" />
              <span>Experience in Person</span>
            </div>

            <p className="text-xs text-warmgray-dark leading-relaxed">
              * This real-time 3D showcase offers an interactive architectural exploration of jewellery aesthetics and forms. Real creations feature unique artisanal nuances that can be appreciated firsthand at our showroom.
            </p>

            <div className="pt-2 border-t border-beige/80 flex items-center justify-between text-xs">
              <span className="text-warmgray font-medium">Showroom Location:</span>
              <span className="font-semibold text-charcoal">Hata, Kushinagar</span>
            </div>

            <div className="pt-2 flex flex-col gap-2.5">
              <Link
                to="/3d-experience"
                className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-gold hover:bg-gold-dark text-white font-semibold text-xs uppercase tracking-wider transition-all shadow-sm"
              >
                <Sparkles className="w-4 h-4 text-white" />
                <span>Open Dedicated 3D Atelier Page</span>
              </Link>

              <a
                href={getWhatsAppUrl(activeModel.whatsappMessage)}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackEvent('3d_card_whatsapp_click', { model: activeModel.name })}
                className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-emerald hover:bg-emerald-dark text-ivory font-semibold text-xs uppercase tracking-wider transition-all shadow-sm"
              >
                <span>Enquire About Similar Showroom Designs</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

