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
                ...state,
                loading: true
            };

        case actionTypes.SIGN_UP_SUCCESS:
            return {
                ...state,
                loading: false
            };

        case actionTypes.SIGN_UP_FAIL:
            return {
                ...state,
                loading: false,
                error: action.error
            };

        default:
            return state;
    }
};

export default authReducer;