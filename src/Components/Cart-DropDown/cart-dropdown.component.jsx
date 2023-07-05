import { useContext } from 'react';
import { cartContext } from '../../Contexts/Cart.context.js';

import { useNavigate } from 'react-router-dom';

import Button from '../Button/Button.component.js';
import CartItem from '../Cart-Item/cart-item.component.jsx';
import {
  CartDropdownContainer,
  EmptyMessage,
  CartItems,
} from './cart-dropdown.styles';
import { useSelector } from 'react-redux';
import { selectCartItems } from '../../Store/reducers/cart/cart.selector.js';

const CartDropdown = () => {
  // const { cartItems } = useContext(cartContext);
  const cartItems = useSelector(selectCartItems);

  const navigate = useNavigate();

  return (
    <CartDropdownContainer>
      <CartItems>
        <div>
          {cartItems.length ? (
            cartItems.map((item) => <CartItem key={item.id} product={item} />)
          ) : (
            <EmptyMessage>Your cart is empty</EmptyMessage>
          )}
        </div>
        <Button onClick={() => navigate('/checkout')}>CHECKOUT</Button>
      </CartItems>
    </CartDropdownContainer>
  );
};

export default CartDropdown;
