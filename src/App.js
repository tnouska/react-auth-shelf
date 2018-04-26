import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from 'react-router-dom';

import Header from './components/Header/Header';
import LoginPage from './components/LoginPage/LoginPage';
import RegisterPage from './components/RegisterPage/RegisterPage';
import ViewItems from './components/UserPage/UserPage'; //view shelf
import GroupItems from './components/InfoPage/InfoPage'; //Items from User
//Create AddItem page

import './styles/main.css';

const App = () => (
  <div>
    <Header title="Project Base" />
    <Router>
      <Switch>
        <Redirect exact from="/" to="/home" />
        <Route
          path="/home"
          component={LoginPage}
        />
        <Route
          path="/register"
          component={RegisterPage}
        />
        <Route
          path="/viewitems"
          component={ViewItems}
        />
        <Route
          path="/groupitems"
          component={GroupItems}
        />
        {/* <Route
          path="/additem"
          component={AddItem}
        /> */}
      </Switch>
    </Router>
  </div>
);

export default App;
