import { useContext } from 'react';
import { cartContext } from '../../Contexts/Cart.context.js';

import { useNavigate } from 'react-router-dom';

import Button from '../Button/Button.component.js';
import CartItem from '../Cart-Item/cart-item.component.jsx';
import './cart-dropdown.styles.scss';

const CartDropdown = () => {
  const { cartItems } = useContext(cartContext);

  const navigate = useNavigate();

  return (
    <div className="cart-dropdown-container">
      <div className="cart-items">
        <div>
          {cartItems.map((item) => (
            <CartItem key={item.id} product={item} />
          ))}
        </div>
        <Button onClick={() => navigate('/checkout')}>CHECKOUT</Button>
      </div>
    </div>
  );
};

export default CartDropdown;
