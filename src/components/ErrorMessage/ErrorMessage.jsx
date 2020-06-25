import React from 'react';

import './ErrorMessage.scss';
import ErrorImage from '../../assets/images/error.png';

const ErrorMessage = props => {
    return (
        <div className="error-page">
            <img src={ErrorImage} alt="error" />
            <h2>Oops! Something went wrong.</h2>
        </div>
    );
};

export default ErrorMessage;