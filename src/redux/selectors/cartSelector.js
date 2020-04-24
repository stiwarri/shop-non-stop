import { createSelector } from 'reselect';

const cartSelector = state => state.cart;

export const cartItemsSelector = createSelector(
    [cartSelector],
    cartState => cartState.cartItems
);

export const cartItemsCountSelector = createSelector(
    [cartItemsSelector],
    cartItems => cartItems.reduce((acc, el) => acc + el.quantity, 0)
);