import { combineReducers } from 'redux';

import { userReducer } from './reducers/user/user.reducer';
import { categoriesReducer } from './reducers/categories/categories.reducer';
import { cartReducer } from './reducers/cart/cart.reducer';

export const rootReducer = combineReducers({
  user: userReducer,
  categories: categoriesReducer,
  cart: cartReducer,
});
