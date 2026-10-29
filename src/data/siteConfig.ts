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
    line1: "Hata Main Road",
    landmark: "Opposite Ucchtar Prathmik Kanya Vidyalaya",
    city: "Hata",
    district: "Kushinagar",
    state: "Uttar Pradesh",
    country: "India",
    fullFormatted: "Hata Main Road, opposite Ucchtar Prathmik Kanya Vidyalaya, Hata, Kushinagar, Uttar Pradesh, India",
    latitude: 26.741685,
    longitude: 83.742696,
  },
  googleMapsLink: "https://maps.app.goo.gl/thBsUqD6jGY2pUMZ9",
  directionsLink: "https://www.google.com/maps/dir/?api=1&destination=26.741685,83.742696",
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

