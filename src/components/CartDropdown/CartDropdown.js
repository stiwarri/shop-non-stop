import React from 'react';
import { connect } from 'react-redux';

import './CartDropdown.scss';
import Button from '../UI/Button/Button';
import CartItem from './CartItem/CartItem';

import { cartItemsSelector, cartItemsCountSelector } from '../../redux/selectors/cartSelector';

const CartDropdown = ({ isVisible, cartItems, cartItemsCount }) => {
    return (
        <div className={`cart-dropdown ${isVisible ? '' : 'hidden'}`}>
            <div className="cart-items">
                {
                    cartItemsCount ?
                        cartItems.map(item => <CartItem key={item.id} {...item} />) :
                        (<div className="empty-message">Cart is empty!</div>)
                }
            </div>
            <Button disable={!cartItemsCount}>GO TO CHECKOUT</Button>
        </div>
    );
};

const mapStateToProps = state => {
    return {
        cartItems: cartItemsSelector(state),
        cartItemsCount: cartItemsCountSelector(state)
    };
};

export default connect(mapStateToProps)(CartDropdown);