import { auth, createUserProfileDocument } from '../../utils/firebase.util';
import { signInWithGoogle } from '../../utils/firebase.util';

import * as actionTypes from './actionTypes';
import * as modalActionCreators from './modalAction';

export const signUp = (email, password, displayName) => {
    return async dispatch => {
        dispatch(signUpStart());
        try {
            const { user } = await auth.createUserWithEmailAndPassword(email, password);
            await createUserProfileDocument(user, { displayName: displayName });
            dispatch(signUpSuccess());
            dispatch(modalActionCreators.openModal('Yay! You are registered with us.'));
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

export const googleSignIn = history => {
    return async (dispatch, getState) => {
        dispatch(signInStart());
        try {
            const userAuthObj = await signInWithGoogle();
            const token = await userAuthObj.user.getIdToken();
            const userId = userAuthObj.user.uid;
            const expirationDate = new Date(new Date().getTime() + 3600 * 1000);
            localStorage.setItem('token', token);
            localStorage.setItem('userId', userId);
            localStorage.setItem('expirationDate', expirationDate);

            dispatch(signInSuccess(token, userId));
            history.push(getState().auth.redirectPathAfterLogin);
            dispatch(modalActionCreators.openModal('Awesome! You are successfully signed-in.'));
            dispatch(startAuthTimeout(3600));
        }
        catch (err) {
            dispatch(signInFail(err.message));
            dispatch(modalActionCreators.openModal(err.message));
        }
    };
};

export const signIn = (email, password, history) => {
    return async (dispatch, getState) => {
        dispatch(signInStart());

        try {
            const userAuthObj = await auth.signInWithEmailAndPassword(email, password);
            const token = await userAuthObj.user.getIdToken();
            const userId = userAuthObj.user.uid;
            const expirationDate = new Date(new Date().getTime() + 3600 * 1000);

            localStorage.setItem('token', token);
            localStorage.setItem('userId', userId);
            localStorage.setItem('expirationDate', expirationDate);

            dispatch(signInSuccess(token, userId));
            history.push(getState().auth.redirectPathAfterLogin);
            dispatch(modalActionCreators.openModal('Awesome! You are successfully signed-in.'));
            dispatch(startAuthTimeout(3600));
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
            dispatch(signOut());
            dispatch(modalActionCreators.openModal('OOPS! Your session has expired. Login again.'));
        }, expirationTime * 1000);
    };
};

export const signOut = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('userId');
    localStorage.removeItem('expirationDate');

    return {
        type: actionTypes.AUTH_SIGNOUT
    };
};

export const checkAuthStatus = () => {
    return dispatch => {
        const token = localStorage.getItem('token');

        if (!token) {
            dispatch(signOut());
        } else {
            const expirationDate = new Date(localStorage.getItem('expirationDate'));
            if (expirationDate <= new Date()) {
                dispatch(signOut());
                dispatch(modalActionCreators.openModal('OOPS! Your session has expired. Login again.'));
            } else {
                const userId = localStorage.getItem('userId');
                dispatch(signInSuccess(token, userId));
                dispatch(startAuthTimeout((expirationDate.getTime() - new Date().getTime()) / 1000));
            }
        }
    };
};

export const setRedirectPath = path => {
    return {
        type: actionTypes.SET_REDIRECT_PATH,
        path: path
    };
};