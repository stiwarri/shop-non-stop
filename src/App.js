import React from 'react';
import { Route, Switch } from 'react-router-dom';

import './App.scss';
import HomePage from './pages/HomePage/HomePage';
import Layout from './hoc/Layout/Layout';
import ShopPage from './pages/ShopPage/ShopPage';
import TopNavBar from './components/Navigation/TopNavBar/TopNavBar';
import SignInSignUpPage from './pages/SignInSignUpPage/SignInSignUpPage';
import { auth, createUserProfileDocument } from './firebase/firebase.util';

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
