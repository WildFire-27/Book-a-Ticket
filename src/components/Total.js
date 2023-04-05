import React from "react";
import { useSelector } from "react-redux";
import { useNavigate} from "react-router-dom";

import "./Layout.css";

const Total = () => {
	const navigate = useNavigate();
	const detailsPage = () => {
        // payment
		navigate("/details");
	}

  let total = 0;
  const itemList = useSelector((state) => state.menu.itemList);

  itemList.forEach((item) => {
    total += item.totalPrice;
  });

  return (
    <div className="total-price">
      <h4 style={{ textAlign: "left" }}>Proceed to check details & payment</h4>
      <br />

      <h3>Grand Total: ₹{total}</h3>
      <br />
      <button className="orderBtn" onClick={detailsPage}>
        Details Page
      </button>
   
    </div>
  );
};

export default Total;
