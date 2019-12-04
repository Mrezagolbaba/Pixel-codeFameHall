// We import the combineReducers function
import { combineReducers } from 'redux';
// Import our reducers function from here
import articleReducer from './HomeReducer';
import {SingleArticleReducer} from './SingleReducer'



// combineReducers merges them all!
const AllReducer= combineReducers({
    articleReducer,
    SingleArticleReducer
});
export default AllReducer
