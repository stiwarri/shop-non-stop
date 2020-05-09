import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import './App.scss';
import CheckoutPage from './pages/CheckoutPage/CheckoutPage.jsx';
import HomePage from './pages/HomePage/HomePage.jsx';
import Layout from './hoc/Layout/Layout.jsx';
import Modal from './components/UI/Modal/Modal.jsx';
import ShopPage from './pages/ShopPage/ShopPage.jsx';
import TopNavBar from './components/Navigation/TopNavBar/TopNavBar.jsx';
import SignInSignUpPage from './pages/SignInSignUpPage/SignInSignUpPage.jsx';

import * as modalActionCreators from './redux/actions/modalAction';
import * as authActionCreators from './redux/actions/authAction';
import { showModalSelector, modalMessageSelector } from './redux/selectors/modalSelector';
import { authStatusSelector } from './redux/selectors/authSelector';

class App extends React.Component {
    render() {
        let routes = (
            <Switch>
                <Route path='/' exact component={HomePage} />
                <Route path='/shop' component={ShopPage} />
                <Route path='/sign-in' component={SignInSignUpPage} />
                <Redirect to='/' />
            </Switch>
        );

        if (this.props.authStatus) {
            routes = (
                <Switch>
                    <Route path='/' exact component={HomePage} />
                    <Route path='/shop' component={ShopPage} />
                    <Route path='/checkout' component={CheckoutPage} />
                    <Redirect to='/' />
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