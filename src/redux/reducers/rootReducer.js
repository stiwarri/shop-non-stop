import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import authReducer from './authReducer';
import modalReducer from './modalReducer';
import cartReducer from './cartReducer';

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['cart']
};

const rootReducer = combineReducers({
    auth: authReducer,
    modal: modalReducer,
    cart: cartReducer
});

export default persistReducer(persistConfig, rootReducer);