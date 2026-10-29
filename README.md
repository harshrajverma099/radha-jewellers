# Radha Jewellers — Premium Luxury Brand Website (Since 2003)

An introductory luxury brand website for **Radha Jewellers**, an established jewellery showroom located in **Hata, Kushinagar, Uttar Pradesh, India**.

Designed with a balance of Indian cultural heritage and international luxury aesthetics, featuring warm ivory (`#F8F5EF`), champagne gold (`#C6A15B`), deep emerald (`#123D32`), refined editorial typography (*Cormorant Garamond* & *Inter*), and high-resolution jewellery photography.

---

## 💎 Primary Objectives & Philosophy

1. **Brand Discovery & Introduction**: Establishing Radha Jewellers' identity and trust through its **Since 2003** heritage.
2. **Interactive 3D Jewellery Experience**: Real-time WebGL product viewing with 360° rotation, zoom controls, lighting atmosphere toggles, and multi-piece selector.
3. **Curated Showcase**: Presenting 12 jewellery collections without e-commerce or transactional friction.
4. **Festive Promotion Engine**: Showcasing the current seasonal campaign (**Diwali Special: Flat 70% OFF on Making Charges**) with an automated expiration and toggle system.
5. **Physical Showroom Conversion**: Guiding visitors to explore jewellery in person at Hata Main Road, Kushinagar.
6. **Direct Touchpoints**: Seamless one-tap WhatsApp enquiries, direct telephone calls, and Google Maps directions.

> **Important Business Requirement**: This website is an authentic brand introduction and showroom-discovery experience. It strictly does **not** contain e-commerce features (no shopping cart, online checkout, payment gateways, live stock quantities, or shipping).

---

## 🌐 Dedicated Multi-Page Architecture (`react-router-dom`)

The website features dedicated URLs and unique pages for every major brand touchpoint, wrapped in a unified luxury layout:

| Route | Page | Purpose & Highlights |
|---|---|---|
| `/` | **Home** | Flagship gateway featuring cinematic hero, 3D preview, brand pillars, festive highlights, showroom intro, and customer trust. |
| `/about` | **About Us** | Dedicated brand story, Since 2003 origin, three pillars (*Heritage*, *Trust*, *Craftsmanship*), and 20-year milestone timeline. |
| `/3d-experience` | **3D Experience** | Dedicated 3D atelier with real-time Three.js WebGL orbit controls, touch rotation, studio lighting atmosphere toggles, design inspection specs, and WhatsApp inquiry. |
| `/collections` | **Collections** | Complete 12-category catalog with category filters (*Bridal & Heritage*, *Gold & Diamond*, *Daily & Modern*), high-res editorial modals, and 3D model links. |
| `/offers` | **Festive Offers** | Seasonal privilege showcase highlighting the Diwali Special (Flat 70% OFF on Making Charges) with terms and direct WhatsApp dispatch. |
| `/showroom` | **Showroom** | Complete showroom visitor guide with interior boutique photography, boutique amenities, showroom hours, and Google Maps directions. |
| `/contact` | **Contact Us** | Direct assistance with phone, WhatsApp concierge, showroom hours, embedded location map, and an interactive **Private Showroom Viewing Booking Form** that dispatches to WhatsApp. |

---

## 🛠️ Technology Stack

- **React 18** with **TypeScript**
- **React Router v6 (`react-router-dom`)** for client-side routing with active navigation indicators and instant scroll reset
- **Three.js (WebGL)** for real-time interactive 3D jewellery rendering with OrbitControls and GLTF/GLB loader support
- **Vite** for rapid bundling with Rollup `manualChunks` optimization
- **Tailwind CSS** with a custom luxury color palette and typography system
- **Lucide React** for icons
- **Framer Motion** for subtle motion and scroll transitions

---

## 📁 Project Structure

