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

const deleteItem = item => {
    return {
        type: actionTypes.DELETE_ITEM_FROM_CART,
        item: item
    };
};

export const deleteItemFromCart = item => {
    return dispatch => {
        (item.quantity === 1) ? dispatch(removeItemFromCart(item)) : dispatch(deleteItem(item));
    };
};

export const removeItemFromCart = item => {
    return {
        type: actionTypes.REMOVE_ITEM_FROM_CART,
        item: item
    };
};