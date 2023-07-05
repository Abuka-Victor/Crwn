import { useContext, Fragment } from 'react';
// import { categoriesContext } from '../../Contexts/Categories.context';

import CategoryPreview from '../../Components/Category-Preview/category-preview.component';
import Spinner from '../../Components/Spinner/spinner.component';
import { useSelector } from 'react-redux';
import {
  selectCategoriesMap,
  selectIsLoading,
} from '../../Store/reducers/categories/categories.selector';

const CategoriesPreview = () => {
  // const { categoriesMap } = useContext(categoriesContext);
  const categoriesMap = useSelector(selectCategoriesMap);
  const isLoading = useSelector(selectIsLoading);
  return (
    <Fragment>
      {isLoading ? (
        <Spinner />
      ) : (
        Object.keys(categoriesMap).map((title, idx) => {
          const products = categoriesMap[title];

          return (
            <CategoryPreview
              key={`idx${Math.random()}`}
              title={title}
              products={products}
            />
          );
        })
      )}
    </Fragment>
  );
};

export default CategoriesPreview;
