import React from 'react';
import { Phone, MessageCircle, Navigation } from 'lucide-react';
import { siteConfig, getWhatsAppUrl, trackEvent } from '../data/siteConfig';

export const FloatingContact: React.FC = () => {
  return (
    <aside
      className="fixed bottom-0 left-0 right-0 z-30 lg:hidden p-3 bg-ivory/95 backdrop-blur-md border-t border-beige/80 shadow-[0_-5px_20px_rgba(0,0,0,0.08)] pb-[calc(0.75rem+env(safe-area-inset-bottom))]"
      aria-label="Quick Contact Bar"
    >
      <div className="max-w-md mx-auto grid grid-cols-3 gap-2">
        {/* WhatsApp Action */}
        <a
          href={getWhatsAppUrl("Hello Radha Jewellers, I'd like to enquire about your jewellery collections.")}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => trackEvent('floating_whatsapp_click')}
          className="flex items-center justify-center gap-1.5 py-2.5 px-2 rounded-xl bg-gold text-white font-medium text-xs shadow-sm hover:bg-gold-dark transition-colors"
          aria-label="Enquire with Radha Jewellers on WhatsApp"
        >
          <MessageCircle className="w-4 h-4 flex-shrink-0" />
          <span className="truncate">WhatsApp</span>
        </a>

        {/* Call Action */}
        <a
          href={siteConfig.phoneLink}
          onClick={() => trackEvent('floating_call_click')}
          className="flex items-center justify-center gap-1.5 py-2.5 px-2 rounded-xl bg-emerald text-ivory font-medium text-xs shadow-sm hover:bg-emerald-dark transition-colors"
          aria-label="Call Radha Jewellers showroom"
        >
          <Phone className="w-4 h-4 flex-shrink-0 text-gold-light" />
          <span className="truncate">Call Now</span>
        </a>

        {/* Directions Action */}
        <a
          href={siteConfig.directionsLink}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => trackEvent('floating_directions_click')}
          className="flex items-center justify-center gap-1.5 py-2.5 px-2 rounded-xl border border-beige bg-white text-charcoal font-medium text-xs hover:border-gold transition-colors"
          aria-label="Get driving directions to Radha Jewellers in Google Maps"
        >
          <Navigation className="w-4 h-4 flex-shrink-0 text-gold-dark" />
          <span className="truncate">Directions</span>
        </a>
      </div>
    </aside>
  );
};

