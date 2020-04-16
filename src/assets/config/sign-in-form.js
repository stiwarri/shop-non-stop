const SIGN_IN_FORM_CONFIG = {
    email: {
        label: 'Email',
        properties: {
            type: 'text',
            id: 'email',
            name: 'email',
            value: ''
        },
        validations: {
            required: true,
            regex: /^\w+([-]?\w+)*@\w+([-]?\w+)*(\.\w{2,3})+$/
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
            id: 'password',
            name: 'password',
            value: ''
        },
        validations: {
            required: true
        },
        status: {
            isValid: false,
            isTouched: false
        },
        errorMessage: 'Enter a valid password!'
    }
};

export default SIGN_IN_FORM_CONFIG;
