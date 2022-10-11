export interface CartType {
    id: number;
    name: string;
    money: string;
  }
  
  export type CartContextType = {
    cart: CartType[];
    setCart: (newValue: CartType[] | null) => void
  };
  
  export type ProductType = {
    id: number;
    to: string;
    src: string;
    name: string;
    money: string;
    love: boolean;
    isadded: boolean;
    about?: string;
    ratting?: boolean;
  };
  