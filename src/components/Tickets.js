import React from "react";
import Ticket from "./Ticket";

const DUMMY_TICKETS = [
  {
    id: 1,
    name: "Bangalore",
    imgURL:
      "https://www.svgrepo.com/download/94279/capitol.svg",
    price: 2500,
  },
  {
    id: 2,
    name: "Mumbai",
    imgURL:
      "https://www.svgrepo.com/download/237903/gate-of-india-mumbai.svg",
    price: 3000,
  },
  {
    id: 3,
    name: "Hyderabad",
    imgURL:
      "https://cdn-icons-png.flaticon.com/512/2160/2160071.png",
    price: 2000,
  },
  {
    id: 4,
    name: "Delhi",
    imgURL:
      "https://cdn-icons-png.flaticon.com/512/1455/1455833.png",
    price: 3500,
  },
  {
    id: 5,
    name: "Pune",
    imgURL:
      "https://cdn-icons-png.flaticon.com/512/1675/1675952.png",
    price: 4000,
  },
];
const Tickets = () => {
  return (
    <div>
      <ul className="products-container">
        {DUMMY_TICKETS.map((ticket, index) => (
          <li key={index}>
          
            <Ticket
              id={ticket.id}
              name={ticket.name}
              imgURL={ticket.imgURL}
              price={ticket.price}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Tickets;
