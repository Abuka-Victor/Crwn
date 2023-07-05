import { createAction } from '../../../utils/createAction.utils';
import { CATEGORIES_TYPES } from './categories.types';
import { getCategoriesAndDocuments } from '../../../utils/firebase/firebase.utils';

export const setCategoriesMap = (payload) =>
  createAction(CATEGORIES_TYPES.SET_CATEGORIES_MAP, payload);

export const fetchCategoryStart = () =>
  createAction(CATEGORIES_TYPES.FETCH_CATEGORIES_START);
export const fetchCategorySuccess = (payload) =>
  createAction(CATEGORIES_TYPES.FETCH_CATEGORIES_SUCCESS, payload);
export const fetchCategoryFailed = (payload) =>
  createAction(CATEGORIES_TYPES.FETCH_CATEGORIES_FAILED, payload);

export const fetchCategoriesAsync = () => {
  return async (dispatch) => {
    dispatch(fetchCategoryStart());
    try {
      const categoryMap = await getCategoriesAndDocuments();
      dispatch(fetchCategorySuccess(categoryMap));
    } catch (error) {
      dispatch(fetchCategoryFailed(error));
    }
  };
};
