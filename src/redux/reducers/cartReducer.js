import * as actionTypes from '../actions/actionTypes';

const INITIAL_STATE = {
    showCartDropdown: false,
    cartItems: []
};

const toggleCartDropdown = state => {
    return {
        ...state,
        showCartDropdown: !state.showCartDropdown
    };
};

const addItemToCart = (state, item) => {
    const existingItem = state.cartItems.find(el => el.id === item.id);
    let newCartItems = [];

    if (existingItem) {
        newCartItems = state.cartItems.map(el =>
            el.id === existingItem.id ? { ...el, quantity: el.quantity + 1 } : el
        );
    } else {
        newCartItems = [...state.cartItems, { ...item, quantity: 1 }];
    }

    return {
        ...state,
        cartItems: newCartItems
    };
};

const deleteItemFromCart = (state, item) => {
    const existingItem = state.cartItems.find(el => el.id === item.id);
    let newCartItems = [];

    if (!existingItem) return state;

    newCartItems = state.cartItems.map(el => {
        if (el.id === item.id) {
            return {
                ...el,
                quantity: el.quantity ? el.quantity - 1 : 0
            };
        } else return el;
    });

    return {
        ...state,
        cartItems: newCartItems
    };
};

const removeItemFromCart = (state, item) => {
    const itemIndex = state.cartItems.findIndex(el => el.id === item.id);

    if (itemIndex === -1) return state;

    return {
        ...state,
        cartItems: [...state.cartItems.slice(0, itemIndex), ...state.cartItems.slice(itemIndex + 1)]
    }
};

const cartReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case actionTypes.TOGGLE_CART_DROPDOWN: return toggleCartDropdown(state);
        case actionTypes.ADD_ITEM_TO_CART: return addItemToCart(state, action.item);
        case actionTypes.DELETE_ITEM_FROM_CART: return deleteItemFromCart(state, action.item);
        case actionTypes.REMOVE_ITEM_FROM_CART: return removeItemFromCart(state, action.item);
        default: return state;
    }
};

export default cartReducer;