```text
RADHA JEWELLERS/
├── public/
│   ├── images/
│   │   ├── radha-jewellers-logo.png    # Preserved brand logo
│   │   ├── radha-jewellers-logo.svg    # Scalable vector logo asset
│   │   ├── hero/
│   │   │   └── hero-jewellery.jpg      # Cinematic 22k bridal jewellery hero
│   │   ├── showroom/
│   │   │   └── showroom-interior.jpg   # Architectural boutique photography
│   │   ├── promo/
│   │   │   └── diwali-special.png      # Festive campaign banner
│   │   ├── collections/                # 12 category showcase photographs
│   │   ├── featured/                   # Handpicked editorial ornaments
│   │   └── gallery/                    # Social lifestyle photography
├── src/
│   ├── components/
│   │   ├── Navbar.tsx                  # Transparent to ivory sticky navbar
│   │   ├── MobileMenu.tsx              # Accessible slide-over drawer
│   │   ├── Hero.tsx                    # Cinematic editorial hero
│   │   ├── SectionHeading.tsx          # Reusable luxury section header
│   │   ├── About.tsx                   # Heritage narrative & Since 2003 badge
│   │   ├── Collections.tsx             # Hybrid 12-category gallery & lightbox modal
│   │   ├── Offers.tsx                  # Reusable festive campaign banner
│   │   ├── FeaturedJewellery.tsx       # Handpicked editorial pieces
│   │   ├── WhyChooseUs.tsx             # 4 core brand values
│   │   ├── Testimonials.tsx            # Genuine customer trust & reviews
│   │   ├── Showroom.tsx                # Showroom location & visiting details
│   │   ├── MapSection.tsx              # Responsive map & directions fallback
│   │   ├── InstagramGallery.tsx        # Curated visual lifestyle grid
│   │   ├── Contact.tsx                 # Direct telephone, WhatsApp & address cards
│   │   ├── FloatingContact.tsx         # Mobile floating quick-action bar
│   │   └── Footer.tsx                  # Deep emerald luxury footer
│   ├── data/
│   │   ├── siteConfig.ts               # Centralized business & contact settings
│   │   ├── collections.ts              # 12 jewellery categories & highlights
│   │   ├── offers.ts                   # Seasonal promotions & expiration logic
│   │   ├── featured.ts                 # Handpicked editorial items
│   │   └── gallery.ts                  # Social lifestyle gallery items
│   ├── pages/
│   │   └── Home.tsx                    # Single-page layout composition
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css                       # Luxury typography & custom scrollbars
├── index.html                          # SEO meta tags & LocalBusiness JSON-LD
├── tailwind.config.js                  # Custom luxury color tokens
├── package.json
└── README.md
```

---

## 🚀 Getting Started

### 1. Prerequisites
- **Node.js** (v18.0.0 or later recommended; v22.x tested)
- **npm** (v9.x or later)

### 2. Installation
Clone or navigate to the project directory and install dependencies:
```bash
cd "RADHA JEWELLERS"
npm install
```

### 3. Start Development Server
```bash
npm run dev
```
Open your browser at `http://localhost:5173` to explore the website.

### 4. Create Production Build
```bash
npm run build
```
The compiled, production-ready static assets will be output to the `dist/` directory.

### 5. Preview Production Build
```bash
npm run preview
```

---

## ⚙️ Maintenance & Customization Guide

All key business information is stored in **centralized data files** under `src/data/` so non-engineers can update details without touching JSX components.

### 1. Updating Contact Details, Address & Coordinates
Edit **`src/data/siteConfig.ts`**:
```typescript
export const siteConfig = {
  brandName: "Radha Jewellers",
  brandSignature: "Since 2003",
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
    latitude: 26.741685,
    longitude: 83.742696,
  },
  googleMapsLink: "https://maps.app.goo.gl/thBsUqD6jGY2pUMZ9",
  directionsLink: "https://www.google.com/maps/dir/?api=1&destination=26.741685,83.742696",
  // Verification-dependent fields:
  openingHours: "",      // e.g. "Monday – Sunday: 10:00 AM – 8:00 PM" (leave empty to hide)
  instagramUrl: "",      // e.g. "https://instagram.com/yourhandle" (leave empty to hide)
  googleReviewsUrl: "",  // e.g. "https://g.page/r/your-review-link" (leave empty to hide)
};
```

### 2. The 3D Jewellery Experience Configuration
3D models are registered in **`src/data/models3d.ts`**:
```typescript
export const models3dData: JewelleryModel3D[] = [
  {
    id: "royal-solitaire-ring",
    name: "Royal Solitaire Gold Ring",
    category: "Rings & Bands",
    previewImage: "/images/featured/featured-4.jpg",
    modelPath: "/models/royal-solitaire-ring.glb", // optional custom .glb file
    proceduralType: "solitaire-ring",
    description: "A tapered 22k yellow gold comfort band...",
    metalType: "22K Yellow Gold",
    gemstone: "Brilliant Solitaire",
    whatsappMessage: "Hello Radha Jewellers, I would like to enquire about this 3D model.",
    status: "ready",
  },
];
```

