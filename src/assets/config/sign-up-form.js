const SIGN_UP_FORM_CONFIG = {
    displayName: {
        label: 'Display Name',
        properties: {
            type: 'text',
            id: 'displayName',
            name: 'displayName',
            value: ''
        },
        validations: {
            required: true,
            maxLength: 20
        },
        status: {
            isValid: false,
            isTouched: false
        },
        errorMessage: 'Enter valid display name!'
    },
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
            id: 'password',
            name: 'password',
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
        errorMessage: ''
    },
    confirmPassword: {
        label: 'Confirm Password',
        properties: {
            type: 'password',
            id: 'confirmPassword',
            name: 'confirmPassword',
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
        errorMessage: ''
    }
};

export default SIGN_UP_FORM_CONFIG;
