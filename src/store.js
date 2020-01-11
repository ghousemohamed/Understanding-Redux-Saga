import {createStore, applyMiddleware} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import rootReducer from './reducers';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './sagas';

const configureStore = () => {
const initialState = {};
const sagaMiddleware = createSagaMiddleware()
const middleware = [sagaMiddleware]

const store = createStore(rootReducer, initialState, composeWithDevTools(applyMiddleware(...middleware)));

sagaMiddleware.run(rootSaga);
store.dispatch({type: 'HELLO'})
return store
}

export default configureStore;