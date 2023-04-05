import React from "react";
import { useDispatch } from "react-redux";
import { menuActions } from "../store/menu-slice";
import "./Product.css";

const Ticket = ({ name, id, imgURL, price }) => {
  const dispatch = useDispatch();

  const addToMenu = () => {
    dispatch(menuActions.addToMenu({ id, name, price }));
  };
  return (
    <div className="card">
      <div id="infoCard">
      <img id="fruitImg" src={imgURL} alt={name} />

        <h1>{name}</h1>
        <h1>₹{price}</h1>
        <button id="buttonCart" onClick={addToMenu}>
        Book
      </button>
      </div>

  
    </div>
  );
};

export default Ticket;
