import { Routes, Route } from 'react-router-dom';
import { useEffect } from 'react';

import {
  fetchCategoriesAsync,
  setCategoriesMap,
} from '../../Store/reducers/categories/categories.action';
import { getCategoriesAndDocuments } from '../../utils/firebase/firebase.utils';

import './shop.styles.scss';
import CategoriesPreview from '../Categories-Preview/categories-preview.component';
import Category from '../Category/category.component';
import { useDispatch } from 'react-redux';

import { fetchCategoryStart } from '../../Store/reducers/categories/categories.action';

const Shop = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    // dispatch(fetchCategoriesAsync()); -> Thunk initializer for fetching categories from firebase
    dispatch(fetchCategoryStart());
  });

  return (
    <Routes>
      <Route index element={<CategoriesPreview />} />
      <Route path=":category" element={<Category />} />
    </Routes>
  );
};

export default Shop;
