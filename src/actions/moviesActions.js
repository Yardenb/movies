import moviesService from '../utils/moviesService';
import { ADD_MOVIE, PICK_MOVIE, REMOVE_MOVIE, UPDATE_MOVIE } from './types'

export const getInitialDetails = () => async (dispatch) => {
    await moviesService.getInitialData()
        .then(res => {
            res.forEach(movie => dispatch({
                type: ADD_MOVIE,
                payload: movie
            }))
        })

}
export const updateMovie = (movie) => {
    return {
        type: UPDATE_MOVIE,
        payload: movie
    }
}
export const addMovie = (movie) => {
    return {
        type: ADD_MOVIE,
        payload: movie
    }
}
export const pickMovie = (movie) => {
    return {
        type: PICK_MOVIE,
        payload: movie
    }
}
export const removeMovie = (id) => {
    return {
        type: REMOVE_MOVIE,
        payload: id
    }
}