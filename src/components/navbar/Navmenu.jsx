import { useState } from "react";
import "./NavMenu.css";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import SearchIcon from "@mui/icons-material/Search";
export const NavMenu = () => {
  const [navmenuSearchProduct, setNavmenuSearchProduct] = useState("");
  const handleClick = (e) => {
    e.stopPropagation();
    setNavmenuSearchProduct("");
    console.log(navmenuSearchProduct);
  };
  return (
    <div className="navmenu-container">
      <div className="navmenu-left">
        <div className="left" id="left-1">
          <h1>FlopCart</h1>
        </div>
        <div className="left" id="left-2">
          <input
            value={navmenuSearchProduct}
            onChange={(e) => setNavmenuSearchProduct(e.target.value)}
            placeholder="Search for Products.."
          />
          <SearchIcon style={{ cursor: "pointer" }} onClick={handleClick} />
        </div>
      </div>
      <div className="navmenu-right">
        <div id="cart-logo" className="cart">
          <ShoppingCartIcon />
        </div>
        <div id="cart-text" className="cart">
          <h3>Cart</h3>
        </div>
      </div>
    </div>
  );
};
