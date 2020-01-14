import { takeEvery, select, call, put } from 'redux-saga/effects';
import { LOAD_TYPE, LOAD_IMAGES } from '../actions/types';
import { setImages } from '../actions/actions';


const key = "5f96323678d05ff0c4eb264ef184556868e303b32a2db88ecbf15746e6f25e02";
let page = 1
const getPage = state => state.reducer.message

const fetchImages = async () => {
    const response = await fetch(`https://api.unsplash.com/photos/?client_id=5f96323678d05ff0c4eb264ef184556868e303b32a2db88ecbf15746e6f25e02&per_page=20&page=${page}`)
    const data = await response.json();
    if (response.status > 400) {
        throw new Error(data.errors)
    }
    page+=1
    return data;
}

function * handleImagesLoad() {
    const page = yield select(getPage) 
    const images = yield call(fetchImages, page)
    yield put(setImages(images))
}

function * rootSaga() {
    yield takeEvery(LOAD_IMAGES, handleImagesLoad)
}

export default rootSaga