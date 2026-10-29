export interface CollectionItem {
  id: string;
  name: string;
  subtitle: string;
  description: string;
  image: string;
  categoryTag: string;
  highlights: string[];
  whatsappMessage: string;
}

export const collectionsData: CollectionItem[] = [
  {
    id: "gold-jewellery",
    name: "Gold Jewellery",
    subtitle: "Purity & Timeless Grandeur",
    description: "Ornate and refined creations crafted with deep appreciation for classic Indian gold artistry. From statement adornments to delicate heirlooms designed for generations to cherish.",
    image: "/images/collections/gold-jewellery.jpg",
    categoryTag: "22K & 18K Hallmarked",
    highlights: ["Intricate Filigree & Nakshi", "Timeless Festive Wear", "Hand-finished Detailing"],
    whatsappMessage: "Hello Radha Jewellers, I would like to enquire about your Gold Jewellery collection.",
  },
  {
    id: "bridal-jewellery",
    name: "Bridal & Wedding Jewellery",
    subtitle: "For Your Most Sacred Celebrations",
    description: "Exquisite bridal sets created to crown your milestone moments. Featuring ornate chokers, layered rani haars, matching jhumkas and mathapattis imbued with auspicious charm.",
    image: "/images/hero/hero-jewellery.jpg",
    categoryTag: "Bridal Trousseau",
    highlights: ["Choker & Rani Haar Sets", "Auspicious Heritage Motifs", "Complete Wedding Ensembles"],
    whatsappMessage: "Hello Radha Jewellers, I would like to enquire about your Bridal & Wedding Jewellery collection.",
  },
  {
    id: "traditional-jewellery",
    name: "Traditional Indian Jewellery",
    subtitle: "Rich Cultural Legacy",
    description: "Rooted in authentic regional crafts including Kundan, Polki, and antique finishes that celebrate the enduring splendour of Indian cultural celebrations.",
    image: "/images/collections/traditional-jewellery.jpg",
    categoryTag: "Heritage Craft",
    highlights: ["Kundan & Polki Accents", "Temple & Antique Finishes", "Cultural Symbolism"],
    whatsappMessage: "Hello Radha Jewellers, I would like to know more about your Traditional Indian Jewellery pieces.",
  },
  {
    id: "diamond-jewellery",
    name: "Diamond Jewellery",
    subtitle: "Radiance That Captivates",
    description: "Gracefully set natural diamonds crafted to capture and reflect light with exceptional brilliance. Designed for modern luxury, anniversaries, and sophisticated galas.",
    image: "/images/collections/diamond-jewellery.jpg",
    categoryTag: "Fine Diamonds",
    highlights: ["Solitaires & Multi-stone Settings", "Modern Editorial Designs", "Subtle Day-to-Night Luxury"],
    whatsappMessage: "Hello Radha Jewellers, I would like to explore your Diamond Jewellery collection.",
  },
  {
    id: "necklaces",
    name: "Necklaces & Chokers",
    subtitle: "Graceful Centrepieces",
    description: "A versatile showcase of regal collars, choker sets, delicate pendants, and sweeping layered necklaces that lend effortless poise to every attire.",
    image: "/images/collections/necklaces.jpg",
    categoryTag: "Neckwear",
    highlights: ["Collar Chokers & Haar Sets", "Pendant Chains", "Festive Statement Pieces"],
    whatsappMessage: "Hello Radha Jewellers, I am interested in exploring your Necklaces & Chokers collection.",
  },
  {
    id: "bangles",
    name: "Bangles & Kadas",
    subtitle: "Melody of Gold & Grace",
    description: "Traditional broad kadas, delicate filigree bangles, and stone-studded daily cuffs that bring a lyrical elegance to every gesture of your hands.",
    image: "/images/collections/bangles.jpg",
    categoryTag: "Bangles & Kadas",
    highlights: ["Broad Antique Kadas", "Lightweight Everyday Pairs", "Stone-studded Accents"],
    whatsappMessage: "Hello Radha Jewellers, I would like to enquire about your Bangles & Kadas collection.",
  },
  {
    id: "earrings",
    name: "Earrings & Jhumkas",
    subtitle: "Sculpted Elegance",
    description: "From iconic chandelier jhumkas dancing with every movement to subtle everyday gold studs and diamond drops that frame the face with gentle radiance.",
    image: "/images/collections/earrings.jpg",
    categoryTag: "Earwear",
    highlights: ["Traditional Bell Jhumkas", "Contemporary Tops & Studs", "Chandbali & Drop Styles"],
    whatsappMessage: "Hello Radha Jewellers, I would like to enquire about your Earrings & Jhumkas collection.",
  },
  {
    id: "rings",
    name: "Rings & Bands",
    subtitle: "Enduring Tokens of Love",
    description: "Intricately detailed cocktail rings, eternity bands, and traditional statement rings created to mark engagements, milestones, and personal celebrations.",
    image: "/images/collections/rings.jpg",
    categoryTag: "Rings",
    highlights: ["Cocktail Statement Rings", "Engagement & Couple Bands", "Floral & Filigree Motifs"],
    whatsappMessage: "Hello Radha Jewellers, I would like to enquire about your Rings & Bands collection.",
  },
  {
    id: "chains",
    name: "Chains & Mangalsutras",
    subtitle: "Refined Everyday Grace",
    description: "Supple gold chains in rope, curb, and wheat weaves alongside auspicious modern mangalsutras designed for comfortable, daily poise.",
    image: "/images/collections/chains.jpg",
    categoryTag: "Daily Elegance",
    highlights: ["Strong Durable Weaves", "Auspicious Mangalsutra Designs", "Comfortable Lightweight Feel"],
    whatsappMessage: "Hello Radha Jewellers, I would like to enquire about your Chains & Mangalsutras.",
  },
  {
    id: "daily-wear",
    name: "Lightweight Daily Wear",
    subtitle: "Effortless Modern Living",
    description: "Understated, lightweight gold and gemstone pieces thoughtfully engineered for comfort, office wear, and seamless contemporary routines.",
    image: "/images/collections/daily-wear.jpg",
    categoryTag: "Modern Casual",
    highlights: ["Lightweight & Snag-free", "Minimal Contemporary Styling", "Ideal for Daily Gifting"],
    whatsappMessage: "Hello Radha Jewellers, I would like to see your Lightweight Daily Wear collection.",
  },
  {
    id: "silver-jewellery",
    name: "Silver Jewellery & Articles",
    subtitle: "Purity In Sterling Silver",
    description: "Hallmarked sterling silver jewellery, ornate payals, bichiyas, and ceremonial silverware for auspicious occasions and religious ceremonies.",
    image: "/images/collections/silver-jewellery.jpg",
    categoryTag: "Sterling Silver",
    highlights: ["Traditional Payals & Anklets", "Auspicious Pooja Articles", "Sterling Modern Ornaments"],
    whatsappMessage: "Hello Radha Jewellers, I would like to enquire about your Silver Jewellery & Articles.",
  },
  {
    id: "custom-designs",
    name: "Custom Bespoke Designs",
    subtitle: "Your Vision, Our Craftsmanship",
    description: "Collaborate closely with our showroom team to bring your custom design dreams to life, whether reimagining a family heirloom or crafting a one-of-a-kind wedding set.",
    image: "/images/collections/custom-designs.jpg",
    categoryTag: "Bespoke Services",
    highlights: ["Personal Design Consultations", "Heirloom Restoration", "Handcrafted Custom Orders"],
    whatsappMessage: "Hello Radha Jewellers, I would like to schedule a Custom Jewellery Design consultation.",
  },
];

