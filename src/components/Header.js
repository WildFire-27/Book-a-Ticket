import React from "react";
import { useDispatch } from "react-redux";
import { authActions } from "../store/auth-slice";
import Menu from "./Menu";
import { useNavigate } from "react-router-dom";

import "./Header.css";
const Header = () => {
  const navigate = useNavigate();
  const back = () => {
    // payment
    navigate("/");
  };

  const dispatch = useDispatch();
  const logoutHandler = () => {
    dispatch(authActions.logout());
  back();
  };
  

  return (
    <header>
      <nav className="header-nav">
        <ul className="header-ul">
          <li>
            <h2
              className="header-h2"
              style={{fontSize: "30px" }}
            >
              Book-a-Ticket🎫 
            </h2>
          </li>
        
          <li>
            <button onClick={logoutHandler} className="logout-btn">
              Logout
            </button>
          </li>
          <li>
            <Menu />
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
