import './category-item.scss';

const CategoryItem = ({ category }) => {
  return (
    <div
      className="category-container"
      style={{
        backgroundImage: `url(${category.imageUrl})`,
      }}
    >
      <div className="category-body-container">
        <h2>{category.title}</h2>
        <p>Buy Now</p>
      </div>
    </div>
  );
};

export default CategoryItem;
