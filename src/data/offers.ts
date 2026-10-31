export interface Promotion {
  id: string;
  title: string;
  subtitle?: string;
  discountText: string;
  description: string;
  badge?: string;
  image: string;
  voucherCode?: string;
  perks?: string[];
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
    description: "Experience the grandest festive savings of the year. Discover magnificent 22K hallmark gold, Kundan, and antique temple jewellery at unprecedented making rates.",
    badge: "Most Popular Offer",
    image: "/images/promo/diwali-special.png",
    voucherCode: "RADHA70",
    perks: [
      "100% BIS Hallmarked 916 & 750 Gold",
      "Live Caratometer Purity Certificate",
      "Complimentary Luxury Jewellery Box",
      "Zero Hidden Weighing Deductions"
    ],
    terms: "Applicable on making charges at Radha Jewellers showroom, Hata Main Road. For details on eligible categories, kindly enquire with our showroom team.",
    whatsappMessage: "Hello Radha Jewellers, I would like to claim the Diwali Special voucher RADHA70 for Flat 70% Off on Making Charges.",
    enabled: true,
  },
  {
    id: "bridal-trousseau-privilege",
    title: "ROYAL BRIDAL PRIVILEGE",
    subtitle: "Heirloom Craftsmanship for Auspicious Weddings",
    discountText: "FREE 24K PURE GOLD COIN",
    description: "Receive a complimentary certified 24K pure gold coin with complete bridal suites, accompanied by lifetime complimentary jewellery polishing and bespoke fitting.",
    badge: "Wedding Season Special",
    image: "/images/promo/diwali-special.png",
    voucherCode: "BRIDAL24K",
    perks: [
      "Free 24K Gold Coin on Bridal Sets",
      "Lifetime Complimentary Ultrasonic Cleaning",
      "Priority Custom Bridal Consultation",
      "Personalized Stylist Fitting"
    ],
    terms: "Valid on complete bridal suite purchases at our Hata showroom. Terms & minimum weight slab apply.",
    whatsappMessage: "Hello Radha Jewellers, I would like to enquire about the Royal Bridal Privilege (BRIDAL24K) with complimentary gold coin.",
    enabled: true,
  },
  {
    id: "old-gold-exchange",
    title: "100% GOLD EXCHANGE VALUE",
    subtitle: "Upgrade Heirloom Gold with Complete Transparency",
    discountText: "0% MELTING LOSS DEDUCTION",
    description: "Exchange your old family jewellery at 100% live bullion market value. Exact digital purity testing in front of you with zero melting loss.",
    badge: "Trust Guarantee",
    image: "/images/promo/diwali-special.png",
    voucherCode: "EXCHANGE100",
    perks: [
      "100% Current Market Bullion Value",
      "Zero Melting Loss Deductions",
      "Transparent Digital Caratometer",
      "Immediate Upgrade to New Designer Gold"
    ],
    terms: "Applicable on gold exchange at Radha Jewellers, Hata. Instant digital purity certificate provided.",
    whatsappMessage: "Hello Radha Jewellers, I would like to know the exchange value for my old gold jewellery under the 100% Exchange Offer.",
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

