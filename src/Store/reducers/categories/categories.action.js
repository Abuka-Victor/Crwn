import { createAction } from '../../../utils/createAction.utils';
import { CATEGORIES_TYPES } from './categories.types';

export const setCategoriesMap = (payload) =>
  createAction(CATEGORIES_TYPES.SET_CATEGORIES_MAP, payload);
