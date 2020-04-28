import SHOP_COLLECTIONS_DATA from '../../assets/mock-data/shop-collections-data';

const INITIAL_STATE = {
    collections: SHOP_COLLECTIONS_DATA
};

const shopReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        default:
            return state;
    }
};

export default shopReducer;