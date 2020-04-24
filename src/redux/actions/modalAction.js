import * as actionTypes from './actionTypes';

/**
 * MODAL ACTION CREATORS
 */
export const openModal = message => {
    return {
        type: actionTypes.OPEN_MODAL,
        message: message
    };
};

export const closeModal = () => {
    return {
        type: actionTypes.CLOSE_MODAL
    };
};
