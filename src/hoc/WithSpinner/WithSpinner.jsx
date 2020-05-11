import React from 'react';

import Spinner from '../../components/UI/Spinner/Spinner';

const WithSpinner = WrappedComponent => {
    return ({ isLoading, ...otherProps }) => {
        return (
            isLoading ?
                <Spinner /> :
                <WrappedComponent {...otherProps} />
        );
    };
};

export default WithSpinner;