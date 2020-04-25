import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';

import './CartDropdown.scss';
import Button from '../UI/Button/Button';
import CartItem from './CartItem/CartItem';

import * as cartActionCreators from '../../redux/actions/cartAction';
import { cartItemsSelector, cartItemsCountSelector } from '../../redux/selectors/cartSelector';

const CartDropdown = ({ isVisible, cartItems, cartItemsCount, toggleCartDropdown, history }) => {
    return (
        <div className={`cart-dropdown ${isVisible ? '' : 'hidden'}`}>
            <div className="cart-items">
                {
                    cartItemsCount ?
                        cartItems.map(item => <CartItem key={item.id} {...item} />) :
                        (<div className="empty-message">Cart is empty!</div>)
                }
            </div>
            <Button
                disable={!cartItemsCount}
                clickHandler={() => {
                    history.push('/checkout');
                    toggleCartDropdown();
                }}
            >GO TO CHECKOUT</Button>
        </div>
    );
};

const mapStateToProps = state => {
    return {
        cartItems: cartItemsSelector(state),
        cartItemsCount: cartItemsCountSelector(state)
    };
};

const mapDispatchToProps = dispatch => {
    return {
        toggleCartDropdown: () => dispatch(cartActionCreators.toggleCartDropdown())
    };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CartDropdown));