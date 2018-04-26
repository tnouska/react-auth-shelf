import { combineReducers } from 'redux';
import user from './userReducer';
import login from './loginReducer';
import groupItem from './groupItemReducer'
import viewShelf from './viewShelfReducer';


const store = combineReducers({
  user,
  login,
  groupItem,
  viewShelf,

});

export default store;
