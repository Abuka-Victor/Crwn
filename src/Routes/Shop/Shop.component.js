import { useContext } from 'react';
import { productContext } from '../../Contexts/Products.context';

import ProductCard from '../../Components/Product-Card/product-card.component';
import './shop.styles.scss';

const Shop = () => {
  const { products } = useContext(productContext);
  return (
    <div className="product-container">
      {products.map((product) => (
        <ProductCard key={product.id} product={product}></ProductCard>
      ))}
    </div>
  );
};

export default Shop;
