import React from "react";
import MenuItem from "./MenuItem";
import "./Menu.css";
import { useSelector } from "react-redux";
import Total from "./Total";

const MenuItems = () => {
  const menuItems = useSelector((state) => state.menu.itemList);
  return (
    <div className="cart-container">
      <h1 style={{textAlign:'center', color:'white'}}>Your Tickets</h1>
      <ul>
     
        {menuItems.map((item) => (
          <li key={item.id}>
            <MenuItem
              id={item.id}
              price={item.price}
              total={item.totalPrice}
              name={item.name}
              quantity={item.quantity}
            />
          </li>
        ))}
        <Total/>
      </ul>
    </div>
  );
};

export default MenuItems;
