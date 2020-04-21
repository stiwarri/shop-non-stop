import { auth, createUserProfileDocument } from '../../utils/firebase.util';
import * as actionTypes from './actionTypes';
import * as modalActionCreators from './modal';

/**
 * SIGN UP ACTION CREATORS
 */
export const signUp = (email, password, displayName) => {
    return async dispatch => {
        dispatch(signUpStart());
        try {
            const { user } = await auth.createUserWithEmailAndPassword(email, password);
            await createUserProfileDocument(user, { displayName: displayName });
            dispatch(signUpSuccess());
        } catch (err) {
            dispatch(signUpFail(err.message));
            dispatch(modalActionCreators.openModal(err.message));
        }
    }
}

const signUpStart = () => {
    return {
        type: actionTypes.SIGN_UP_START
    };
};

const signUpSuccess = () => {
    return {
        type: actionTypes.SIGN_UP_SUCCESS
    };
};

const signUpFail = error => {
    return {
        type: actionTypes.SIGN_UP_FAIL,
        error: error
    };
};