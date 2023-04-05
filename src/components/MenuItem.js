import React from "react";
import { useDispatch } from "react-redux";
import "./Menu.css";
import { menuActions } from "../store/menu-slice";

const MenuItem = ({ name, quantity, total, price, id }) => {
  const dispatch = useDispatch();

  const decrement = () => {
    dispatch(menuActions.removeMenu(id));
  };
  const increment = () => {
    dispatch(
      menuActions.addToMenu({
        id,
        name,
        price,
      })

    );
  };
  return (
    <div className="cartItem">
      <h2>Place: {name}</h2>
      <h2>Cost: ₹{price}</h2>
      <h2>Ticket : {quantity}</h2>
      <h2>Total: ₹{total}</h2>
      <div id="incdecBtn">
        <button className="cart-actions" onClick={decrement}>
          <h2>-</h2>
        </button>
        <button className="cart-actions" onClick={increment}>
          <h2>+</h2>
        </button>
      </div>
    </div>
  );
};

export default MenuItem;
