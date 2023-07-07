import "./HomeProduct.css";
// import { HomeProductElectornics } from "../../api/HomeProductElectornics";
import { HomeProductBottom } from "./HomeProductBottom";
// import { HomeProductBottomChild } from "./HomeProductBottomChild";
export const HomeProduct = ({
  heading,
  products,
  handleStateChange,
  handleHomeProductChildState,
}) => {
  const renderHomeProduct = products.map((item) => {
    return (
      <HomeProductBottom
        key={item.id}
        id={item.id}
        price={item.price}
        title={item.title}
        img={item.img}
        handleStateChange={handleStateChange}
        handleHomeProductChildState={handleHomeProductChildState}
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
