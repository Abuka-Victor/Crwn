import React from 'react';
import { Link } from 'react-router-dom';

import './category-preview.styles.scss';
import ProductCard from '../Product-Card/product-card.component';

const CategoryPreview = ({ title, products }) => {
  return (
    <div className="category-preview-container">
      <Link to={`${title}`}>
        <h2>
          <span className="title">{title.toUpperCase()}</span>
        </h2>
      </Link>
      <div className="preview">
        {products
          .filter((_, idx) => idx < 4)
          .map((product, id) => (
            <ProductCard key={id} product={product} />
          ))}
      </div>
    </div>
  );
};

export default CategoryPreview;
