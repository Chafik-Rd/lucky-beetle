// Error Type Definition
export interface HttpError extends Error {
  status?: number;
  message: string;
}

 // Beetle Type Definition
export interface Beetle {
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
}
