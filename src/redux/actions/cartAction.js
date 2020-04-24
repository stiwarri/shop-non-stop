import * as actionTypes from './actionTypes';

export const toggleCartDropdown = () => {
    return {
        type: actionTypes.TOGGLE_CART_DROPDOWN
    };
};

export const addItemToCart = item => {
    return {
        type: actionTypes.ADD_ITEM_TO_CART,
        item: item
    };
};