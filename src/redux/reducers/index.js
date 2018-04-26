import { combineReducers } from 'redux';
import user from './userReducer';
import login from './loginReducer';
import viewShelf from './viewShelfReducer';

const store = combineReducers({
  user,
  login,
  viewShelf,
});

export default store;
