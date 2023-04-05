import React from "react";
import Header from "./Header";
import Products from "./Tickets";
import "./Layout.css";
import MenuItems from "./MenuItems";
import { useSelector } from "react-redux";
const Layout = () => {
  const showMenu = useSelector((state) => state.menu.showMenu);

  return (
    <React.Fragment>
      <div className="layout">
        <Header />
        <h1
          style={{ textAlign: "center", marginTop: "120px", fontSize: "50px" }}
        >
          DashBoard
        </h1>
        <h2
          style={{ textAlign: "center", marginTop: "10px", fontSize: "20px" }}
        >
          Choose your City & Book Tickets
        </h2>
        <Products />
        {showMenu && <MenuItems />}
      </div>
    </React.Fragment>
  );
};

export default Layout;
