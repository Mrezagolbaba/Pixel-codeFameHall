import {
    GET_ARTICLE_FAILURE,
    GET_ARTICLE_SUCCESS,
} from '../constants';
const initialState = [];
//reducer for home items 
const articleReducer = (state = initialState, action={}) => {
    switch (action.type) {
        case GET_ARTICLE_SUCCESS:
            return action.receiveArticle;
        case GET_ARTICLE_FAILURE :
            return [];
        default:
            return state;

    }
};
export default articleReducer
