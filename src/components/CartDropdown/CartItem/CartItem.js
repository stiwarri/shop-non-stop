import React from 'react';

import './CartItem.scss';

const CartItem = ({ id, name, imageUrl, price, quantity }) => {
    return (
        <div className="cart-item">
            <img src={imageUrl} alt="item" />
            <div className="item-details">
                <span>{name}</span>
                <span>{quantity} * ${price}</span>
            </div>
        </div>
    )
};

export default CartItem;