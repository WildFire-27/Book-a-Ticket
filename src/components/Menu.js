import React from "react";
import { useDispatch } from "react-redux";
import { menuActions } from "../store/menu-slice";
import "./Menu.css";

const Menu = () => {
  //to grab the state
  // const quantity = useSelector((state) => state.cart.totalQuantity);

  const dispatch = useDispatch();

  const showMenu = () => {
    //from cat-slice actions to dispatch
    dispatch(menuActions.showMenu());
  }
  return (
    <div className="cartIcon">
      <h3 onClick={showMenu}>
        <div id="ham"></div>
        <div id="ham"></div>
        <div id="ham"></div>
      </h3>
    </div>
  );
};

export default Menu;
