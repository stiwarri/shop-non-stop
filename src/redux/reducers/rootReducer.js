import { combineReducers } from 'redux';

import authReducer from './auth';
import modalReducer from './modal';
import cartReducer from './cart';

const rootReducer = combineReducers({
    auth: authReducer,
    modal: modalReducer,
    cart: cartReducer
});

export default rootReducer;