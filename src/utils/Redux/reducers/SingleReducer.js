import {
    GET_SINGLE_ARTICLE_SUCCESS,
    GET_SINGLE_ARTICLE_FAILURE, GET_SINGLE_ARTICLE
} from '../constants';
const initialStateSingle = [];
//reducer for single article
export const SingleArticleReducer = (state = initialStateSingle, action={}) => {
    switch (action.type) {
        case GET_SINGLE_ARTICLE:
            return {
                ...state,
                id: action.id
            };
        case GET_SINGLE_ARTICLE_SUCCESS:
            return  {
                ...state,
                return:action.receiveArticleSingle
            };
        case  GET_SINGLE_ARTICLE_FAILURE:
            return [];
        default:
            return state;

    }
};
