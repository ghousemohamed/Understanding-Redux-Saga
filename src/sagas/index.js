import {takeEvery} from 'redux-saga/effects';
import { LOAD_TYPE, LOAD_IMAGES } from '../actions/types';



function * handleImagesLoad() {
     console.log('Fetching images from unsplash')
}

function * rootSaga() {
    yield takeEvery(LOAD_IMAGES, handleImagesLoad);
    
}

export default rootSaga