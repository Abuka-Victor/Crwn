import { useState, useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';

import { categoriesContext } from '../../Contexts/Categories.context';
import './category.styles.scss';
import ProductCard from '../../Components/Product-Card/product-card.component';

const Category = () => {
  const { categoriesMap } = useContext(categoriesContext);
  const { category } = useParams();
  const [products, setProducts] = useState(categoriesMap[category]);

  useEffect(() => {
    setProducts(categoriesMap[category]);
  }, [categoriesMap, category]);

  return (
    <div className="category-container">
      {products &&
        products.map((product) => {
          return <ProductCard key={product.id} product={product} />;
        })}
    </div>
  );
};

export default Category;
