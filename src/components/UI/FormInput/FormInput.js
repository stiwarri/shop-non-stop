import React from 'react';

import './FormInput.scss';

const FormInput = ({ label, handleChange, ...otherProps }) => {
    return (
        <div className="form-group">
            <input className="form-input" {...otherProps} onChange={handleChange} />
            <label className={`${otherProps.value ? 'shrink' : ''} form-input-label`}>
                {label}
            </label>
        </div>
    );
}

export default FormInput;
