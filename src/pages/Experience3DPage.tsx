import React, { useState } from 'react';
import { Sparkles, Eye, Compass, ShieldCheck, MessageCircle, MapPin, Layers, Sun, Moon } from 'lucide-react';
import { Layout } from '../components/Layout';
import { SectionHeading } from '../components/SectionHeading';
import { JewelleryViewer3D } from '../components/JewelleryViewer3D';
import { models3dData, JewelleryModel3D } from '../data/models3d';
import { getWhatsAppUrl, siteConfig, trackEvent } from '../data/siteConfig';

export const Experience3DPage: React.FC = () => {
  const [selectedModel, setSelectedModel] = useState<JewelleryModel3D>(models3dData[0]);

  return (
    <Layout>
      <div className="pt-20 sm:pt-24 pb-20 bg-ivory text-charcoal">
        {/* Editorial Header */}
      <section className="relative py-16 bg-emerald-dark text-ivory overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#C6A15B_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-gold/40 text-gold-light text-xs uppercase tracking-widest mb-4 bg-black/40 backdrop-blur-md">
            <Sparkles className="w-3.5 h-3.5 text-gold animate-spin" />
            <span>REAL-TIME 3D ATELIER</span>
          </div>

          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight mb-4">
            The 3D Jewellery <span className="text-gold-gradient italic font-normal">Experience.</span>
          </h1>

          <p className="text-base sm:text-lg text-beige/90 max-w-2xl mx-auto font-light leading-relaxed">
            Discover the details, explore the design and experience timeless elegance from every angle with real-time 360° inspection.
          </p>
        </div>
      </section>

      {/* Main 3D Viewing Area */}
      <section className="py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <JewelleryViewer3D
            initialModelId={selectedModel.id}
            onModelSelect={(model) => setSelectedModel(model)}
          />
        </div>

        {/* Technical Breakdown & Specs Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start bg-white p-8 sm:p-10 rounded-3xl border border-beige shadow-luxury">
          {/* Left Details */}
          <div className="lg:col-span-7 space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs uppercase tracking-widest text-gold-dark font-medium bg-cream/60">
              <Compass className="w-3.5 h-3.5 text-gold" />
              <span>DESIGN INSPECTION • {selectedModel.category}</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-charcoal">
              {selectedModel.name}
            </h2>

            <p className="text-base text-warmgray-dark leading-relaxed font-light">
              {selectedModel.description}
            </p>

            <div className="pt-3 grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
              <div className="p-4 rounded-xl bg-cream/40 border border-beige space-y-1">
                <span className="text-warmgray block uppercase tracking-wider text-[10px]">Precious Metal</span>
                <span className="font-serif text-base font-bold text-charcoal block">{selectedModel.metalType}</span>
                <span className="text-[11px] text-warmgray-dark">Rich 22K/18K metallic formulation</span>
              </div>

              <div className="p-4 rounded-xl bg-cream/40 border border-beige space-y-1">
                <span className="text-warmgray block uppercase tracking-wider text-[10px]">Gemstone Detailing</span>
                <span className="font-serif text-base font-bold text-charcoal block">{selectedModel.gemstone}</span>
                <span className="text-[11px] text-warmgray-dark">High-refractive index faceted stone</span>
              </div>
            </div>
          </div>

          {/* Right Action & Showroom Notice */}
          <div className="lg:col-span-5 p-6 rounded-2xl bg-cream/30 border border-beige space-y-5">
            <div>
              <span className="font-serif text-xl font-bold text-charcoal block mb-1">
                Enquire or Customise
              </span>
              <p className="text-xs text-warmgray-dark leading-relaxed font-light">
                Interested in this 3D design or wish to discuss custom alterations with our master karigars? Connect directly with our team.
              </p>
            </div>

            <a
              href={getWhatsAppUrl(selectedModel.whatsappMessage)}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackEvent('3d_page_whatsapp_click', { model: selectedModel.name })}
              className="w-full flex items-center justify-center gap-2 py-3.5 px-4 rounded-xl bg-gold hover:bg-gold-dark text-white font-semibold text-xs uppercase tracking-wider transition-all shadow-sm"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Enquire About This 3D Design</span>
            </a>

            <div className="pt-3 border-t border-beige/80 text-[11px] text-warmgray space-y-1.5">
              <div className="flex items-center gap-1.5 text-charcoal font-medium">
                <MapPin className="w-3.5 h-3.5 text-gold-dark" />
                <span>Showroom: Hata Main Road, Kushinagar</span>
              </div>
              <p className="leading-relaxed">
                * Note: Real creations feature unique handcrafted nuances that are best experienced in person.
              </p>
            </div>
          </div>
        </div>
      </section>
      </div>
    </Layout>
  );
};
