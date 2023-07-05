import { createSelector } from 'reselect';

const selectCartReducer = (state) => state.cart;

export const selectCartItems = createSelector(
  [selectCartReducer],
  (cart) => cart.cartItems
);

export const selectCartOpen = createSelector(
  [selectCartReducer],
  (cart) => cart.open
);

export const selectCount = createSelector(
  [selectCartReducer],
  (cart) => cart.count
);

export const selectTotal = createSelector(
  [selectCartReducer],
  (cart) => cart.total
);

// You could've put the reduce logic in cart.action -> updateCartItems() here in selectTotal
// and selectCount and take them off the initial state so that they are only rendered by the selector
