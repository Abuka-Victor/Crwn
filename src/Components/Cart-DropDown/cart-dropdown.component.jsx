import { useContext } from 'react';
import { cartOpenContext } from '../../Contexts/CartOpen.context.js';

import Button from '../Button/Button.component.js';
import CartItem from '../Cart-Item/cart-item.component.jsx';
import './cart-dropdown.styles.scss';

const CartDropdown = () => {
  const { cartItems } = useContext(cartOpenContext);

  return (
    <div className="cart-dropdown-container">
      <div className="cart-items">
        <div>
          {cartItems.map((item) => (
            <CartItem key={item.id} product={item} />
          ))}
        </div>
        <Button>CHECKOUT</Button>
      </div>
    </div>
  );
};

export default CartDropdown;
