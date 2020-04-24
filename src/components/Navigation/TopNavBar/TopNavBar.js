import React from "react";
import { connect } from 'react-redux';
import { NavLink } from "react-router-dom";

import "./TopnavBar.scss";
import CartDropdown from "../../CartDropdown/CartDropdown";
import * as authActionCreators from '../../../redux/actions/auth';
import * as cartActionCreators from '../../../redux/actions/cart';

const TopNavBar = ({ authStatus, showCartDropdown, cartItemsCount, signOut, toggleCartDropdown }) => {
    return (
        <div className="top-nav-bar">
            <NavLink to="/">
                <span className="logo">ShopNonStop</span>
            </NavLink>
            <div className="options">
                <NavLink className="option" to="/">Home</NavLink>
                <NavLink className="option" to="/shop">Shop</NavLink>
                {
                    authStatus ?
                        <div className="option" onClick={signOut}>Sign Out</div> :
                        <NavLink className="option" to="/sign-in">Sign In</NavLink>
                }
                {/* replace this with cart icon component */}
                <span onClick={toggleCartDropdown}>Cart ({cartItemsCount})</span>
            </div>
            <CartDropdown isVisible={showCartDropdown} />
        </div>
    );
};


const mapStateToProps = state => {
    return {
        authStatus: state.auth.token !== null,
        showCartDropdown: state.cart.showCartDropdown,
        cartItemsCount: state.cart.cartItems.reduce((acc, item) => acc + item.quantity, 0)
    };
};

const mapDispatchToProps = dispatch => {
    return {
        signOut: () => dispatch(authActionCreators.signOut()),
        toggleCartDropdown: () => dispatch(cartActionCreators.toggleCartDropdown())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(TopNavBar);