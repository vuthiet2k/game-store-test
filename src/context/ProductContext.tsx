import React, { Children } from "react";
import { ProductContextType, ProductType } from "../@type/product";
import { getData } from "../apis";

export const ProductContext = React.createContext<ProductContextType>(
  {} as ProductContextType
);

type PropChildren = {
  children: React.ReactNode;
};

export const ProductProvider: React.FC<PropChildren> = ({ children }) => {
  const [allData, setAllData] = React.useState<ProductType[]>([]);
  const [dataWishlist, setDataWishlist] = React.useState<ProductType[]>([]);
  const [dataRatting, setDataRatting] = React.useState<ProductType[]>([]);
  const [dataAction, setDataAction] = React.useState<ProductType[]>([]);
  const [dataStrategy, setDataStrategy] = React.useState<ProductType[]>([]);
  const [dataRPG, setDataRPG] = React.useState<ProductType[]>([]);
  const [dataShooter, setDataShooter] = React.useState<ProductType[]>([]);
  const [dataAdventure, setDataAdventure] = React.useState<ProductType[]>([]);
  const [dataPuzzle, setDataPuzzule] = React.useState<ProductType[]>([]);
  const [dataRacing, setDataRacing] = React.useState<ProductType[]>([]);
  const [dataSport, setDataSport] = React.useState<ProductType[]>([]);
  const [dataUI, setDataUI] = React.useState<ProductType[]>([]);
  const [filter, setFilter] = React.useState<string>("none");
  React.useEffect(() => {
    getData("products").then((res) => {
      setAllData(res?.data);
      setDataUI(res?.data);
    });
  }, []);

  return (
    <ProductContext.Provider
      value={{
        dataUI,
        setDataUI,
        allData,
        setAllData,
        filter,
        setFilter,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};
