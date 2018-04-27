import { call, put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';

function* fetchItems(){
  console.log('fetch items called');
  const config ={
    headers: {'Content-Type': 'application/json'},
    withCredentials: true,
  }
  try{
    const items = yield call(axios.get, '/api/shelf', config )
    yield put({
      type: 'SET_ITEMS',
      payload: items.data
    })
  }
  catch(error){
    console.log('an error in viewShelfSaga ', error);
  }
}

function* deleteItem(action){
  const config = {
    headers: { 'Content-Type': 'application/json' },
    withCredentials: true,
  }

  try{
    yield call(axios.delete, `/api/shelf/${action.payload.id}`, config)
    yield put({
      type: 'GET_ITEMS'
    })
  }
  catch(error){
    console.log('an error in deleteItem ', error);
  }
}
function* editItem(action){
  const config = {
    headers: { 'Content-Type': 'application/json' },
    withCredentials: true,
  }

  try{
    yield call(axios., `/api/shelf/${action.payload.id}`, config)
    yield put({
      type: 'GET_ITEMS'
    })
  }
  catch(error){
    console.log('an error in editItem ', error);
  }
}

function* ViewItemSaga() {
  yield takeEvery('GET_ITEMS', fetchItems);
  yield takeEvery('DELETE_ITEM', deleteItem);
  yield takeEvery('EDIT_ITEM', editItem);
}

export default ViewItemSaga;