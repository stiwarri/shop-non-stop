import * as actionTypes from '../actions/actionTypes';

const INITIAL_STATE = {
    collections: null,
    loadingCollections: false
};

const shopReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case actionTypes.GET_SHOP_COLLECTIONS_START:
            return {
                ...state, loadingCollections: true
            };

        case actionTypes.GET_SHOP_COLLECTIONS_SUCCESS:
            return {
                ...state, collections: action.collectionsData, loadingCollections: false
            };

        case actionTypes.GET_SHOP_COLLECTIONS_FAIL:
            return {
                ...state, loadingCollections: false
            };

        default:
            return state;
    }
};

export default shopReducer;