export interface ModelFilm {
  id: string;
  title: string;
  subtitle: string;
  category: string;
  duration: string;
  videoSrc: string;
  posterSrc: string;
  mobileVideoSrc?: string;
  description: string;
  highlightPieces: string[];
  featuredInHero?: boolean;
}

export const modelFilmsData: ModelFilm[] = [
  {
    id: 'royal-bridal',
    title: 'The Royal Bridal Trousseau',
    subtitle: 'Heirloom 22K Gold & Auspicious Heritage Craft',
    category: 'Bridal Heritage',
    duration: '17s',
    videoSrc: '/videos/optimized/hero-royal-bridal.mp4',
    posterSrc: '/images/posters/hero-royal-bridal-poster.webp',
    mobileVideoSrc: '/videos/optimized/hero-mobile-portrait.mp4',
    description: 'An ode to majestic Indian weddings — featuring an opulent bridal choker, layered kanthi haar, handcrafted jhumkas, and royal maang tikka designed for unforgettable celebration moments.',
    highlightPieces: ['22K Royal Choker', 'Layered Bridal Haar', 'Artisanal Jhumkas', 'Embellished Maang Tikka'],
    featuredInHero: true,
  },
  {
    id: 'classic-gold',
    title: 'Imperial Kundan & Polki Grace',
    subtitle: 'Intricate Meenakari & Uncut Gemstone Settings',
    category: 'Traditional Gold',
    duration: '24s',
    videoSrc: '/videos/optimized/model-film-classic-gold.mp4',
    posterSrc: '/images/posters/model-film-classic-gold-poster.webp',
    description: 'Traditional artistry meets contemporary poise. Every contour reflects the dedication of master karigars crafting auspicious jewellery for generations of families.',
    highlightPieces: ['Polki Choker Suite', 'Nakshi Gold Bangles', 'Chandbali Earrings'],
    featuredInHero: true,
  },
  {
    id: 'contemporary-poise',
    title: 'Contemporary Diamond Splendour',
    subtitle: 'Precision Faceted Solitaires & Platinum Accents',
    category: 'Diamond Jewellery',
    duration: '10s',
    videoSrc: '/videos/optimized/model-film-contemporary.mp4',
    posterSrc: '/images/posters/model-film-contemporary-poster.webp',
    description: 'Refined geometric brilliance and luminous diamond arrangements crafted for cocktail galas, reception evenings, and timeless modern glamour.',
    highlightPieces: ['Solitaire Tennis Necklace', 'Faceted Diamond Drops', 'Eternity Bands'],
    featuredInHero: true,
  },
  {
    id: 'temple-heritage',
    title: 'Antique Temple & Filigree Majesty',
    subtitle: 'Sacred Iconography & Matte Antique Finish',
    category: 'Temple Artistry',
    duration: '17s',
    videoSrc: '/videos/optimized/model-film-temple-heritage.mp4',
    posterSrc: '/images/posters/model-film-temple-heritage-poster.webp',
    description: 'Inspired by South Indian temple architecture and royal court jewels, cast in rich 22-karat gold with auspicious motifs and divine serenity.',
    highlightPieces: ['Temple Kasu Haar', 'Embossed Kada Bangles', 'Antique Temple Ring'],
  },
  {
    id: 'necklace-macro',
    title: 'Artisanal Necklace Craft in Motion',
    subtitle: 'Close-Up Inspection of Finishes & Settings',
    category: 'Necklaces & Chokers',
    duration: '14s',
    videoSrc: '/videos/optimized/model-film-necklace-macro.mp4',
    posterSrc: '/images/posters/model-film-necklace-macro-poster.webp',
    description: 'A macro cinematic focus exploring the fluid movement, clasp precision, and stone security that distinguish Radha Jewellers craftsmanship.',
    highlightPieces: ['Hand-Strung Pearl Drops', 'Micro-Prong Settings', 'Flexible Mesh Gold Linkage'],
  },
  {
    id: 'solitaire-rings',
    title: 'Solitaire Sparkle & Royal Bangles',
    subtitle: 'Luminous Hand Ornaments for Special Occasions',
    category: 'Rings & Bangles',
    duration: '17s',
    videoSrc: '/videos/optimized/model-film-solitaire-rings.mp4',
    posterSrc: '/images/posters/model-film-solitaire-rings-poster.webp',
    description: 'Glittering solitaires and intricately carved gold bangles designed to catch every ray of celebratory light with unmatched brilliance.',
    highlightPieces: ['Solitaire Engagement Rings', 'Screw-Type Gold Bangles', 'Stackable Diamond Rings'],
  },
  {
    id: 'festive-earrings',
    title: 'Festive Jhumkas & Chandbalis',
    subtitle: 'Lightweight Sway & Dramatic Celebration Presence',
    category: 'Earrings & Drops',
    duration: '8s',
    videoSrc: '/videos/optimized/model-film-festive-earrings.mp4',
    posterSrc: '/images/posters/model-film-festive-earrings-poster.webp',
    description: 'Delicate yet commanding earrings crafted with balance, ensuring hours of comfortable festive wear during Diwali, weddings, and milestones.',
    highlightPieces: ['Tiered Jhumkis', 'Kundan Chandbalis', 'Floral Diamond Studs'],
  },
];
