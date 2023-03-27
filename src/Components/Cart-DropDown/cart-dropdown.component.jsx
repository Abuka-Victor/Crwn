import React from 'react';

import Button from '../Button/Button.component.js';
import './cart-dropdown.styles.scss';

const CartDropdown = () => {
  return (
    <div className="cart-dropdown-container">
      <div className="cart-items">
        <Button>CHECKOUT</Button>
      </div>
    </div>
  );
};

export default CartDropdown;
