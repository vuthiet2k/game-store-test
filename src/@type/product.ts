import { SetStateAction } from "react";

export type ProductContextType = {
  dataUI: ProductType[];
  setDataUI: React.Dispatch<SetStateAction<ProductType[]>>;
  allData: ProductType[];
  setAllData: React.Dispatch<SetStateAction<ProductType[]>>;
  filter: string;
  setFilter: React.Dispatch<SetStateAction<string>>;
};

export type ProductType = {
  id: number;
  name: string;
  avatar: string;
  price: string;
  about: string;
  wishlist: boolean;
  ratting: boolean;
  action?: boolean;
  strategy?: boolean;
  adventure?: boolean;
  puzzle?: boolean;
  shooter: boolean;
  rpg?: boolean;
  sport?: boolean;
  racing?: boolean;
};
