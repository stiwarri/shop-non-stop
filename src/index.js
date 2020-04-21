import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware, combineReducers, compose } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import './index.css';
import App from './App';
import authReducer from './store/reducers/auth';
import modalReducer from './store/reducers/modal';

const rootReducer = combineReducers({
    auth: authReducer,
    modal: modalReducer
});
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter basename='/'>
            <App />
        </BrowserRouter>
    </Provider>,
    document.getElementById('root')
);
