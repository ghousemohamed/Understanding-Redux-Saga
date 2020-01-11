import {takeEvery, put} from 'redux-saga/effects';
import { LOAD_TYPE } from '../actions/types';

function * workerSaga() {
    console.log('Hey from worker saga')
    yield put({type: LOAD_TYPE, payload: 'this is a message from the saga'});
}

function * rootSaga() {
    yield takeEvery('HELLO', workerSaga)
}

export default rootSaga