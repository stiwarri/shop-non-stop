import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';

import './App.scss';
import HomePage from './pages/HomePage/HomePage';
import Layout from './hoc/Layout/Layout';
import Modal from './components/UI/Modal/Modal';
import ShopPage from './pages/ShopPage/ShopPage';
import TopNavBar from './components/Navigation/TopNavBar/TopNavBar';
import SignInSignUpPage from './pages/SignInSignUpPage/SignInSignUpPage';
import { auth, createUserProfileDocument } from './utils/firebase.util';
import * as modalActionCreators from './store/actions/modal';

class App extends React.Component {
  unsubscribeFromAuth = null;

  constructor() {
    super();

    this.state = {
      currentUser: null
    }
  }

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);
        userRef.onSnapshot(snapshot => {
          const userData = {
            id: userRef.id,
            ...snapshot.data()
          }
          this.setState({
            currentUser: userData
          }, () => console.log(this.state));
        });
      } else {
        this.setState({
          currentUser: userAuth
        }, () => console.log(this.state));
      }
    });
  }

  render() {
    return (
      <React.Fragment>
        <TopNavBar currentUser={this.state.currentUser} />
        <Modal show={this.props.showModal} closeModal={this.props.closeModal}>{this.props.modalMessage}</Modal>
        <Layout>
          <Switch>
            <Route path='/' exact component={HomePage} />
            <Route path='/shop' component={ShopPage} />
            <Route path='/sign-in' component={SignInSignUpPage} />
          </Switch>
        </Layout>
      </React.Fragment>
    );
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
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
    closeModal: () => dispatch(modalActionCreators.closeModal())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
