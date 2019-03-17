import { SET_ERR } from './types';
import { checkMovie } from '../utils/validation'
export const checkErr = (movie) => (dispatch) => {
    checkMovie(movie)
        .then(errObj => {
            dispatch({
                type: SET_ERR,
                payload: errObj
            })
        })

}