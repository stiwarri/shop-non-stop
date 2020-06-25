import React from 'react';
import ErrorMessage from '../../components/ErrorMessage/ErrorMessage';

class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            hasError: false
        }
    }

    static getDerivedStateFromError(error) {
        return {
            hasError: true
        };
    }

    componentDidCatch(error, info) {
        // console.log(error, info);
    }

    render() {
        return this.state.hasError ?
            (<ErrorMessage></ErrorMessage>) :
            this.props.children;
    }
}

export default ErrorBoundary;