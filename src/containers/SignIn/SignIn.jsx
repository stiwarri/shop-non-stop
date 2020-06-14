import React, { useReducer } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';

import './SignIn.scss';
import SIGN_IN_FORM_CONFIG from '../../assets/config/sign-in-form';
import FormInput from '../../components/UI/FormInput/FormInput';
import Button from '../../components/UI/Button/Button.jsx';
import { updateObject } from '../../utils/appHelper';

import * as authActionCreators from '../../redux/actions/authAction';

const initialState = {
    signInForm: SIGN_IN_FORM_CONFIG,
    isFormValid: false
};

const reducer = (state, action) => {
    switch (action.type) {
        case 'updateValidity':
            return updateObject(state, {
                signInForm: updateObject(state.signInForm, {
                    [action.elementKey]: updateObject(state.signInForm[action.elementKey], {
                        status: updateObject(state.signInForm[action.elementKey].status, {
                            isValid: action.validity
                        })
                    })
                })
            });

        case 'updateTouchedStatus':
            return updateObject(state, {
                signInForm: updateObject(state.signInForm, {
                    [action.elementKey]: updateObject(state.signInForm[action.elementKey], {
                        status: updateObject(state.signInForm[action.elementKey].status, {
                            isTouched: action.touched
                        })
                    })
                })
            });

        case 'updateErrorMessage':
            return updateObject(state, {
                signInForm: updateObject(state.signInForm, {
                    [action.elementKey]: updateObject(state.signInForm[action.elementKey], {
                        errorMessage: action.errMsg
                    })
                })
            });

        case 'updateValue':
            return updateObject(state, {
                signInForm: updateObject(state.signInForm, {
                    [action.elementKey]: updateObject(state.signInForm[action.elementKey], {
                        properties: updateObject(state.signInForm[action.elementKey].properties, {
                            value: action.value
                        })
                    })
                })
            });

        case 'updateFormValidity':
            return updateObject(state, {
                isFormValid: action.formValidity
            });

        default:
            return state;
    }
};

const SignIn = ({ history, googleSignIn, signIn }) => {
    const [state, dispatch] = useReducer(reducer, initialState);
    let formElements = [];
    for (let el in state.signInForm) {
        formElements.push({
            key: el,
            ...state.signInForm[el]
        });
    }

    const inputFocusHandler = (event, elementKey) => {
        dispatch({ type: 'updateValidity', elementKey: elementKey, validity: true });
        dispatch({ type: 'updateTouchedStatus', elementKey: elementKey, touched: true });
    };

    const inputBlurHandler = (event, elementKey) => {
        const [validity, errMsg] = checkElementValidity(state.signInForm[elementKey].validations, event.target.value);
        dispatch({ type: 'updateValidity', elementKey: elementKey, validity: validity });
        dispatch({ type: 'updateErrorMessage', elementKey: elementKey, errMsg: errMsg });
    };

    const inputChangeHandler = (event, elementKey) => {
        const inputValue = event.target.value.trimStart();
        const [validity, errMsg] = checkElementValidity(state.signInForm[elementKey].validations, inputValue);
        dispatch({ type: 'updateValidity', elementKey: elementKey, validity: validity });
        dispatch({ type: 'updateErrorMessage', elementKey: elementKey, errMsg: errMsg });
        dispatch({ type: 'updateValue', elementKey: elementKey, value: inputValue });
        const formValidity = checkFormValidity();
        dispatch({ type: 'updateFormValidity', elementKey: elementKey, formValidity: formValidity });
    };

    const checkElementValidity = (validations, inputValue) => {
        let isValid = true,
            errMsg = '';

        for (let rule in validations) {
            switch (rule) {
                case 'required':
                    isValid = inputValue ? true : false;
                    if (!isValid) errMsg = 'Required';
                    break;

                case 'minLength':
                    isValid = inputValue.length >= validations[rule];
                    if (!isValid) errMsg = `Minimum length ${validations[rule]} is required`;
                    break;

                case 'maxLength':
                    isValid = inputValue.length <= validations['maxLength'];
                    if (!isValid) errMsg = `Maximum character limit: ${validations['maxLength']}`;
                    break;

                case 'regex':
                    isValid = validations[rule].test(inputValue);
                    if (!isValid) errMsg = `Invalid`;
                    break;

                default:
                    isValid = 'true';
                    errMsg = '';
            }

            if (!isValid) return [isValid, errMsg];
        }

        return [isValid, errMsg];
    };

    const checkFormValidity = () => {
        let isValid = true;

        for (let element in state.signInForm) {
            if (!state.signInForm[element].status.isValid) {
                isValid = false;
                return isValid;
            }
        }

        return isValid;
    };

    const formSubmitHandler = async event => {
        let inputValues = {};
        for (let el in state.signInForm) {
            inputValues[el] = state.signInForm[el].properties.value;
        }
        signIn(inputValues.email, inputValues.password, history);
        resetFormHandler();
    };

    const resetFormHandler = () => {
        for (let element in state.signInForm) {
            dispatch({ type: 'updateValue', elementKey: element, value: '' })
            dispatch({ type: 'updateValidity', elementKey: element, validity: false });
            dispatch({ type: 'updateTouchedStatus', elementKey: element, touched: false });
        }
        dispatch({ type: 'updateFormValidity', formValidity: false });
    };

    return (
        <div className="sign-in">
            <h2>I already have an account</h2>
            <h4>Sign in with your email and password.</h4>
            <form>
                {
                    formElements.map(el => (
                        <FormInput
                            key={el.key}
                            label={el.label}
                            properties={el.properties}
                            status={el.status}
                            errorMessage={el.errorMessage}
                            handleFocus={event => inputFocusHandler(event, el.key)}
                            handleBlur={event => inputBlurHandler(event, el.key)}
                            handleChange={event => inputChangeHandler(event, el.key)}
                        />
                    ))
                }
                <div className="buttons">
                    <Button disable={!state.isFormValid} clickHandler={formSubmitHandler}>Sign In</Button>
                    {<Button clickHandler={resetFormHandler}>Reset</Button>}
                    <Button clickHandler={() => googleSignIn(history)} isThirdPartySignInButton>Sign In With Google</Button>
                </div>
            </form>
        </div>
    );

}

const mapDispatchToProps = dispatch => {
    return {
        signIn: (email, password, history) => dispatch(authActionCreators.signIn(email, password, history)),
        googleSignIn: history => dispatch(authActionCreators.googleSignIn(history))
    };
};

export default withRouter(connect(null, mapDispatchToProps)(SignIn));