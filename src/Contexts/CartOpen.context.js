import { createContext, useState } from 'react';

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

export const cartOpenContext = createContext({
  open: false,
  setOpen: () => null,
  cartItems: [],
  addItemToCart: () => {},
});

export const CartOpenProvider = ({ children }) => {
  const [open, setOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);

  const addItemToCart = (productToAdd) => {
    setCartItems(addCartItems(cartItems, productToAdd));
  };

  const value = { open, setOpen, addItemToCart, cartItems };

  return (
    <cartOpenContext.Provider value={value}>
      {children}
    </cartOpenContext.Provider>
  );
};
