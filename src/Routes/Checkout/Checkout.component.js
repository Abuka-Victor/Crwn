import { useContext } from 'react';
import CheckoutItem from '../../Components/Checkout-Item/Checkout-Item.component';
import { cartContext } from '../../Contexts/Cart.context';

import { PaystackButton } from 'react-paystack';

import './checkout.styles.scss';
import { useSelector } from 'react-redux';
import {
  selectCartItems,
  selectTotal,
} from '../../Store/reducers/cart/cart.selector';
import Button, {
  BUTTON_CLASSES,
} from '../../Components/Button/Button.component';
import { selectCurrentUser } from '../../Store/reducers/user/user.selector';

const publish_key = process.env.REACT_APP_TEST_PUBLISH;
const secret_key = process.env.REACT_APP_TEST_SECRET;

const Checkout = () => {
  // const { cartItems, total } = useContext(cartContext);

  const cartItems = useSelector(selectCartItems);
  const total = useSelector(selectTotal);
  const user = useSelector(selectCurrentUser);

  console.log(JSON.stringify(user));

  const onPaymentSuccess = (ref) => {
    console.log(ref);
  };

  const onPaymentClosed = () => {
    console.log('Payment Done');
  };

  const config = {
    reference: new Date().getTime().toString(),
    email: 'test@email.com',
    amount: total * 100, //Amount is in the country's lowest currency. E.g Kobo, so 20000 kobo = N200
    publicKey: publish_key,
  };

  const componentProps = {
    ...config,
    text: 'Pay',
    onSuccess: (reference) => onPaymentSuccess(reference),
    onClose: onPaymentClosed,
  };

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
      <PaystackButton {...componentProps} />
    </div>
  );
};

export default Checkout;
