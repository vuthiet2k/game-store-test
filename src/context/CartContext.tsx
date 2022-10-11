import useLocalStorage from "@rehooks/local-storage";
import * as React from "react";

import { CartContextType, CartType } from "../@type/cart";

export const CartContext = React.createContext<CartContextType>(
  {} as CartContextType
);

type PropChildren = {
  children: React.ReactNode;
};

const CartProvider: React.FC<PropChildren> = ({ children }) => {
  const [productCarts, setProductsCarts] = useLocalStorage<CartType[]>(
    'carts',
    []
  );
  
  return (
    <CartContext.Provider value={{ cart: productCarts, setCart: setProductsCarts}}>
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
