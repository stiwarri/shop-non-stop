import React from 'react';
import { connect } from 'react-redux';

import './SignInSignUpPage.scss';
import SignIn from '../../containers/SignIn/SignIn';
import SignUp from '../../containers/SignUp/SignUp';
import Spinner from '../../components/UI/Spinner/Spinner';

import { authLoadingSelector } from '../../redux/selectors/authSelector';

const SignInSignUpPage = ({ loading }) => {
    let pageTemplate = <Spinner />;

    if (!loading) {
        pageTemplate = (
            <React.Fragment>
                <SignIn />
                <SignUp />
            </React.Fragment>
        );
    }

    return (
        <div className="sign-in-sign-up-page">
            {pageTemplate}
        </div>
    );
}

const mapStateToProps = state => {
    return {
        loading: authLoadingSelector(state)
    };
};

export default connect(mapStateToProps, null)(SignInSignUpPage);