import { createContext, useState, useEffect } from 'react';
// import { SHOP_DATA } from '../shop-data';

// import { addCollectionAndDocuments } from '../utils/firebase/firebase.utils';

import { getCategoriesAndDocuments } from '../utils/firebase/firebase.utils';

export const categoriesContext = createContext({
  categoriesMap: {},
});

export const CategoriesProvider = ({ children }) => {
  const [categoriesMap, setCategoriesMap] = useState({});
  const value = { categoriesMap };

  useEffect(() => {
    const getCategoriesMap = async () => {
      const categoryMap = await getCategoriesAndDocuments();
      setCategoriesMap(categoryMap);
    };
    getCategoriesMap();
  });

  // useEffect(() => {
  //   addCollectionAndDocuments('categories', SHOP_DATA);
  // }, []);

  return (
    <categoriesContext.Provider value={value}>
      {children}
    </categoriesContext.Provider>
  );
};
