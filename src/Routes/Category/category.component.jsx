import { useState, useEffect, useContext, Fragment } from 'react';
import { useParams } from 'react-router-dom';

// import { categoriesContext } from '../../Contexts/Categories.context';
import './category.styles.scss';
import ProductCard from '../../Components/Product-Card/product-card.component';
import { useSelector } from 'react-redux';
import { selectCategoriesMap } from '../../Store/reducers/categories/categories.selector';

const Category = () => {
  // const { categoriesMap } = useContext(categoriesContext);
  const categoriesMap = useSelector(selectCategoriesMap);
  const { category } = useParams();
  const [products, setProducts] = useState(categoriesMap[category]);

  useEffect(() => {
    setProducts(categoriesMap[category]);
  }, [categoriesMap, category]);

  return (
    <Fragment>
      <h2 className="category-title">{category.toUpperCase()}</h2>
      <div className="category-container">
        {products &&
          products.map((product) => {
            return <ProductCard key={product.id} product={product} />;
          })}
      </div>
    </Fragment>
  );
};

export default Category;
