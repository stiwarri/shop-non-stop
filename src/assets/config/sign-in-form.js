const SIGN_IN_FORM_CONFIG = {
    email: {
        label: 'Email',
        properties: {
            type: 'text',
            id: 'sign-in-email',
            name: 'sign-in-email',
            value: ''
        },
        validations: {
            required: true,
            regex: /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/
        },
        status: {
            isValid: false,
            isTouched: false
        },
        errorMessage: 'Enter a valid email!'
    },
    password: {
        label: 'Password',
        properties: {
            type: 'password',
            id: 'sign-in-password',
            name: 'sign-in-password',
            value: ''
        },
        validations: {
            required: true,
            minLength: 6,
            maxLength: 20
        },
        status: {
            isValid: false,
            isTouched: false
        },
        errorMessage: 'Enter a valid password!'
    }
};

export default SIGN_IN_FORM_CONFIG;
