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
import ViewItem from './components/UserPage/UserPage'; //view shelf
import GroupItem from './components/InfoPage/InfoPage'; //Items from User
//Create AddItem page
import AddItemForm from './components/AddItemForm/AddItemForm';

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
          path="/viewitem"
          component={ViewItem}
        />
        <Route
          path="/groupitem"
          component={GroupItem}
        />
        <Route
          path="/additem"
          component={AddItemForm}
        />
      </Switch>
    </Router>
  </div>
);

export default App;
