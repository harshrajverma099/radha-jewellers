import React, { useState } from 'react';
import { Phone, MessageCircle, MapPin, Navigation, Clock, Calendar, Sparkles, Send, CheckCircle2 } from 'lucide-react';
import { Layout } from '../components/Layout';
import { Card3D } from '../components/Card3D';
import { Stagger3D, StaggerItem3D, Scroll3DReveal } from '../components/Motion3D';
import { MapSection } from '../components/MapSection';
import { siteConfig, getWhatsAppUrl, trackEvent } from '../data/siteConfig';

export const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    date: '',
    timeSlot: 'Morning (10:00 AM - 1:00 PM)',
    collection: 'Bridal & Wedding Collection',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    trackEvent('contact_form_submit');

    const appointmentText = `Hello Radha Jewellers, I would like to book a showroom visit / consultation:
• Name: ${formData.name}
• Phone: ${formData.phone}
• Preferred Date: ${formData.date || 'Flexible'}
• Time Slot: ${formData.timeSlot}
• Collection of Interest: ${formData.collection}
${formData.message ? `• Note: ${formData.message}` : ''}`;

    setSubmitted(true);
    const waUrl = getWhatsAppUrl(appointmentText);
    window.open(waUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <Layout>
      <div className="pt-24 md:pt-32 pb-20">
        {/* Editorial Header */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gold/10 border border-gold/30 text-gold-dark text-xs uppercase tracking-widest font-semibold mb-4">
            <Sparkles className="w-3.5 h-3.5 text-gold" />
            <span>Personalized Assistance • Since 2003</span>
          </div>
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl text-charcoal font-normal tracking-tight mb-4">
            Connect With Our Showroom
          </h1>
          <p className="text-warmgray-dark max-w-2xl mx-auto text-base sm:text-lg font-light leading-relaxed">
            Whether inquiring about our festive making charge offers, custom jewellery creation, or planning your visit to our Hata showroom, we are here to welcome you.
          </p>
        </div>

        {/* Quick Contact Cards with 3D Depth */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
          <Stagger3D staggerDelay={0.12} className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Phone Card */}
            <StaggerItem3D className="flex">
              <Card3D maxTilt={10} depth={18} glare={true} className="w-full flex">
                <div className="w-full bg-white p-8 rounded-3xl border border-beige/80 shadow-luxury hover:border-gold/50 transition-all text-center flex flex-col justify-between">
                  <div>
                    <div className="w-14 h-14 rounded-2xl bg-cream flex items-center justify-center text-gold-dark mx-auto mb-5 border border-gold/30">
                      <Phone className="w-7 h-7" />
                    </div>
                    <h3 className="font-serif text-2xl font-semibold text-charcoal mb-2">Direct Telephone</h3>
                    <p className="text-xs text-warmgray-dark mb-4 leading-relaxed font-light">
                      Speak directly with our senior showroom advisors for immediate queries and appointments.
                    </p>
                    <div className="text-xl font-serif text-gold-dark font-medium mb-6">
                      {siteConfig.phoneDisplay}
                    </div>
                  </div>
                  <a
                    href={siteConfig.phoneLink}
                    onClick={() => trackEvent('contact_page_call')}
                    className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-4 rounded-full bg-emerald text-white hover:bg-emerald-light font-medium text-xs uppercase tracking-wider transition-all shadow-sm"
                  >
                    <Phone className="w-4 h-4" />
                    <span>Call Showroom</span>
                  </a>
                </div>
              </Card3D>
            </StaggerItem3D>

            {/* WhatsApp Card */}
            <StaggerItem3D className="flex">
              <Card3D maxTilt={10} depth={18} glare={true} className="w-full flex">
                <div className="w-full bg-white p-8 rounded-3xl border border-gold/40 shadow-luxury hover:border-gold transition-all text-center flex flex-col justify-between relative overflow-hidden">
                  <div className="absolute top-0 right-0 bg-gold text-white text-[10px] uppercase font-bold tracking-widest py-1 px-3 rounded-bl-xl z-10">
                    Quickest Response
                  </div>
                  <div>
                    <div className="w-14 h-14 rounded-2xl bg-cream flex items-center justify-center text-gold-dark mx-auto mb-5 border border-gold/30">
                      <MessageCircle className="w-7 h-7" />
                    </div>
                    <h3 className="font-serif text-2xl font-semibold text-charcoal mb-2">WhatsApp Concierge</h3>
                    <p className="text-xs text-warmgray-dark mb-4 leading-relaxed font-light">
                      Send photo references, request close-up videos, or verify current gold making charge offers.
                    </p>
                    <div className="text-xl font-serif text-gold-dark font-medium mb-6">
                      +91 84333 51515
                    </div>
                  </div>
                  <a
                    href={getWhatsAppUrl("Hello Radha Jewellers, I would like to make an enquiry regarding your jewellery collection.")}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => trackEvent('contact_page_wa')}
                    className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-4 rounded-full bg-gold hover:bg-gold-dark text-white font-medium text-xs uppercase tracking-wider transition-all shadow-md"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>Chat on WhatsApp</span>
                  </a>
                </div>
              </Card3D>
            </StaggerItem3D>

            {/* Visiting Hours Card */}
            <StaggerItem3D className="flex">
              <Card3D maxTilt={10} depth={18} glare={true} className="w-full flex">
                <div className="w-full bg-white p-8 rounded-3xl border border-beige/80 shadow-luxury hover:border-gold/50 transition-all text-center flex flex-col justify-between">
                  <div>
                    <div className="w-14 h-14 rounded-2xl bg-cream flex items-center justify-center text-gold-dark mx-auto mb-5 border border-gold/30">
                      <Clock className="w-7 h-7" />
                    </div>
                    <h3 className="font-serif text-2xl font-semibold text-charcoal mb-2">Showroom Hours</h3>
                    <p className="text-xs text-warmgray-dark mb-4 leading-relaxed font-light">
                      Open 7 days a week with comfortable valet parking and dedicated bridal consultation suites.
                    </p>
                    <div className="text-lg font-serif text-charcoal font-medium mb-1">
                      Monday – Sunday
                    </div>
                    <div className="text-xs text-gold-dark uppercase tracking-widest font-semibold mb-6">
                      10:00 AM – 8:00 PM IST
                    </div>
                  </div>
                  <a
                    href={siteConfig.directionsLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => trackEvent('contact_page_directions')}
                    className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-4 rounded-full border border-beige hover:border-gold bg-cream/40 text-charcoal hover:text-gold-dark font-medium text-xs uppercase tracking-wider transition-all"
                  >
                    <Navigation className="w-4 h-4" />
                    <span>Get Driving Directions</span>
                  </a>
                </div>
              </Card3D>
            </StaggerItem3D>
          </Stagger3D>
        </div>

        {/* Appointment & Consultation Booking Form with 3D Depth */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
          <Scroll3DReveal delay={0.15}>
            <Card3D maxTilt={4} depth={12} glare={false}>
              <div className="bg-white rounded-3xl border border-beige/90 p-8 sm:p-12 shadow-luxury">
            <div className="text-center mb-8">
              <span className="text-gold-dark text-xs uppercase tracking-widest font-bold">Personalized Experience</span>
              <h2 className="font-serif text-3xl sm:text-4xl text-charcoal mt-2 mb-3">
                Schedule a Private Showroom Viewing
              </h2>
              <p className="text-xs sm:text-sm text-warmgray-dark max-w-lg mx-auto font-light leading-relaxed">
                Reserve a dedicated consultation slot with our master jewellery specialists. We will prepare select designs aligned with your taste.
              </p>
            </div>

            {submitted ? (
              <div className="p-8 bg-emerald/5 border border-emerald/20 rounded-2xl text-center">
                <CheckCircle2 className="w-12 h-12 text-emerald mx-auto mb-4" />
                <h3 className="font-serif text-2xl text-charcoal mb-2">Thank You for Reaching Out</h3>
                <p className="text-sm text-warmgray-dark max-w-md mx-auto mb-6">
                  Your appointment enquiry has been initiated on WhatsApp. Our showroom coordinator will confirm your preferred timing shortly.
                </p>
                <button
                  type="button"
                  onClick={() => setSubmitted(false)}
                  className="px-6 py-2.5 rounded-full bg-cream text-charcoal text-xs uppercase tracking-wider font-medium hover:bg-gold hover:text-white transition-all"
                >
                  Book Another Visit
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs uppercase tracking-wider text-charcoal font-medium mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Ramesh Singh"
                      className="w-full px-4 py-3 rounded-xl border border-beige bg-cream/20 text-charcoal placeholder-warmgray focus:outline-none focus:border-gold text-sm transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-xs uppercase tracking-wider text-charcoal font-medium mb-2">
                      Phone Number (WhatsApp) *
                    </label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="e.g. +91 98765 43210"
                      className="w-full px-4 py-3 rounded-xl border border-beige bg-cream/20 text-charcoal placeholder-warmgray focus:outline-none focus:border-gold text-sm transition-all"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs uppercase tracking-wider text-charcoal font-medium mb-2">
                      Preferred Date
                    </label>
                    <input
                      type="date"
                      value={formData.date}
                      onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-beige bg-cream/20 text-charcoal placeholder-warmgray focus:outline-none focus:border-gold text-sm transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-xs uppercase tracking-wider text-charcoal font-medium mb-2">
                      Preferred Time Slot
                    </label>
                    <select
                      value={formData.timeSlot}
                      onChange={(e) => setFormData({ ...formData, timeSlot: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-beige bg-cream/20 text-charcoal focus:outline-none focus:border-gold text-sm transition-all"
                    >
                      <option value="Morning (10:00 AM - 1:00 PM)">Morning (10:00 AM - 1:00 PM)</option>
                      <option value="Afternoon (1:00 PM - 4:00 PM)">Afternoon (1:00 PM - 4:00 PM)</option>
                      <option value="Evening (4:00 PM - 8:00 PM)">Evening (4:00 PM - 8:00 PM)</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-wider text-charcoal font-medium mb-2">
                    Collection of Interest
                  </label>
                  <select
                    value={formData.collection}
                    onChange={(e) => setFormData({ ...formData, collection: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-beige bg-cream/20 text-charcoal focus:outline-none focus:border-gold text-sm transition-all"
                  >
                    <option value="Bridal & Wedding Collection">Bridal & Wedding Jewellery Collection</option>
                    <option value="Antique & Temple Gold">Antique & Royal Temple Heritage</option>
                    <option value="22K Gold Bangles & Kadas">22K Hallmark Gold Bangles & Kadas</option>
                    <option value="Diamond Solitaires & Rings">Certified Diamond Solitaires & Rings</option>
                    <option value="Festive Making Charges Offer">Festive Discount (Flat 70% Off Making Charges)</option>
                    <option value="Custom Bespoke Design">Custom Design & Family Heirloom Remodelling</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-wider text-charcoal font-medium mb-2">
                    Additional Notes or Preferences (Optional)
                  </label>
                  <textarea
                    rows={3}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell us if you have specific metal weight, karatage (18K/22K) or design preferences..."
                    className="w-full px-4 py-3 rounded-xl border border-beige bg-cream/20 text-charcoal placeholder-warmgray focus:outline-none focus:border-gold text-sm transition-all resize-none"
                  />
                </div>

                <div className="pt-2 text-center">
                  <button
                    type="submit"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-10 py-4 rounded-full bg-gold hover:bg-gold-dark text-white font-semibold text-xs uppercase tracking-widest transition-all shadow-md hover:shadow-lg"
                  >
                    <Send className="w-4 h-4" />
                    <span>Send Appointment Request via WhatsApp</span>
                  </button>
                  <p className="text-[11px] text-warmgray mt-3">
                    No payment required. We will confirm your visit details promptly on WhatsApp.
                  </p>
                </div>
              </form>
            )}
              </div>
            </Card3D>
          </Scroll3DReveal>
        </div>

        {/* Showroom Location Map & Directions */}
        <MapSection />
      </div>
    </Layout>
  );
};

export default ContactPage;
