import { takeLatest, all, call, put } from 'redux-saga/effects';

import { getCategoriesAndDocuments } from '../../../utils/firebase/firebase.utils';

import { fetchCategorySuccess, fetchCategoryFailed } from './categories.action';

import { CATEGORIES_TYPES } from './categories.types';

export function* fetchCategoriesAsync() {
  try {
    const categoryMap = yield call(getCategoriesAndDocuments);
    yield put(fetchCategorySuccess(categoryMap));
  } catch (error) {
    yield put(fetchCategoryFailed(error));
  }
}

export function* onFetchCategories() {
  yield takeLatest(
    CATEGORIES_TYPES.FETCH_CATEGORIES_START,
    fetchCategoriesAsync
  );
}

export function* categoriesSaga() {
  yield all([call(onFetchCategories)]);
}
