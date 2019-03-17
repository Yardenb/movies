import { combineReducers } from 'redux';
import moviesReducer from './moviesReducer';
import errorsReducer from './errorsReducer';
import generalReducer from './generalReducer';

const rootReducer = combineReducers({
    movies: moviesReducer,
    errors: errorsReducer,
    general: generalReducer
})

export default rootReducer;