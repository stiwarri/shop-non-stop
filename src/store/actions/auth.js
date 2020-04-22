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

/**
 * SIGN IN ACTION CREATORS
 */
export const signIn = (email, password) => {
    return async dispatch => {
        dispatch(signInStart());

        try {
            const userAuthObj = await auth.signInWithEmailAndPassword(email, password);
            const token = await userAuthObj.user.getIdToken();
            const userId = userAuthObj.user.uid;
            const expirationDate = new Date(new Date().getTime() + 30 * 1000);
            localStorage.setItem('token', token);
            localStorage.setItem('expirationDate', expirationDate);
            localStorage.setItem('userId', userId);
            dispatch(signInSuccess(token, userId));
            dispatch(startAuthTimeout(30));
        }
        catch (err) {
            dispatch(signInFail(err.message));
            dispatch(modalActionCreators.openModal(err.message));
        }
    }
}

const signInStart = () => {
    return {
        type: actionTypes.SIGN_IN_START
    };
};

const signInSuccess = (token, userId) => {
    return {
        type: actionTypes.SIGN_IN_SUCCESS,
        token: token,
        userId: userId
    };
};

const signInFail = error => {
    return {
        type: actionTypes.SIGN_IN_FAIL,
        error: error
    };
};

export const startAuthTimeout = expirationTime => {
    return dispatch => {
        setTimeout(() => {
            dispatch(logout());
        }, expirationTime * 1000);
    };
};

export const logout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('expirationDate');
    localStorage.removeItem('userId');

    return {
        type: actionTypes.AUTH_LOGOUT
    };
};