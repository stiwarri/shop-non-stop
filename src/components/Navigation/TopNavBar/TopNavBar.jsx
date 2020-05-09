import React from "react";
import { connect } from 'react-redux';
import { NavLink } from "react-router-dom";

import "./TopnavBar.scss";
import CartDropdown from "../../CartDropdown/CartDropdown";
import AppLogo from '../../../assets/images/logo.png';

import * as authActionCreators from '../../../redux/actions/authAction';
import * as cartActionCreators from '../../../redux/actions/cartAction';
import { cartItemsCountSelector, showCartDropdownSelector } from '../../../redux/selectors/cartSelector';
import { authStatusSelector } from '../../../redux/selectors/authSelector';

const TopNavBar = ({ authStatus, showCartDropdown, cartItemsCount, signOut, toggleCartDropdown }) => {
    return (
        <div className="top-nav-bar">
            <NavLink to="/" className="app-title">
                <img src={AppLogo} alt="logo" className="logo" />
                <span className="text">ShopNonStop</span>
            </NavLink>
            <div className="options">
                <NavLink className="option" to="/" exact>Home</NavLink>
                <NavLink className="option" to="/shop">Shop</NavLink>
                {
                    authStatus ?
                        <div className="option" onClick={signOut}>Sign Out</div> :
                        <NavLink className="option" to="/sign-in">Sign In</NavLink>
                }
                <span className={`cart-toggle-button ${showCartDropdown ? 'active' : ''}`}
                    onClick={toggleCartDropdown}>Cart ({cartItemsCount})</span>
            </div>
            <CartDropdown />
        </div >
    );
};

const mapStateToProps = state => {
    return {
        authStatus: authStatusSelector(state),
        cartItemsCount: cartItemsCountSelector(state),
        showCartDropdown: showCartDropdownSelector(state)
    };
};

const mapDispatchToProps = dispatch => {
    return {
        signOut: () => dispatch(authActionCreators.signOut()),
        toggleCartDropdown: () => dispatch(cartActionCreators.toggleCartDropdown())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(TopNavBar);