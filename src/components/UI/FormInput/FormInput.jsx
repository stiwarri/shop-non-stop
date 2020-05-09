import React from 'react';

import './FormInput.scss';

const FormInput = ({ label, properties, status, errorMessage, handleFocus, handleBlur, handleChange }) => {
    const showError = !status.isValid && status.isTouched;

    return (
        <div className="form-group">
            <input className={`${showError ? 'error' : ''} form-input`}
                {...properties}
                onFocus={handleFocus}
                onBlur={handleBlur}
                onChange={handleChange} />
            <label className={`${properties.value ? 'shrink' : ''} ${showError ? 'error' : ''} form-input-label`}>
                {label}
            </label>
            {
                showError ?
                    <span className="error-message">{errorMessage}</span> :
                    null
            }
        </div>
    );
}

export default FormInput;
