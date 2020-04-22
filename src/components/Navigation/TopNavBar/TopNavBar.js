import React from "react";
import { NavLink } from "react-router-dom";

import "./TopnavBar.scss";

const TopNavBar = ({ isAuthenticated, handleSignOut }) => {
  return (
    <div className="top-nav-bar">
      <NavLink to="/">
        <span className="logo">ShopNonStop</span>
      </NavLink>
      <div className="options">
        <NavLink className="option" to="/">Home</NavLink>
        <NavLink className="option" to="/shop">Shop</NavLink>
        {
          isAuthenticated ?
            <div className="option" onClick={handleSignOut}>Sign Out</div> :
            <NavLink className="option" to="/sign-in">Sign In</NavLink>
        }
      </div>
    </div>
  );
};

export default TopNavBar;
