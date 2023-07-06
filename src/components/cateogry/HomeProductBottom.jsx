import './HomeProduct.css'
export const HomeProductBottom = ({price, img, title}) => {
  return (
    <div className="homeproduct-bottom-container">
      <div id="homeproduct-bottom">
        <img src={img} />
        <h6>{title}</h6>
        <h5>From {price}</h5>
      </div>
    </div>
  );
};
