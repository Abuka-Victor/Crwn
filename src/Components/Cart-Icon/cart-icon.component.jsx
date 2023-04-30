import { useContext } from 'react';

import { cartContext } from '../../Contexts/Cart.context';

import { CartIconContainer, ShoppingIcon, ItemCount } from './cart-icon.styles';

const CartIcon = ({ onClick }) => {
  const { count } = useContext(cartContext);

  return (
    <CartIconContainer onClick={onClick}>
      <ShoppingIcon />
      <ItemCount>{count}</ItemCount>
    </CartIconContainer>
  );
};

export default CartIcon;
