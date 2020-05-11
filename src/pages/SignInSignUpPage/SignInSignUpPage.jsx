import React from 'react';
import { connect } from 'react-redux';

import './SignInSignUpPage.scss';
import SignIn from '../../containers/SignIn/SignIn';
import SignUp from '../../containers/SignUp/SignUp';
import WithSpinner from '../../hoc/WithSpinner/WithSpinner';

import { authLoadingSelector } from '../../redux/selectors/authSelector';

const SignInSignUpPage = ({ isLoading }) => {
    return (
        <div className="sign-in-sign-up-page">
            <React.Fragment>
                <SignIn />
                <SignUp />
            </React.Fragment>
        </div>
    );
}

const mapStateToProps = state => {
    return {
        isLoading: authLoadingSelector(state)
    };
};

export default connect(mapStateToProps, null)(WithSpinner(SignInSignUpPage));