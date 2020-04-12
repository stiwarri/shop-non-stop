import React from 'react';

import './SignIn.scss';
import FormInput from '../../components/UI/FormInput/FormInput';

class SignIn extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: ''
        };
    }

    inputChangeHandler = event => {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    formSubmitHandler = event => {
        event.preventDefault();
        this.setState({
            email: '',
            password: ''
        });
    }

    render() {
        return (
            <div className="sign-in">
                <h2>I already have an account</h2>
                <h4>Sign in with your email and password.</h4>
                <form onSubmit={this.formSubmitHandler}>
                    <FormInput
                        label="Email"
                        type="email"
                        name="email"
                        id="email"
                        value={this.state.email}
                        handleChange={this.inputChangeHandler}
                        required
                    />
                    <FormInput
                        label="Password"
                        type="password"
                        name="password"
                        id="password"
                        value={this.state.password}
                        handleChange={this.inputChangeHandler}
                        required
                    />
                    <button type="submit">Submit</button>
                </form>
            </div>
        );
    }
}

export default SignIn;
