import { LucideIcon } from "lucide-react";
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

export interface ProductCardProps {
  dataBeetle: Beetle;
}

export interface SummaryCardProps {
  title: string;
  value: number;
  icon: LucideIcon;
  colorClass: string;
}

export interface IconTextProps {
  text: string;
  icon: LucideIcon;
  active: boolean;
}
