import { useContext, Fragment } from 'react';
import { categoriesContext } from '../../Contexts/Categories.context';

import CategoryPreview from '../../Components/Category-Preview/category-preview.component';

const CategoriesPreview = () => {
  const { categoriesMap } = useContext(categoriesContext);
  return (
    <Fragment>
      {Object.keys(categoriesMap).map((title) => {
        const products = categoriesMap[title];

        return <CategoryPreview title={title} products={products} />;
      })}
    </Fragment>
  );
};

export default CategoriesPreview;
