import React from 'react';
import { connect } from 'react-redux';

import './SignUp.scss';
import SIGN_UP_FORM_CONFIG from '../../assets/config/sign-up-form';
import FormInput from '../../components/UI/FormInput/FormInput';
import Button from '../../components/UI/Button/Button.jsx';
import * as modalActionCreators from '../../redux/actions/modalAction';
import * as authActionCreators from '../../redux/actions/authAction';

class SignUp extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            signUpForm: SIGN_UP_FORM_CONFIG,
            isFormValid: false
        };
    }

    inputFocusHandler = (event, elementKey) => {
        this.setState({
            signUpForm: {
                ...this.state.signUpForm,
                [elementKey]: {
                    ...this.state.signUpForm[elementKey],
                    status: {
                        ...this.state.signUpForm[elementKey].status,
                        isValid: true,
                        isTouched: true
                    }
                }
            }
        });
    };

    inputBlurHandler = (event, elementKey) => {
        const [validity, errMsg] = this.checkElementValidity(this.state.signUpForm[elementKey].validations, event.target.value);

        this.setState({
            signUpForm: {
                ...this.state.signUpForm,
                [elementKey]: {
                    ...this.state.signUpForm[elementKey],
                    status: {
                        ...this.state.signUpForm[elementKey].status,
                        isValid: validity
                    },
                    errorMessage: errMsg
                }
            }
        });
    };

    inputChangeHandler = (event, elementKey) => {
        const inputValue = event.target.value.trimStart();
        const [validity, errMsg] = this.checkElementValidity(this.state.signUpForm[elementKey].validations, inputValue);

        this.setState({
            signUpForm: {
                ...this.state.signUpForm,
                [elementKey]: {
                    ...this.state.signUpForm[elementKey],
                    properties: {
                        ...this.state.signUpForm[elementKey].properties,
                        value: inputValue
                    },
                    status: {
                        ...this.state.signUpForm[elementKey].status,
                        isValid: validity
                    },
                    errorMessage: errMsg
                }
            }
        }, () => {
            const formValidity = this.checkFormValidity();
            this.setState({
                isFormValid: formValidity
            });
        });
    };

    checkElementValidity = (validations, inputValue) => {
        let isValid = true;
        let errMsg = '';

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

    checkFormValidity = () => {
        let isValid = true;

        for (let element in this.state.signUpForm) {
            if (!this.state.signUpForm[element].status.isValid) {
                isValid = false;
                return isValid;
            }
        }

        return isValid;
    };

    formSubmitHandler = async () => {
        let inputValues = {};
        for (let el in this.state.signUpForm) {
            inputValues[el] = this.state.signUpForm[el].properties.value;
        }

        if (inputValues.password !== inputValues.confirmPassword) {
            this.props.openModal("Passwords didn't match!");
        } else {
            this.props.signUp(inputValues.email, inputValues.password, inputValues.displayName);
            this.resetFormHandler();
        }
    };

    resetFormHandler = () => {
        this.setState({
            signUpForm: {
                ...this.state.signUpForm,
                displayName: {
                    ...this.state.signUpForm.displayName,
                    properties: {
                        ...this.state.signUpForm.displayName.properties,
                        value: ''
                    },
                    status: {
                        ...this.state.signUpForm.displayName.status,
                        isValid: false,
                        isTouched: false
                    }
                },
                email: {
                    ...this.state.signUpForm.email,
                    properties: {
                        ...this.state.signUpForm.email.properties,
                        value: ''
                    },
                    status: {
                        ...this.state.signUpForm.email.status,
                        isValid: false,
                        isTouched: false
                    }
                },
                password: {
                    ...this.state.signUpForm.password,
                    properties: {
                        ...this.state.signUpForm.password.properties,
                        value: ''
                    },
                    status: {
                        ...this.state.signUpForm.password.status,
                        isValid: false,
                        isTouched: false
                    }
                },
                confirmPassword: {
                    ...this.state.signUpForm.confirmPassword,
                    properties: {
                        ...this.state.signUpForm.confirmPassword.properties,
                        value: ''
                    },
                    status: {
                        ...this.state.signUpForm.confirmPassword.status,
                        isValid: false,
                        isTouched: false
                    }
                }
            },
            isFormValid: false
        });
    };

    render() {
        let formElements = [];
        for (let el in this.state.signUpForm) {
            formElements.push({
                key: el,
                ...this.state.signUpForm[el]
            });
        }

        return (
            <div className="sign-up">
                <h2>I do not have an account</h2>
                <h4>Sign up with your email and password.</h4>
                <form>
                    {
                        formElements.map(el => (
                            <FormInput
                                key={el.key}
                                label={el.label}
                                properties={el.properties}
                                status={el.status}
                                errorMessage={el.errorMessage}
                                handleFocus={event => this.inputFocusHandler(event, el.key)}
                                handleBlur={event => this.inputBlurHandler(event, el.key)}
                                handleChange={event => this.inputChangeHandler(event, el.key)}
                            />
                        ))
                    }
                    <div className="buttons">
                        <Button disable={!this.state.isFormValid} clickHandler={this.formSubmitHandler}>Sign Up</Button>
                        <Button clickHandler={this.resetFormHandler}>Reset</Button>
                    </div>
                </form>
            </div>
        );
    }
}

const mapDispatchToProps = dispatch => {
    return {
        openModal: message => dispatch(modalActionCreators.openModal(message)),
        signUp: (email, password, displayName) => dispatch(authActionCreators.signUp(email, password, displayName))
    };
};

export default connect(null, mapDispatchToProps)(SignUp);
