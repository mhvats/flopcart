import { NavMenu } from "./components/navbar/Navmenu";
import { Category } from "./components/cateogry/Cateogry";
// import { Footer } from "./components/footer/Footer";
import { HomeProduct } from "./components/cateogry/HomeProduct";
import "./App.css";
import { cateogryData } from "./api/cateogryData";
import { HomeProductMobile } from "./api/HomeProductMobile";
import { HomeProductElectornics } from "./api/HomeProductElectornics";
import { HomeProductClothing } from "./api/HomeProductClothing";
export const App = () => {
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
        <NavMenu />
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
        {/* <div style={{ position: "absolute", bottom: "0"}}>
          <Footer />
        </div> */}
        <HomeProduct heading="Best Of Fashion" products={HomeProductClothing} />
        <HomeProduct
          heading="Best Of Mobile Phones"
          products={HomeProductMobile}
        />
        <HomeProduct
          heading="Best Of Electornics"
          products={HomeProductElectornics}
        />
      </div>
    </>
  );
};
