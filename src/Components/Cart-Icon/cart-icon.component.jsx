import { useContext } from 'react';

import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';
import { cartContext } from '../../Contexts/Cart.context';

import './cart-icon.styles.scss';

const CartIcon = ({ onClick }) => {
  const { count } = useContext(cartContext);

  return (
    <div className="cart-icon-container" onClick={onClick}>
      <ShoppingIcon className="shopping-icon" />
      <span className="item-count">{count}</span>
    </div>
  );
};

export default CartIcon;
