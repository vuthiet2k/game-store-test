import * as React from "react";
import { memo } from "react";

import { CartContextType, CartType, ProductType } from "../@type/cart";
import { getData } from "../apis";

export const CartContext = React.createContext<CartContextType>(
  {} as CartContextType
);

type PropChildren = {
  children: React.ReactNode;
};

const CartProvider: React.FC<PropChildren> = ({ children }) => {
  const [cart, setCart] = React.useState<CartType[]>([]);
  React.useEffect(() => {
    getData("cart").then((res) => {
      setCart(res?.data);
    });
  }, []);
  
  return (
    <CartContext.Provider value={{ cart, setCart}}>
      {children}
    </CartContext.Provider>
  );
};

export default memo(CartProvider);
