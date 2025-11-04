export type Beetle = {
  id: string;
  name: string;
  scientificName: string;
  description: string;
  imageUrl: string;
  price: number;
  stock: number;
  origin: string;
  rarity: "common" | "rare" | "legendary";
  size: string;
  details: string;
};