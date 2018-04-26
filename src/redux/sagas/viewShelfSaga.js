import { call, put, takeLatest } from 'redux-saga/effects';
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

function* ViewItemSaga() {
  yield takeLatest('GET_ITEMS', fetchItems);
}

export default ViewItemSaga;