import { createContext, useState, useEffect, useReducer } from 'react';

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
  total: 0,
  count: 0,
});

const CART_ACTION_TYPES = {
  ADD_ITEM_TO_CART: 'ADD_ITEM_TO_CART',
  REMOVE_ITEM_FROM_CART: 'REMOVE_ITEM_FROM_CART',
  REMOVE_COMPLETELY: 'REMOVE_COMPLETELY',
  OPEN_CART: 'OPEN_CART',
  SET_TOTAL: 'SET_TOTAL',
  SET_COUNT: 'SET_COUNT',
};

const INITIAL_STATE = {
  open: false,
  cartItems: [],
  total: 0,
  count: 0,
};

const cartReducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case CART_ACTION_TYPES.ADD_ITEM_TO_CART:
      return {
        ...state,
        cartItems: addCartItems(state.cartItems, payload),
      };

    case CART_ACTION_TYPES.OPEN_CART:
      return {
        ...state,
        open: payload,
      };

    case CART_ACTION_TYPES.REMOVE_COMPLETELY:
      return {
        ...state,
        cartItems: removeItemCompletely(state.cartItems, payload),
      };

    case CART_ACTION_TYPES.REMOVE_ITEM_FROM_CART:
      return {
        ...state,
        cartItems: removeCartItems(state.cartItems, payload),
      };

    case CART_ACTION_TYPES.SET_COUNT:
      return {
        ...state,
        count: payload,
      };

    case CART_ACTION_TYPES.SET_TOTAL:
      return {
        ...state,
        total: payload,
      };

    case 'SET_CART_ITEMS':
      return {
        ...state,
        ...payload,
      };

    default:
      throw new Error(`Unhandle type of ${type} in Cart Reducer`);
  }
};

export const CartOpenProvider = ({ children }) => {
  // const [open, setOpen] = useState(false);
  // const [cartItems, setCartItems] = useState([]);
  // const [total, setTotal] = useState(0);
  // const [count, setCount] = useState(0);

  const [state, dispatch] = useReducer(cartReducer, INITIAL_STATE);

  const { open, cartItems, total, count } = state;

  // useEffect(() => {
  //   const currentCount =
  //     cartItems.length !== 0
  //       ? cartItems.reduce(
  //           (accumulator, currentElement) =>
  //             accumulator + currentElement.quantity,
  //           0
  //         )
  //       : 0;
  //   dispatch({ type: CART_ACTION_TYPES.SET_COUNT, payload: currentCount });

  //   const currentTotal =
  //     cartItems.length !== 0
  //       ? cartItems.reduce(
  //           (accumulator, currentElement) =>
  //             accumulator + currentElement.quantity * currentElement.price,
  //           0
  //         )
  //       : 0;
  //   dispatch({ type: CART_ACTION_TYPES.SET_TOTAL, payload: currentTotal });
  // }, [cartItems]);

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

    dispatch({
      type: 'SET_CART_ITEMS',
      payload: {
        cartItems: newCartItems,
        total: currentTotal,
        count: currentCount,
      },
    });
  };

  const addItemToCart = (productToAdd) => {
    // setCartItems(addCartItems(cartItems, productToAdd));
    // dispatch({
    //   type: CART_ACTION_TYPES.ADD_ITEM_TO_CART,
    //   payload: productToAdd,
    // });

    const newCartItems = addCartItems(cartItems, productToAdd);
    updateCartItems(newCartItems);
  };

  const removeItemFromCart = (productToRemove) => {
    // setCartItems(removeCartItems(cartItems, productToRemove));
    // dispatch({
    //   type: CART_ACTION_TYPES.REMOVE_ITEM_FROM_CART,
    //   payload: productToRemove,
    // });

    const newCartItems = removeCartItems(cartItems, productToRemove);
    updateCartItems(newCartItems);
  };

  const removeCompletely = (productToRemove) => {
    // setCartItems(removeItemCompletely(cartItems, productToRemove));
    // dispatch({
    //   type: CART_ACTION_TYPES.REMOVE_COMPLETELY,
    //   payload: productToRemove,
    // });

    const newCartItems = removeItemCompletely(cartItems, productToRemove);
    updateCartItems(newCartItems);
  };

  const setOpen = () => {
    dispatch({ type: CART_ACTION_TYPES.OPEN_CART, payload: !open });
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
