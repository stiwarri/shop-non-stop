import { combineReducers } from 'redux';

import authReducer from './authReducer';
import modalReducer from './modalReducer';
import cartReducer from './cartReducer';

const rootReducer = combineReducers({
    auth: authReducer,
    modal: modalReducer,
    cart: cartReducer
});

export default rootReducer;