import React from 'react';

import './ErrorMessage.scss';

const ErrorMessage = props => {
    return (
        <div className="error-page">
            <img src="https://i.imgur.com/lKJiT77.png" alt="error" />
            <h2>Oops! Something went wrong.</h2>
        </div>
    );
};

export default ErrorMessage;