#### How 3D Fallback Works
- If a custom `.glb` is provided in `public/models/`, the viewer loads and normalizes the external file via `GLTFLoader`.
- If no `.glb` file is found, the viewer automatically renders an engineered procedural 3D model with realistic 22K metallic gold reflections and refractive gemstones.
- If WebGL is unsupported or disabled, an elegant fallback card displays the preview image, description, and WhatsApp enquiry button.

#### Interactive Viewer Controls
- **Mouse / Touch**: Drag to rotate in 360°, pinch/scroll to zoom.
- **Keyboard Shortcuts**: `Space` to pause/resume auto-rotation, `R` to reset view, `+` and `-` to zoom.
- **Lighting Ambience**: Toggle between *Warm Studio*, *Royal Emerald Dusk*, and *Daylight Showcase*.

### 3. Updating Festive Promotions (Diwali, Dhanteras, Weddings, Akshaya Tritiya)
Edit **`src/data/offers.ts`**:
```typescript
export const activePromotions: Promotion[] = [
  {
    id: "diwali-special-2026",
    title: "DIWALI SPECIAL",
    subtitle: "Celebrate the Festival of Lights with Timeless Elegance",
    discountText: "FLAT 70% OFF ON MAKING CHARGES",
    description: "Discover beautiful jewellery for your most memorable celebrations.",
    image: "/images/promo/diwali-special.png",
    // Optional automatic expiration date: "YYYY-MM-DD"
    startDate: undefined,
    endDate: undefined,
    terms: "Applicable on making charges at Radha Jewellers showroom, Hata.",
    whatsappMessage: "Hello Radha Jewellers, I'd like to enquire about your Diwali Special offer.",
    enabled: true, // Set to false to immediately hide without deleting
  },
];
```
- If `endDate` is set and today's date exceeds `endDate`, the promotion **automatically unmounts** so expired offers are never displayed.
- If dates are undefined, the offer remains visible while `enabled: true`.

### 3. Replacing the Logo
The brand logo asset is placed at:
- `public/images/radha-jewellers-logo.png` (High-res transparent PNG)
- `public/images/radha-jewellers-logo.svg` (Crisp vector SVG)

To replace with an updated high-resolution original file, place the new image at `public/images/radha-jewellers-logo.png` keeping proportions intact.

### 4. Updating Jewellery Images & Collections
1. **Hero image**: replace `public/images/hero/hero-jewellery.jpg`.
2. **Showroom image**: replace `public/images/showroom/showroom-interior.jpg`.
3. **Collection images & descriptions**: edit `src/data/collections.ts`.

### 5. Adding Genuine Customer Reviews
Edit `genuineReviews` array in `src/components/Testimonials.tsx`:
```typescript
const genuineReviews = [
  {
    id: "rev-1",
    customerName: "Customer Name",
    occasion: "Bridal Jewellery Purchase",
    content: "Genuine feedback about the warm showroom experience and trust...",
    date: "2026",
  },
];
```
*If empty, the section automatically displays a graceful invitation inviting visitors to visit the showroom and experience the heritage in person.*

---

## 🌐 Deployment to Vercel

This repository is optimized for one-click deployment on **Vercel**:

1. Push your repository to GitHub / GitLab.
2. In the Vercel dashboard, click **"Add New Project"** and import this repository.
3. Vercel will automatically detect **Vite** and configure:
   - **Framework Preset**: Vite
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
4. Click **Deploy**.
5. Once your custom domain is assigned (e.g. `radhajewellers.com`), update the canonical URL in `index.html`.

---

## 📜 Compliance & Quality Verification Checklist

- [x] Brand name: **Radha Jewellers** (Since 2003)
- [x] Showroom address: **Hata Main Road, opposite Ucchtar Prathmik Kanya Vidyalaya, Hata, Kushinagar**
- [x] Verified coordinates: **26.741685, 83.742696**
- [x] Contact links: clickable telephone `tel:+918433351515` and WhatsApp with prefilled messages
- [x] 12 Complete collections with hybrid layouts and interactive lightbox modal
- [x] Festive promotion: **Diwali Special — Flat 70% OFF on Making Charges**
- [x] Zero e-commerce footprint (no carts, checkouts, live stocks or payment SDKs)
- [x] Fully responsive across 360px, 390px, 768px, 1024px, 1440px
- [x] SEO meta tags and valid LocalBusiness / JewelryStore JSON-LD schema
- [x] Production build tested and verified with zero TypeScript or build errors.

