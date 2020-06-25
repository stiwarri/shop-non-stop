import React, { lazy, Suspense } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import './App.scss';
import ErrorBoundary from './hoc/ErrorBoundary/ErrorBoundary';
import Layout from './hoc/Layout/Layout.jsx';
import Modal from './components/UI/Modal/Modal.jsx';
import Spinner from './components/UI/Spinner/Spinner';
import TopNavBar from './components/Navigation/TopNavBar/TopNavBar.jsx';

import * as modalActionCreators from './redux/actions/modalAction';
import * as authActionCreators from './redux/actions/authAction';
import { showModalSelector, modalMessageSelector } from './redux/selectors/modalSelector';
import { authStatusSelector } from './redux/selectors/authSelector';

const HomePage = lazy(() => import('./pages/HomePage/HomePage.jsx'));
const ShopPage = lazy(() => import('./pages/ShopPage/ShopPage.jsx'));
const SignInSignUpPage = lazy(() => import('./pages/SignInSignUpPage/SignInSignUpPage.jsx'));
const CheckoutPage = lazy(() => import('./pages/CheckoutPage/CheckoutPage.jsx'));

class App extends React.Component {
    render() {
        let routes = (
            <Switch>
                <ErrorBoundary>
                    <Suspense fallback={<Spinner />}>
                        <Route path='/' exact component={HomePage} />
                        <Route path='/shop' component={ShopPage} />
                        <Route path='/sign-in' component={SignInSignUpPage} />
                        <Redirect to='/' />
                    </Suspense>
                </ErrorBoundary>
            </Switch>
        );

        if (this.props.authStatus) {
            routes = (
                <Switch>
                    <ErrorBoundary>
                        <Suspense fallback={<Spinner />}>
                            <Route path='/' exact component={HomePage} />
                            <Route path='/shop' component={ShopPage} />
                            <Route path='/checkout' component={CheckoutPage} />
                            <Redirect to='/' />
                        </Suspense>
                    </ErrorBoundary>
                </Switch>
            );
        }

        return (
            <React.Fragment>
                <TopNavBar />
                <Modal show={this.props.showModal} closeModal={this.props.closeModal}>{this.props.modalMessage}</Modal>
                <Layout>
                    {routes}
                </Layout>
            </React.Fragment>
        );
    }

    componentDidMount() {
        this.props.tryAutoLogin();
    }
}

const mapStateToProps = state => {
    return {
        authStatus: authStatusSelector(state),
        showModal: showModalSelector(state),
        modalMessage: modalMessageSelector(state)
    };
};

const mapDispatchToProps = dispatch => {
    return {
        tryAutoLogin: () => dispatch(authActionCreators.checkAuthStatus()),
        closeModal: () => dispatch(modalActionCreators.closeModal())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);