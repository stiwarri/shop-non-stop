import React from "react";
import { NavLink } from "react-router-dom";

import "./TopnavBar.scss";

const TopNavBar = () => {
  return (
    <ul>
      <li>
        <span className="logo">ShopNonStop</span>
      </li>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/shop">Shop</NavLink>
      </li>
      <li>
        <NavLink to="/about-us">About Us</NavLink>
      </li>
    </ul>
  );
};

export default TopNavBar;
