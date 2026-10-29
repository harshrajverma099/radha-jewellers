export interface GalleryItem {
  id: string;
  caption: string;
  tag: string;
  image: string;
  aspect: "portrait" | "landscape" | "square";
}

export const galleryData: GalleryItem[] = [
  {
    id: "gal-1",
    caption: "The radiant beauty of bridal gold craftsmanship",
    tag: "Bridal Heritage",
    image: "/images/hero/hero-jewellery.jpg",
    aspect: "landscape",
  },
  {
    id: "gal-2",
    caption: "Artisan gold jhumkas catching the golden evening light",
    tag: "Tradition",
    image: "/images/gallery/gallery-2.jpg",
    aspect: "portrait",
  },
  {
    id: "gal-3",
    caption: "Timeless kadas stacked with ceremonial poise",
    tag: "Bangles",
    image: "/images/gallery/gallery-3.jpg",
    aspect: "square",
  },
  {
    id: "gal-4",
    caption: "Fine diamond brilliance crafted for unforgettable moments",
    tag: "Diamonds",
    image: "/images/gallery/gallery-4.jpg",
    aspect: "portrait",
  },
  {
    id: "gal-5",
    caption: "Inside our Hata showroom — where your jewellery story begins",
    tag: "Showroom Experience",
    image: "/images/showroom/showroom-interior.jpg",
    aspect: "landscape",
  },
  {
    id: "gal-6",
    caption: "Lightweight gold essentials for cherished everyday moments",
    tag: "Daily Grace",
    image: "/images/gallery/gallery-6.jpg",
    aspect: "square",
  },
];

