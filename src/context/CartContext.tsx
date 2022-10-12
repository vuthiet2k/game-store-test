import useLocalStorage from "@rehooks/local-storage";
import * as React from "react";
import toast from "react-hot-toast";

import { CartContextType, CartType } from "../@type/cart";
import { ProductType } from "../@type/product";

export const CartContext = React.createContext<CartContextType>(
  {} as CartContextType
);
export const handlerAddCart = (
  id: number,
  allData: ProductType[],
  setAllData: (newValue: ProductType[] | null) => void,
  cart: CartType[],
  setCart: (newValue: CartType[] | null) => void
) => {
  let elements = [...allData];
  elements = elements.map((item) =>
    item.id === id ? { ...item, inCart: true } : item
  );
  setAllData(elements);
  setCart([{ id: id, name: allData[id].name, money: allData[id].price }, ...cart]);
  toast.success("Thêm sản phẩm thành công!");
};
type PropChildren = {
  children: React.ReactNode;
};

const CartProvider: React.FC<PropChildren> = ({ children }) => {
  const [productCarts, setProductsCarts] = useLocalStorage<CartType[]>(
    "carts",
    []
  );

  return (
    <CartContext.Provider
      value={{ cart: productCarts, setCart: setProductsCarts }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
