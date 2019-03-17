import { ADD_MOVIE, PICK_MOVIE, REMOVE_MOVIE, UPDATE_MOVIE } from '../actions/types';

const initialState = {
    moviesToDisplay: [],
    pickedMovie: null
}

const moviesReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case ADD_MOVIE:
            return {
                ...state,
                moviesToDisplay: state.moviesToDisplay.concat(payload)
            }
        case PICK_MOVIE: {
            return {
                ...state,
                pickedMovie: payload
            }
        }
        case UPDATE_MOVIE: {
            return {
                ...state,
                moviesToDisplay: state.moviesToDisplay.map(movie => {
                    if (movie.id === payload.id) return payload
                    return movie
                })
            }
        }
        case REMOVE_MOVIE:
            return {
                ...state,
                moviesToDisplay: state.moviesToDisplay.filter(movie => movie.id !== payload)
            }
        default:
            return state;
    }
}

export default moviesReducer;