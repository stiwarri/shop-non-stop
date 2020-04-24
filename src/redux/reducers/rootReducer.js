import { combineReducers } from 'redux';

import authReducer from './auth';
import modalReducer from './modal';

const rootReducer = combineReducers({
    auth: authReducer,
    modal: modalReducer
});

export default rootReducer;