import { useContext } from 'react';

import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';
import { cartOpenContext } from '../../Contexts/CartOpen.context';

import './cart-icon.styles.scss';

const CartIcon = ({ onClick }) => {
  const { cartItems } = useContext(cartOpenContext);

  const itemCount = cartItems.reduce(
    (accumulator, currentElement) => currentElement.quantity + accumulator,
    0
  );

  return (
    <div className="cart-icon-container" onClick={onClick}>
      <ShoppingIcon className="shopping-icon" />
      <span className="item-count">{itemCount}</span>
    </div>
  );
};

export default CartIcon;
