import * as actionTypes from '../actions/actionTypes';

const initialState = {
    showModal: false,
    modalMessage: ''
};

const modalReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.OPEN_MODAL:
            return {
                ...state,
                showModal: true,
                modalMessage: action.message
            };

        case actionTypes.CLOSE_MODAL:
            return {
                ...state,
                showModal: false,
                modalMessage: ''
            };

        default:
            return state;
    }
}

export default modalReducer;