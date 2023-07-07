import { useState } from "react";
import "./HomeProduct.css";
import { HomeProductBottomChild } from "./HomeProductBottomChild";
const array = [];
export const HomeProductBottom = ({
  id,
  price,
  img,
  title,
  handleStateChange,
  handleHomeProductChildState,
}) => {
  const [handleState, setHandleState] = useState(true);
  const handleStateChangeRef = () => {
    if (title === "Men wear" || "Women wear") {
      setHandleState((prevState) => !prevState);
      array.push(id);
      // setTimeout(() => {
      //   array.pop();
      // }, 1000);
      console.log(id);
      console.log(array);
      console.log(`hello ${title}`);
      handleStateChange();
      handleHomeProductChildState();
    }
  };
  return (
    <div className="homeproduct-bottom-container">
      <div id="homeproduct-bottom" onClick={handleStateChangeRef}>
        <img src={img} />
        <h6>{title}</h6>
        <h5>From {price}</h5>
      </div>
    </div>
  );
};
export default array;
