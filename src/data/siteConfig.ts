/**
 * Radha Jewellers — Centralized Site & Business Configuration
 * Update phone numbers, addresses, maps, social links, and brand details here.
 */

export interface ShowroomAddress {
  line1: string;
  landmark: string;
  city: string;
  district: string;
  state: string;
  country: string;
  pincode?: string;
  fullFormatted: string;
  latitude: number;
  longitude: number;
}

export interface SiteConfig {
  brandName: string;
  brandSignature: string;
  established: string;
  tagline: string;
  subTagline: string;
  phoneDisplay: string;
  phoneLink: string;
  whatsappNumber: string;
  address: ShowroomAddress;
  googleMapsLink: string;
  directionsLink: string;
  shortMapsLink: string;
  embedMapUrl: string;
  openingHours?: string;
  instagramUrl?: string;
  googleReviewsUrl?: string;
  websiteUrl?: string;
}

export const siteConfig: SiteConfig = {
  brandName: "Radha Jewellers",
  brandSignature: "Since 2003",
  established: "2003",
  tagline: "An Eternal Legacy of Elegance.",
  subTagline: "Discover timeless jewellery inspired by Indian tradition, thoughtful craftsmanship and the beauty of life’s most cherished moments.",
  phoneDisplay: "+91 8433351515",
  phoneLink: "tel:+918433351515",
  whatsappNumber: "918433351515",
  address: {
    line1: "Hata Bazar",
    landmark: "Ucchtar Prathmik Kanya Vidyalaya ke saamne",
    city: "Hata",
    district: "Kushinagar",
    state: "Uttar Pradesh",
    pincode: "274203",
    country: "India",
    fullFormatted: "Hata bazar, Ucchtar Prathmik Kanya Vidyalaya ke saamne, Kushinagar, Hata, Uttar Pradesh 274203",
    latitude: 26.741685,
    longitude: 83.742696,
  },
  // Universal Google Maps search URL (guaranteed to open verified Radha Jewellers pin on all devices)
  googleMapsLink: "https://www.google.com/maps/search/?api=1&query=Radha+Jewellers,+Hata+bazar,+Ucchtar+Prathmik+Kanya+Vidyalaya+ke+saamne,+Kushinagar,+Hata,+Uttar+Pradesh+274203",
  // Universal Google Maps turn-by-turn directions URL
  directionsLink: "https://www.google.com/maps/dir/?api=1&destination=Radha+Jewellers,+Hata+bazar,+Ucchtar+Prathmik+Kanya+Vidyalaya+ke+saamne,+Kushinagar,+Hata,+Uttar+Pradesh+274203",
  // Shortlink provided by business
  shortMapsLink: "https://maps.app.goo.gl/b2tHZV42Gw9AAqu5A",
  // Direct Google Maps embed URL for interactive in-page viewing
  embedMapUrl: "https://maps.google.com/maps?q=Radha+Jewellers,+Hata+bazar,+Ucchtar+Prathmik+Kanya+Vidyalaya+ke+saamne,+Kushinagar,+Hata,+Uttar+Pradesh+274203&t=&z=16&ie=UTF8&iwloc=&output=embed",
  // Verification-dependent fields: kept empty until verified by business
  openingHours: "",
  instagramUrl: "",
  googleReviewsUrl: "",
  websiteUrl: "",
};

/**
 * Reusable WhatsApp URL builder with contextual encoded messages.
 */
export function getWhatsAppUrl(message?: string): string {
  const defaultMsg = "Hello Radha Jewellers, I’d like to know more about your jewellery collections.";
  const text = encodeURIComponent(message || defaultMsg);
  return `https://wa.me/${siteConfig.whatsappNumber}?text=${text}`;
}

/**
 * Analytics/interaction event logger (safe stub ready for Google Analytics or Meta Pixel)
 */
export function trackEvent(eventName: string, params?: Record<string, unknown>): void {
  if (typeof window !== "undefined" && (window as unknown as { gtag?: Function }).gtag) {
    (window as unknown as { gtag: Function }).gtag("event", eventName, params);
  }
}

