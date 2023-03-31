import { createContext, useState, useEffect } from 'react';

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

export const cartContext = createContext({
  open: false,
  setOpen: () => null,
  cartItems: [],
  addItemToCart: () => {},
  removeItemFromCart: () => {},
  removeCompletely: () => {},
});

export const CartOpenProvider = ({ children }) => {
  const [open, setOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [total, setTotal] = useState(0);
  const [count, setCount] = useState(0);

  useEffect(() => {
    const currentCount =
      cartItems.length !== 0
        ? cartItems.reduce(
            (accumulator, currentElement) =>
              accumulator + currentElement.quantity,
            0
          )
        : 0;
    setCount(currentCount);

    const currentTotal =
      cartItems.length !== 0
        ? cartItems.reduce(
            (accumulator, currentElement) =>
              accumulator + currentElement.quantity * currentElement.price,
            0
          )
        : 0;
    setTotal(currentTotal);
  }, [cartItems]);

  const addItemToCart = (productToAdd) => {
    setCartItems(addCartItems(cartItems, productToAdd));
  };

  const removeItemFromCart = (productToRemove) => {
    setCartItems(removeCartItems(cartItems, productToRemove));
  };

  const removeCompletely = (productToRemove) => {
    setCartItems(removeItemCompletely(cartItems, productToRemove));
  };

  const value = {
    open,
    setOpen,
    addItemToCart,
    cartItems,
    total,
    count,
    removeItemFromCart,
    removeCompletely,
  };

  return <cartContext.Provider value={value}>{children}</cartContext.Provider>;
};
