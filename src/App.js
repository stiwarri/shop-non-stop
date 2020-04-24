import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import './App.scss';
import HomePage from './pages/HomePage/HomePage';
import Layout from './hoc/Layout/Layout';
import Modal from './components/UI/Modal/Modal';
import ShopPage from './pages/ShopPage/ShopPage';
import TopNavBar from './components/Navigation/TopNavBar/TopNavBar';
import SignInSignUpPage from './pages/SignInSignUpPage/SignInSignUpPage';
import * as modalActionCreators from './redux/actions/modalAction';
import * as authActionCreators from './redux/actions/authAction';

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
        showModal: state.modal.showModal,
        modalMessage: state.modal.modalMessage
    };
};

const mapDispatchToProps = dispatch => {
    return {
        tryAutoLogin: () => dispatch(authActionCreators.checkAuthStatus()),
        closeModal: () => dispatch(modalActionCreators.closeModal())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
