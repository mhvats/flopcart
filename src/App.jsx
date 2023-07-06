import { NavMenu } from "./components/navbar/Navmenu";
import { Category } from "./components/cateogry/Cateogry";
import "./App.css";

export const App = () => {
  const cateogryStyle = {
    display: "flex",
    justifyContent: "center",
    borderBottom: "1px solid gray",
    padding: "0.5rem 0rem",
  };
  const cateogryData = [
    {
      id: 1,
      title: "Fashion",
      img: "https://rukminim1.flixcart.com/fk-p-flap/80/80/image/0d75b34f7d8fbcb3.png?q=100",
      subcategories: ["Clothing", "Accessories", "Shoes"],
    },
    {
      id: 2,
      title: "Mobile",
      img: "https://rukminim1.flixcart.com/flap/80/80/image/22fddf3c7da4c4f4.png?q=100",
      subcategories: ["Smartphones", "Tablets", "Accessories"],
    },
    {
      id: 3,
      title: "Electronics",
      img: "https://rukminim1.flixcart.com/flap/80/80/image/69c6589653afdb9a.png?q=100",
      subcategories: ["Laptops", "Cameras", "Audio"],
    },
  ];

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
        <div style={cateogryStyle}>{renderCategory}</div>
      </div>
    </>
  );
};
