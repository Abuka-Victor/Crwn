import { useContext } from 'react';
import { cartContext } from '../../Contexts/Cart.context';
import Button from '../Button/Button.component';

import './product-card.styles.scss';

const ProductCard = ({ product }) => {
  const { addItemToCart } = useContext(cartContext);
  const { name, price, imageUrl } = product;

  const addProductToCart = () => {
    addItemToCart(product);
  };

  return (
    <div className="product-card-container">
      <img src={imageUrl} alt={`${name}`} />
      <div className="footer">
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </div>
      <Button buttonType="inverted" onClick={addProductToCart}>
        Add to Cart
      </Button>
    </div>
  );
};

export default ProductCard;
