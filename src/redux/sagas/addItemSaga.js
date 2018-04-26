import { call, put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';

function* addItems(action){
    console.log('addItems is called!');
    const config = {
        headers: {'Content-Type': 'application/json'},
        withCredentials: true,
    }
    try{
        const newItem = yield call(axios.post, '/api/shelf', action.payload, config)
        yield put({
            type: 'GET_ITEMS',
        })
    }catch(error){
        console.log('error ing addItemSaga', error)
    }
}

function* AddItemSaga() {
    yield takeEvery('ADD_ITEM', addItems)
}

export default AddItemSaga;