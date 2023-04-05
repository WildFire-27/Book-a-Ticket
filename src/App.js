import React from "react";
import { useSelector } from "react-redux";
import "./App.css";
import Auth from "./components/Auth";
import Layout from "./components/Layout";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Details from "./components/Details";
import Payment from "./components/Payment";

function App() {
  //to grab the state from the store we use useSelector hook
  //it will contain state as a callback parameter and we grab state name i.e auth from./store is islogin
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  console.log(isLoggedIn);

  const menuItems = useSelector((state) => state.menu.itemList);
  console.log(menuItems);

  return (
    <div className="App">
      {!isLoggedIn && <Auth />}
      <Routes>
        <Route exact path="/" element={isLoggedIn && <Layout />} />
        <Route exact path="/details" element={isLoggedIn && <Details />} />
        <Route exact path="/payment" element={isLoggedIn && <Payment />} />
      </Routes>
    </div>
  );
}

export default App;
