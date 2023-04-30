import { useNavigate } from 'react-router-dom';
import {
  BackgroundImage,
  Body,
  CategoryItemContainer,
} from './category-item.styles';

const CategoryItem = ({ category }) => {
  const navigate = useNavigate();
  return (
    <CategoryItemContainer onClick={() => navigate(category.route)}>
      <BackgroundImage imageUrl={category.imageUrl}>
        <Body>
          <h2>{category.title}</h2>
          <p>Buy Now</p>
        </Body>
      </BackgroundImage>
    </CategoryItemContainer>
  );
};

export default CategoryItem;
