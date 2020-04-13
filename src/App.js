import React from 'react';
import { Route, Switch } from 'react-router-dom';

import './App.scss';
import HomePage from './pages/HomePage/HomePage';
import Layout from './hoc/Layout/Layout';
import ShopPage from './pages/ShopPage/ShopPage';
import TopNavBar from './components/Navigation/TopNavBar/TopNavBar';
import SignInSignUpPage from './pages/SignInSignUpPage/SignInSignUpPage';
import { auth } from './firebase/firebase.util';

class App extends React.Component {
  unsubscribeFromAuth = null;

  constructor() {
    super();

    this.state = {
      currentUser: null
    }
  }

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(user => {
      this.setState({ currentUser: user });
      console.log(user);
    });
  }

  render() {
    return (
      <div>
        <TopNavBar currentUser={this.state.currentUser} />
        <Layout>
          <Switch>
            <Route path='/' exact component={HomePage} />
            <Route path='/shop' component={ShopPage} />
            <Route path='/sign-in' component={SignInSignUpPage} />
          </Switch>
        </Layout>
      </div>
    );
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }
}

export default App;
