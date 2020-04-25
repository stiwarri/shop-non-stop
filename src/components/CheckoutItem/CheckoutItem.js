import React from 'react';

import './CheckoutItem.scss';

import * as cartActionCreators from '../../redux/actions/cartAction';
import { connect } from 'react-redux';

const CheckoutItem = ({ item, addItemToCart, removeItemFromCart, deleteItemFromCart }) => {
    return (
        <div className="checkout-item">
            <div className="item-row-block">
                <img src={item.imageUrl} alt="item" />
            </div>
            <div className="item-row-block">{item.name}</div>
            <div className="item-row-block">
                <span
                    className="dec"
                    onClick={() => deleteItemFromCart(item)}
                >-</span>
                {item.quantity}
                <span
                    className="inc"
                    onClick={() => addItemToCart(item)}
                >+</span>
            </div>
            <div className="item-row-block">{item.price}</div>
            <div
                className="item-row-block remove-button"
                onClick={() => removeItemFromCart(item)}
            >&#10008;</div>
        </div>
    );
};

const mapDispatchToProps = dispatch => {
    return {
        addItemToCart: item => dispatch(cartActionCreators.addItemToCart(item)),
        deleteItemFromCart: item => dispatch(cartActionCreators.deleteItemFromCart(item)),
        removeItemFromCart: item => dispatch(cartActionCreators.removeItemFromCart(item))
    };
};

export default connect(null, mapDispatchToProps)(CheckoutItem);