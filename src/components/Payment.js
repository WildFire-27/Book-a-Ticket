import React from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

import Header from "./Header";
import "./Payment.css";

const Payment = () => {
  const navigate = useNavigate();
  const back = () => {
    navigate("/");
  };
  let total = 0;
  const itemList = useSelector((state) => state.menu.itemList);

  itemList.forEach((item) => {
    total += item.totalPrice;
  });
  return (
    <div id="paymentPage">
      <Header />
      <div id="payment">
        <h1>Payments Page</h1>
        <div id="payDiv">
          <h1>Total Amount Payable : ₹{total}</h1>

          <h2>Kindly choose a method of Payment</h2>
          <div id="payMethods">
            <div>
              {" "}
              <img
                src="https://cdn.worldvectorlogo.com/logos/google-pay-1.svg"
                width="200px"
                height="200px"
                alt="img"
              />{" "}
            </div>
            <div>
              {" "}
              <img
                src="https://cdn3.iconfinder.com/data/icons/popular-services-brands/512/paypal-512.png"
                width="200px"
                height="200px"
                alt="img"
              />{" "}
            </div>
            <div>
              <img
                src="https://cdn-icons-png.flaticon.com/512/217/217425.png"
                width="200px"
                height="200px"
                alt="img"
              />{" "}
            </div>
            <div>
              {" "}
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4a/Amazon_icon.svg/1024px-Amazon_icon.svg.png"
                width="200px"
                height="200px"
                alt="img"
              />{" "}
            </div>
          </div>
        </div>

        <button onClick={back}>Go To Main DashBoard</button>
      </div>
    </div>
  );
};

export default Payment;
