import {createStore, applyMiddleware} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import rootReducer from './reducers';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './sagas';
import { LOAD_TYPE } from './actions/types';

const configureStore = () => {
const initialState = {};
const sagaMiddleware = createSagaMiddleware()
const middleware = [sagaMiddleware]

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(sagaMiddleware)));

sagaMiddleware.run(rootSaga);

return store
}

export default configureStore;