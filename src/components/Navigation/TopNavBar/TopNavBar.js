import React from "react";
import { NavLink } from "react-router-dom";

import "./TopnavBar.scss";

const TopNavBar = () => {
  return (
    <div className="top-nav-bar">
      <NavLink to="/">
        <span className="logo">ShopNonStop</span>
      </NavLink>
      <div className="options">
        <NavLink className="option" to="/">Home</NavLink>
        <NavLink className="option" to="/shop">Shop</NavLink>
        <NavLink className="option" to="/about-us">Sign In</NavLink>
      </div>
    </div>
  );
};

export default TopNavBar;
