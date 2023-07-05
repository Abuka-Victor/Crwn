import { useContext } from 'react';

// import { cartContext } from '../../Contexts/Cart.context';

import { CartIconContainer, ShoppingIcon, ItemCount } from './cart-icon.styles';
import { useSelector } from 'react-redux';
import { selectCount } from '../../Store/reducers/cart/cart.selector';

const CartIcon = ({ onClick }) => {
  // const { count } = useContext(cartContext);
  const count = useSelector(selectCount);

  return (
    <CartIconContainer onClick={onClick}>
      <ShoppingIcon />
      <ItemCount>{count}</ItemCount>
    </CartIconContainer>
  );
};

export default CartIcon;
