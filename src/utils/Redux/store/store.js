// We import Redux and Redux-saga dependencies
import {
    createStore,
    applyMiddleware
} from 'redux';
import createSagaMiddleware from 'redux-saga'
import rootSaga from '../saga';
import AllReducer from '../reducers';

//config store for all reducer and saga
const configureStore = () => {
    const sagaMiddleware = createSagaMiddleware();
    const store = createStore(
        AllReducer,
        applyMiddleware(sagaMiddleware)
    );
    sagaMiddleware.run(rootSaga);
    return store;
};
export default configureStore;
