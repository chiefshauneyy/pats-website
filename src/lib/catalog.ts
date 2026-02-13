export type Product = {
  id: string;
  handle: string;
  title: string;
  description: string;
  price: number;
  compareAtPrice?: number;
  images: string[];
  tags: string[];
  collectionHandles: string[];
  featured?: boolean;
};

export type Collection = {
  handle: string;
  title: string;
  description: string;
  heroImage: string;
};

export const collections: Collection[] = [
  {
    handle: "new",
    title: "New",
    description: "Fresh releases and limited runs.",
    heroImage:
      "https://images.unsplash.com/photo-1520975958225-0f5a9a8b1b0f?auto=format&fit=crop&w=1600&q=80",
  },
  {
    handle: "tees",
    title: "Tees",
    description: "Heavyweight graphic and staple tees.",
    heroImage:
      "https://images.unsplash.com/photo-1520975682031-a09e95b90ad6?auto=format&fit=crop&w=1600&q=80",
  },
  {
    handle: "hoodies",
    title: "Hoodies",
    description: "Premium fleece hoodies.",
    heroImage:
      "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=1600&q=80",
  },
  {
    handle: "hats",
    title: "Hats",
    description: "Clean, minimal headwear.",
    heroImage:
      "https://images.unsplash.com/photo-1520975916090-3105956dac38?auto=format&fit=crop&w=1600&q=80",
  },
];

export const products: Product[] = [
  {
    id: "1",
    handle: "classic-logo-tee-black",
    title: "Classic Logo Tee — Black",
    description: "Heavyweight cotton tee. Built for everyday wear.",
    price: 34,
    compareAtPrice: 42,
    images: [
      "https://images.unsplash.com/photo-1520975682031-a09e95b90ad6?auto=format&fit=crop&w=1600&q=80",
    ],
    tags: ["Heavyweight"],
    collectionHandles: ["new", "tees"],
    featured: true,
  },
  {
    id: "2",
    handle: "utility-hoodie-charcoal",
    title: "Utility Hoodie — Charcoal",
    description: "Premium fleece hoodie.",
    price: 68,
    images: [
      "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=1600&q=80",
    ],
    tags: ["Fleece"],
    collectionHandles: ["new", "hoodies"],
    featured: true,
  },
  {
    id: "3",
    handle: "embroidered-cap-olive",
    title: "Embroidered Cap — Olive",
    description: "Structured embroidered cap.",
    price: 28,
    images: [
      "https://images.unsplash.com/photo-1520975916090-3105956dac38?auto=format&fit=crop&w=1600&q=80",
    ],
    tags: ["Cap"],
    collectionHandles: ["hats"],
  },
];
