import { combineReducers } from 'redux';
import user from './userReducer';
import login from './loginReducer';
import groupItem from './groupItemReducer'

const store = combineReducers({
  user,
  login,
  groupItem,
});

export default store;
