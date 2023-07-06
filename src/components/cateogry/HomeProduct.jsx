import "./HomeProduct.css";
// import { HomeProductElectornics } from "../../api/HomeProductElectornics";
import { HomeProductBottom } from "./HomeProductBottom";
export const HomeProduct = ({ heading, products }) => {
  const renderHomeProduct = products.map((item) => {
    return (
      <HomeProductBottom
        key={item.id}
        price={item.price}
        title={item.title}
        img={item.img}
      />
    );
  });
  return (
    <div className="homeprdouct-container">
      <div id="homeproduct-top">
        <h3>{heading}</h3>
      </div>
      <div style={{ display: "flex", overflow: "auto" }}>
        {renderHomeProduct}
      </div>
    </div>
  );
};
