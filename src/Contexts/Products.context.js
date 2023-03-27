import { createContext, useState } from 'react';
import SHOP_DATA from '../shop-data.json';

export const productContext = createContext({
  products: [],
});

export const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState(SHOP_DATA);
  const value = { products };

  return (
    <productContext.Provider value={value}>{children}</productContext.Provider>
  );
};
