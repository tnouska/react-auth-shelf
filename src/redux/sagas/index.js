import { all } from 'redux-saga/effects';
import userSaga from './userSaga';
import loginSaga from './loginSaga';
import groupItemSaga from './groupItemSaga';


export default function* rootSaga() {
  yield all([
    userSaga(),
    loginSaga(),
    groupItemSaga()
    // watchIncrementAsync()
  ]);
}
