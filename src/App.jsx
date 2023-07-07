import { NavMenu } from "./components/navbar/Navmenu";
import { Category } from "./components/cateogry/Cateogry";
// import { Footer } from "./components/footer/Footer";
import { HomeProduct } from "./components/cateogry/HomeProduct";
import "./App.css";
import { cateogryData } from "./api/cateogryData";
import { HomeProductMobile } from "./api/HomeProductMobile";
import { HomeProductElectornics } from "./api/HomeProductElectornics";
import { HomeProductClothing } from "./api/HomeProductClothing";
import { ChildApi } from "./api/ChildApi";
import { HomeProductBottomChild } from "./components/cateogry/HomeProductBottomChild";
import { Data } from "./api/Data";
import { useState } from "react";
import array from "./components/cateogry/HomeProductBottom";
export const App = () => {
  const [stateChange, setStateChange] = useState(true);
  const [homeProductChild, setHomeProductChild] = useState(false);
  const include = ChildApi.includes(array[0]);
  const handleStateChange = () => {
    // e.stopPropagation();
    setStateChange((prevState) => !prevState);
  };
  const handleHomeProductChildState = () => {
    console.log(include);
    if (include) {
      setHomeProductChild((prevState) => !prevState);
    }
  };
  console.log(Data);
  const renderData = Data.map((item) => {
    return (
      <HomeProductBottomChild title={item.title} key={item.id} id={item.id} />
    );
  });
  const renderCategory = cateogryData.map((item) => {
    return (
      <Category
        key={item.id}
        title={item.title}
        img={item.img}
        subcategories={item.subcategories}
      />
    );
  });
  return (
    <>
      <div>
        <NavMenu
          handleStateChange={handleStateChange}
          stateChange={stateChange}
        />
        {stateChange && (
          <div>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                borderBottom: "1px solid gray",
                padding: "0.5rem 0rem",
              }}
            >
              {renderCategory}
            </div>
            <HomeProduct
              heading="Best Of Fashion"
              products={HomeProductClothing}
              handleStateChange={handleStateChange}
              handleHomeProductChildState={handleHomeProductChildState}
            />
            <HomeProduct
              heading="Best Of Mobile Phones"
              products={HomeProductMobile}
              handleStateChange={handleStateChange}
              handleHomeProductChildState={handleHomeProductChildState}
            />
            <HomeProduct
              heading="Best Of Electornics"
              products={HomeProductElectornics}
              handleStateChange={handleStateChange}
              handleHomeProductChildState={handleHomeProductChildState}
            />
          </div>
        )}
        {homeProductChild && <div>{renderData}</div>}
      </div>
    </>
  );
};
