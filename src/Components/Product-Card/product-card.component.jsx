import { useContext } from 'react';
import { cartContext } from '../../Contexts/Cart.context';
import Button, { BUTTON_CLASSES } from '../Button/Button.component';

import './product-card.styles.scss';

import { addItemToCart } from '../../Store/reducers/cart/cart.action';
import { useDispatch, useSelector } from 'react-redux';
import { selectCartItems } from '../../Store/reducers/cart/cart.selector';

const ProductCard = ({ product }) => {
  // const { addItemToCart } = useContext(cartContext);
  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);
  const { name, price, imageUrl } = product;

  const addProductToCart = () => {
    dispatch(addItemToCart(cartItems, product));
  };

  return (
    <div className="product-card-container">
      <img src={imageUrl} alt={`${name}`} />
      <div className="footer">
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </div>
      <Button buttonType={BUTTON_CLASSES.inverted} onClick={addProductToCart}>
        Add to Cart
      </Button>
    </div>
  );
};

export default ProductCard;
