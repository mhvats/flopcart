import "./Cateogry.css";

export const Category = ({ title, img, subcategories }) => {
  return (
    <div className="category">
      <div id="img" className="item">
        <img src={img} alt={title} />
      </div>
      <div className="item">
        <h5>
          <select>
            <option disabled selected>
              {title}
            </option>
            {subcategories.map((subcategory) => (
              <option key={subcategory}>{subcategory}</option>
            ))}
          </select>
        </h5>
      </div>
    </div>
  );
};
