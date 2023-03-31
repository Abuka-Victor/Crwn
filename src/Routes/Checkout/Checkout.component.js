import { useContext } from 'react';
import CheckoutItem from '../../Components/Checkout-Item/Checkout-Item.component';
import { cartContext } from '../../Contexts/Cart.context';

import './checkout.styles.scss';

const Checkout = () => {
  const { cartItems, total } = useContext(cartContext);

  return (
    <div className="checkout-container">
      <div className="checkout-header">
        <div className="header-block">
          <span>Product</span>
        </div>
        <div className="header-block">
          <span>Description</span>
        </div>
        <div className="header-block">
          <span>Quantity</span>
        </div>
        <div className="header-block">
          <span>Price</span>
        </div>
        <div className="header-block">
          <span>Remove</span>
        </div>
      </div>
      {cartItems.map((item) => (
        <CheckoutItem key={item.id} product={item} />
      ))}
      <span className="total">Total: {`$${total}`}</span>
    </div>
  );
};

export default Checkout;
