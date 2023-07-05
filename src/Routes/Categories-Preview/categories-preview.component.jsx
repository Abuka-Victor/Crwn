import { useContext, Fragment } from 'react';
// import { categoriesContext } from '../../Contexts/Categories.context';

import CategoryPreview from '../../Components/Category-Preview/category-preview.component';
import { useSelector } from 'react-redux';
import { selectCategoriesMap } from '../../Store/reducers/categories/categories.selector';

const CategoriesPreview = () => {
  // const { categoriesMap } = useContext(categoriesContext);
  const categoriesMap = useSelector(selectCategoriesMap);
  return (
    <Fragment>
      {Object.keys(categoriesMap).map((title, idx) => {
        const products = categoriesMap[title];

        return (
          <CategoryPreview
            key={`idx${Math.random()}`}
            title={title}
            products={products}
          />
        );
      })}
    </Fragment>
  );
};

export default CategoriesPreview;
