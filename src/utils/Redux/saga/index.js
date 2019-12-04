// Import the watcher we have just created
import {
    watchGetArticle,

} from './HomeSaga';
import {call} from 'redux-saga/effects'

export default function* rootSaga () {
// We start all the sagas in parallel
    yield call(watchGetArticle);
}
