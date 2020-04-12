import React from 'react';
import { Route, Switch } from 'react-router-dom';

import './App.scss';
import HomePage from './pages/HomePage/HomePage';
import Layout from './hoc/Layout/Layout';
import ShopPage from './pages/ShopPage/ShopPage';
import TopNavBar from './components/Navigation/TopNavBar/TopNavBar';
import SignInSignUpPage from './pages/SignInSignUpPage/SignInSignUpPage';

function App() {
  return (
    <div>
      <TopNavBar />
      <Layout>
        <Switch>
          <Route path='/' exact component={HomePage} />
          <Route path='/shop' component={ShopPage} />
          <Route path='/about-us' component={SignInSignUpPage} />
        </Switch>
      </Layout>
    </div>
  );
}

export default App;
