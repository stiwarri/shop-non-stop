import React from 'react';
import { connect } from 'react-redux';

import './CartDropdown.scss';
import Button from '../UI/Button/Button';
import CartItem from './CartItem/CartItem';

const CartDropdown = ({ isVisible, cartItems }) => {
    return (
        <div className={`cart-dropdown ${isVisible ? '' : 'hidden'}`}>
            <div className="cart-items">
                {
                    cartItems.map(item => <CartItem key={item.id} {...item} />)
                }
                <div className="cart-item"></div>
            </div>
            <Button>GO TO CHECKOUT</Button>
        </div>
    );
};

const mapStateToProps = state => {
    return {
        cartItems: state.cart.cartItems
    };
};

export default connect(mapStateToProps)(CartDropdown);