import { SetStateAction } from "react";

export type ProductContextType = {
  dataUI: ProductType[];
  setDataUI: React.Dispatch<SetStateAction<ProductType[]>>;
  allData: ProductType[];
  setAllData: (newValue: ProductType[] | null) => void;
  filter: string;
  setFilter: React.Dispatch<SetStateAction<string>>;
};

export type ProductType = {
  name: string;
  surname: string;
  price: string;
  desc: string;
  link: string;
  release: string;
  platforms: string;
  genre: string;
  developers: string;
  publishers: string;
  inCart: boolean;
  selected: boolean;
  isHovered: boolean;
  isLiked: boolean;
  rating: number;
  id: number;
  cover: string;
  footage: string[];
};
