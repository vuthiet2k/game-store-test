import { Dispatch, SetStateAction } from "react";

export interface CartType  {
    id: number,
    name: string;
    money: string;
}

export type CartContextType = {
    cart: CartType[];
    setCart: React.Dispatch<React.SetStateAction<CartType[]>>;
};

export type ProductType = {
    id: number;
    to: string;
    src: string;
    name: string;
    money: string;
    love: boolean;
    about?: string;
    ratting?: boolean;
}