import { useContext } from 'react';

import Button from '../Button/Button.component';
import { cartContext } from '../../Contexts/Cart.context';

import './checkout-item.styles.scss';

const CheckoutItem = ({ product }) => {
  const { addItemToCart, removeItemFromCart, removeCompletely } =
    useContext(cartContext);

  const clearItemHandler = () => removeCompletely(product);
  const addItemHandler = () => addItemToCart(product);
  const removeItemHandler = () => removeItemFromCart(product);

  const { name, imageUrl, price, quantity } = product;
  return (
    <div className="checkout-item-container">
      <div className="image-container">
        <img src={imageUrl} alt={`${name}`} />
      </div>
      <span className="name">{name}</span>
      <span className="quantity">
        <div className="arrow" onClick={removeItemHandler}>
          &#10094;
        </div>
        <span className="value">{quantity}</span>
        <div className="arrow" onClick={addItemHandler}>
          &#10095;
        </div>
      </span>
      <span className="price">{price}</span>
      <div className="remove-button" onClick={clearItemHandler}>
        &#10005;
      </div>
    </div>
  );
};

export default CheckoutItem;
