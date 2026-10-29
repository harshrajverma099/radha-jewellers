export interface JewelleryModel3D {
  id: string;
  name: string;
  category: string;
  previewImage: string;
  modelPath?: string; // Optional external .glb/.gltf path
  proceduralType: 'solitaire-ring' | 'temple-kada' | 'kundan-pendant';
  description: string;
  metalType: string;
  gemstone: string;
  whatsappMessage: string;
  status: 'ready' | 'preview' | 'coming_soon';
}

export const models3dData: JewelleryModel3D[] = [
  {
    id: "royal-solitaire-ring",
    name: "Royal Solitaire Gold Ring",
    category: "Rings & Bands",
    previewImage: "/images/featured/featured-4.jpg",
    modelPath: "/models/royal-solitaire-ring.glb",
    proceduralType: "solitaire-ring",
    description: "A tapered 22k yellow gold comfort band supporting a four-prong raised crown set with a brilliant-cut center solitaire stone, sculpted for timeless engagements and celebrations.",
    metalType: "22K Yellow Gold",
    gemstone: "Brilliant Solitaire",
    whatsappMessage: "Hello Radha Jewellers, I would like to enquire about the Royal Solitaire Gold Ring featured in your 3D Jewellery Experience.",
    status: "ready",
  },
  {
    id: "temple-gold-kada",
    name: "Heritage Temple Gold Kada",
    category: "Bangles & Kadas",
    previewImage: "/images/featured/featured-3.jpg",
    modelPath: "/models/temple-gold-kada.glb",
    proceduralType: "temple-kada",
    description: "An ornate traditional broad kada showcasing embossed geometric fluting, antique gold bead accents, and symmetrical floral reliefs inspired by timeless Indian architecture.",
    metalType: "22K Antique Gold",
    gemstone: "Polki & Ruby Accents",
    whatsappMessage: "Hello Radha Jewellers, I would like to enquire about the Heritage Temple Gold Kada featured in your 3D Jewellery Experience.",
    status: "ready",
  },
  {
    id: "kundan-pearl-pendant",
    name: "Auspicious Kundan & Pearl Pendant",
    category: "Necklaces & Chokers",
    previewImage: "/images/hero/hero-jewellery.jpg",
    modelPath: "/models/kundan-pearl-pendant.glb",
    proceduralType: "kundan-pendant",
    description: "An auspicious floral medallion pendant featuring a central emerald-toned jewel, surrounding gold petal settings, and a lustrous suspended teardrop pearl.",
    metalType: "22K Hallmark Gold",
    gemstone: "Emerald Glass & South Sea Pearl",
    whatsappMessage: "Hello Radha Jewellers, I would like to enquire about the Auspicious Kundan & Pearl Pendant featured in your 3D Jewellery Experience.",
    status: "ready",
  },
];

