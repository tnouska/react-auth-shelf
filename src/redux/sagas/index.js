import { all, takeEvery } from 'redux-saga/effects';
import userSaga from './userSaga';
import loginSaga from './loginSaga';
import ViewItemSaga from './viewShelfSaga';
import AddItemSaga from './addItemSaga';


export default function* rootSaga() {
  yield all([
    userSaga(),
    loginSaga(),
    ViewItemSaga(),
    AddItemSaga(),
    
    // watchIncrementAsync()
  ]);

}
