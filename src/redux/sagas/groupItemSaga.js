import { call, put, takeEvery } from 'redux-saga/effects';
import axios from 'axios'

function* groupItem(action){
    try {
        const groupItemResponse = yield call(axios.get, '/api/shelf/count')
        yield put({
            type: 'SET_GROUP_ITEM',
            payload: groupItemResponse.data
        })
    } catch (error) {
        console.log('error in groupItemSaga: ', error);
    }
}

function* groupItemSaga() {
    yield takeEvery('GROUP_ITEM', groupItem)
}
export default groupItemSaga