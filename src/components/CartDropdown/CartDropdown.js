import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';

import './CartDropdown.scss';
import Button from '../UI/Button/Button';
import CartItem from './CartItem/CartItem';

import * as cartActionCreators from '../../redux/actions/cartAction';
import * as authActionCreators from '../../redux/actions/authAction';
import { showCartDropdownSelector, cartItemsSelector, cartItemsCountSelector } from '../../redux/selectors/cartSelector';
import { authStatusSelector } from '../../redux/selectors/authSelector';

const CartDropdown = ({ isAuthenticated, showCartDropdown, cartItems, cartItemsCount, setRedirectPath, toggleCartDropdown, history }) => {
    return (
        <div className={`cart-dropdown ${showCartDropdown ? '' : 'hidden'}`}>
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
                    if (isAuthenticated) {
                        history.push('/checkout');
                        toggleCartDropdown();
                    } else {
                        setRedirectPath('/checkout');
                        history.push('/sign-in');
                        toggleCartDropdown();
                    }
                }}
            >GO TO CHECKOUT</Button>
        </div>
    );
};

const mapStateToProps = state => {
    return {
        isAuthenticated: authStatusSelector(state),
        showCartDropdown: showCartDropdownSelector(state),
        cartItems: cartItemsSelector(state),
        cartItemsCount: cartItemsCountSelector(state)
    };
};

const mapDispatchToProps = dispatch => {
    return {
        setRedirectPath: path => dispatch(authActionCreators.setRedirectPath(path)),
        toggleCartDropdown: () => dispatch(cartActionCreators.toggleCartDropdown())
    };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CartDropdown));