import { createAction } from '../../../utils/createAction.utils';
import { CART_ACTION_TYPES } from './cart.types';

const addCartItems = (cartItems, productToAdd) => {
  // Find out whether the item exists in the cart
  const product = cartItems.find((item) => {
    return item.id === productToAdd.id;
  });

  // If found increment its quantity else create a new cart object
  if (!product) {
    return [...cartItems, { ...productToAdd, quantity: 1 }];
  }

  return cartItems.map((item) => {
    return item.id === product.id
      ? { ...item, quantity: ++item.quantity }
      : item;
  });
};

const removeCartItems = (cartItems, productToRemove) => {
  const product = cartItems.find((item) => item.id === productToRemove.id);

  if (!product) return;

  if (product.quantity === 1) {
    // Find the index number and return the splice without the item
    const indexNo = cartItems.indexOf(product);
    const newCart = [...cartItems];
    newCart.splice(indexNo, 1);
    return newCart;
  }

  return cartItems.map((item) => {
    return item.id === product.id
      ? { ...item, quantity: --item.quantity }
      : item;
  });
};

const removeItemCompletely = (cartItems, productToRemove) => {
  return cartItems.filter((item) => item.id !== productToRemove.id);
};

const updateCartItems = (newCartItems) => {
  const currentCount = newCartItems.reduce(
    (accumulator, currentElement) => accumulator + currentElement.quantity,
    0
  );

  const currentTotal = newCartItems.reduce(
    (accumulator, currentElement) =>
      accumulator + currentElement.quantity * currentElement.price,
    0
  );

  return {
    cartItems: newCartItems,
    total: currentTotal,
    count: currentCount,
  };
};

const setCartItems = (cartItems) => {
  return createAction(CART_ACTION_TYPES.SET_CART_ITEMS, cartItems);
};

export const addItemToCart = (cartItems, productToAdd) => {
  const newCartItems = addCartItems(cartItems, productToAdd);
  return setCartItems(updateCartItems(newCartItems));
};

export const removeItemFromCart = (cartItems, productToRemove) => {
  const newCartItems = removeCartItems(cartItems, productToRemove);
  return setCartItems(updateCartItems(newCartItems));
};

export const removeCompletely = (cartItems, productToRemove) => {
  const newCartItems = removeItemCompletely(cartItems, productToRemove);
  return setCartItems(updateCartItems(newCartItems));
};

export const setOpen = (openBoolean) =>
  createAction(CART_ACTION_TYPES.SET_CART_OPEN, { open: openBoolean });
