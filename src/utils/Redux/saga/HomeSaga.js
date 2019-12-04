
import {takeEvery} from 'redux-saga/effects';
import {put, call,select} from 'redux-saga/effects';
import {GET_ARTICLE, GET_SINGLE_ARTICLE,} from '../constants';

import {
    getArticleSuccess,
    getArticleFailure,
    getArticleSuccessSingle,
    getArticleFailureSingle
} from '../actions';

//request for list of items
const fetchArticle = () => {
    return fetch('http://localhost:3000/fames?guest=true', {
        method:'GET',
        headers:{
            'Content-Type': 'application/json',
            'X-Requested-With':'XMLHttpRequest',
        }
    })
        .then(response => response.json())
};

//request for single items
const fetchArticleSingle = (id) => {

    return fetch('http://localhost:3000/fames/'+id+'?guest=true', {
        method:'GET',
        headers:{
            'Content-Type': 'application/json',
            'X-Requested-With':'XMLHttpRequest',
        }
    })
        .then(response => response.json())
};

//function for list request
function* getArticle () {
    try {
        const receiveArticle = yield call(fetchArticle);
        yield put(getArticleSuccess(receiveArticle));
    } catch (err) {
        yield put(getArticleFailure());
    }
}

//function for single request
function* getArticleSingle (action) {
    const id = yield select((state)=>{
        return state.SingleArticleReducer.id
    });
    if(id){
        try {
            const receiveArticleSingle = yield call(fetchArticleSingle,action.id) ;
            yield put(getArticleSuccessSingle(receiveArticleSingle.data));
        } catch (err) {
            yield put(getArticleFailureSingle());
        }
    }

}


//watcher for all of function
function* watchGetArticle () {

    yield takeEvery(GET_ARTICLE, getArticle);

    yield takeEvery(GET_SINGLE_ARTICLE, getArticleSingle);

}

export {
    watchGetArticle
};
