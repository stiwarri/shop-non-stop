import { createSelector } from 'reselect';

const cartSelector = state => state.cart;

export const showCartDropdownSelector = createSelector(
    [cartSelector],
    cart => cart.showCartDropdown
);

export const cartItemsSelector = createSelector(
    [cartSelector],
    cart => cart.cartItems
);

export const cartItemsCountSelector = createSelector(
    [cartItemsSelector],
    cartItems => cartItems.reduce((acc, el) => acc + el.quantity, 0)
);