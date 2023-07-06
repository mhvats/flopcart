import { NavMenu } from "./components/navbar/Navmenu";
import { Category } from "./components/cateogry/Cateogry";
import { Footer } from "./components/footer/Footer";
import "./App.css";
import { cateogryData } from "./api/cateogryData";
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
        <div style={{ position: "absolute", bottom: "0" }}>
          <Footer />
        </div>
      </div>
    </>
  );
};
