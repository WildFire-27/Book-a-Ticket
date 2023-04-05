import React from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import "./Details.css";
import Header from "./Header";
import MenuItem from "./MenuItem";

function Details() {
  const navigate = useNavigate();
  const paymentPage = () => {
    navigate("/payment");
  };

  const menuItems = useSelector((state) => state.menu.itemList);

  let total = 0;
  const itemList = useSelector((state) => state.menu.itemList);

  itemList.forEach((item) => {
    total += item.totalPrice;
  });

  return (
    <div id="detailPage">
      <Header />
      <div id="details">
        <h1>Details</h1>
        <h2>Kindly check details of your tickets to move further</h2>
        <div id="detailsTicket" >
        <h2>Below are your selected Tickets & destination🎫</h2>

       <div id="itemTicket">   
       {menuItems.map((item) => (
          <h1 key={item.id}>
            <MenuItem
              id={item.id}
              price={item.price}
              total={item.totalPrice}
              name={item.name}
              quantity={item.quantity}
            />
          </h1>
        ))}
       </div>
       <h1>Total Amount: ₹{total}</h1>      
        </div>
        <button onClick={paymentPage}>Proceed Payment</button>
      </div>
    </div>
  );
}
export default Details;
