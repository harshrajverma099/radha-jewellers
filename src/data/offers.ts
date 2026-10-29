export interface Promotion {
  id: string;
  title: string;
  subtitle?: string;
  discountText: string;
  description: string;
  badge?: string;
  image: string;
  startDate?: string; // ISO date string e.g. "2026-10-01" or optional
  endDate?: string;   // ISO date string e.g. "2026-11-15" or optional
  terms?: string;     // Factual terms supplied by business, never fabricated
  whatsappMessage: string;
  enabled: boolean;
}

export const activePromotions: Promotion[] = [
  {
    id: "diwali-special-2026",
    title: "DIWALI SPECIAL",
    subtitle: "Celebrate the Festival of Lights with Timeless Elegance",
    discountText: "FLAT 70% OFF ON MAKING CHARGES",
    description: "Discover beautiful jewellery for your most memorable celebrations. Visit our Hata showroom to explore festive gold, bridal, and diamond collections.",
    badge: "Festive Offer",
    image: "/images/promo/diwali-special.png",
    // Keep dates unconstrained unless verified by business to ensure factual compliance
    startDate: undefined,
    endDate: undefined,
    terms: "Applicable on making charges at Radha Jewellers showroom, Hata. For details on eligible jewellery categories, kindly enquire with our showroom team.",
    whatsappMessage: "Hello Radha Jewellers, I’d like to enquire about your Diwali Special offer — Flat 70% Off on Making Charges.",
    enabled: true,
  },
];

/**
 * Validates whether a promotion is currently active.
 * - If enabled === false -> false
 * - If startDate is set and now < startDate -> false
 * - If endDate is set and now > endDate -> false
 * - If dates are omitted, remains visible as long as enabled is true.
 */
export function isPromotionActive(promotion: Promotion): boolean {
  if (!promotion.enabled) return false;

  const now = new Date();

  if (promotion.startDate) {
    const start = new Date(promotion.startDate);
    if (!isNaN(start.getTime()) && now < start) {
      return false;
    }
  }

  if (promotion.endDate) {
    const end = new Date(promotion.endDate);
    if (!isNaN(end.getTime()) && now > end) {
      return false;
    }
  }

  return true;
}

/**
 * Returns the currently active featured promotion, or null if none is active.
 */
export function getFeaturedPromotion(): Promotion | null {
  const active = activePromotions.filter(isPromotionActive);
  return active.length > 0 ? active[0] : null;
}

