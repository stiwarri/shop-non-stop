import React from 'react';
import { connect } from 'react-redux';

import './Checkout.scss';
import CheckoutItem from '../../components/CheckoutItem/CheckoutItem';

import { cartItemsSelector, cartItemsCountSelector, cartTotalPriceSelector } from '../../redux/selectors/cartSelector';
import StripeCheckoutButton from '../../components/StripeCheckoutButton/StripeCheckoutButton';

class Checkout extends React.Component {
    render() {
        return (
            <React.Fragment>
                <div className="checkout-table">
                    <div className="table-header">
                        <div className="header-text">Product</div>
                        <div className="header-text">Description</div>
                        <div className="header-text">Quantity</div>
                        <div className="header-text">Price</div>
                        <div className="header-text">Remove</div>
                    </div>
                    {
                        this.props.cartItemsCount ?
                            this.props.cartItems.map(el => <CheckoutItem key={el.id} item={el} />) :
                            <div className="empty-message">Cart is empty!</div>
                    }
                    <div className='payment-warning'>
                        <strong>*Please use the following test credit card for payments*</strong>
                        <br />
                        4242 4242 4242 4242; Exp: 01/20; CVV: 123
                    </div>
                    <div className="total-price-tag">Total Price: <strong>${this.props.cartTotalPrice}</strong></div>
                    {
                        this.props.cartItemsCount ?
                            <StripeCheckoutButton price={this.props.cartTotalPrice} /> :
                            null
                    }
                </div>
            </React.Fragment>
        );
    }
}

const mapStateToProps = state => {
    return {
        cartItems: cartItemsSelector(state),
        cartItemsCount: cartItemsCountSelector(state),
        cartTotalPrice: cartTotalPriceSelector(state)
    };
};

export default connect(mapStateToProps)(Checkout);