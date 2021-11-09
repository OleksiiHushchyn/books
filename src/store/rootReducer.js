import { combineReducers } from 'redux';
import {booksReducer} from './books';
import {loaderReducer} from './loader';

const rootReducer = combineReducers({
    booksReducer,
    loaderReducer
})

export default rootReducer;