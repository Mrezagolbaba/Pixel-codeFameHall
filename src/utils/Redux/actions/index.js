import {
    GET_ARTICLE,
    GET_ARTICLE_SUCCESS,
    GET_ARTICLE_FAILURE,
    GET_SINGLE_ARTICLE,
    GET_SINGLE_ARTICLE_SUCCESS,
    GET_SINGLE_ARTICLE_FAILURE
} from '../constants';

// GET_ARTICLE function will be dispatched within ARTICLEContainer
function getArticles () {

    return {
        type: GET_ARTICLE
    };
}
/* After fetching form the server this action is intercepted by the reducer and the ARTICLE added to the state */
function getArticleSuccess (receiveArticle) {
    return {
        type: GET_ARTICLE_SUCCESS,
        receiveArticle
    };
}
function getArticleFailure () {
    return {
        type: GET_ARTICLE_FAILURE
    };
}

//****************************************************************************************************************************************************************//
//send id for get single page
function fetchArticleAction (id) {
    return {
        type: GET_SINGLE_ARTICLE,
        id
    };
}
function getArticleSuccessSingle (receiveArticleSingle) {
    return {
        type: GET_SINGLE_ARTICLE_SUCCESS,
        receiveArticleSingle
    };
}
function getArticleFailureSingle () {
    return {
        type: GET_SINGLE_ARTICLE_FAILURE
    };
}

// we export all the function in a single export command
export {
    getArticles,
    getArticleSuccess,
    getArticleFailure,
    fetchArticleAction,
    getArticleSuccessSingle,
    getArticleFailureSingle
};
