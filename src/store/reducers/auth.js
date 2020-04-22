import * as actionTypes from '../actions/actionTypes';

const initialState = {
    token: null,
    userId: null,
    loading: false,
    error: null
};

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.SIGN_UP_START:
            return {
                ...state, loading: true, error: null
            };

        case actionTypes.SIGN_UP_SUCCESS:
            return {
                ...state, loading: false
            };

        case actionTypes.SIGN_UP_FAIL:
            return {
                ...state, loading: false, error: action.error
            };

        case actionTypes.SIGN_IN_START:
            return {
                ...state, loading: true, error: null
            };

        case actionTypes.SIGN_IN_SUCCESS:
            return {
                ...state, loading: false, token: action.token, userId: action.userId, error: null
            };

        case actionTypes.SIGN_IN_FAIL:
            return {
                ...state, loading: false, error: action.error, token: null, userId: null
            };

        case actionTypes.AUTH_LOGOUT:
            return {
                ...state, loading: false, error: null, token: null, userId: null
            };

        default:
            return state;
    }
};

export default authReducer;