import React from 'react';

import './SignInSignUpPage.scss';
import SignIn from '../../containers/SignIn/SignIn';
import SignUp from '../../containers/SignUp/SignUp';

const SignInSignUpPage = () => {
    return (
        <div className="sign-in-sign-up-page">
            <SignIn />
            <SignUp />
        </div>
    );
}

export default SignInSignUpPage;
