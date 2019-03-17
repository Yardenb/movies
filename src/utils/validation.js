import validator from 'validator'
import store from '../store';
export const checkString = (str) => {
    return ({
        empty: validator.isEmpty(str),
        alpha: validator.isAlpha(str)
    })
}

export const checkMovie = (movie) => {
    let errObj = {}
    //Sanitize
    movie.Title = validator.trim(movie.Title)
    movie.Director = validator.trim(movie.Director)
    movie.Genre = validator.trim(movie.Genre)


    if (validator.isEmpty(movie.Title)) errObj.Title = "Title field is required"
    if (!validator.whitelist(movie.Title.toLowerCase(), 'abcdefghijklmnopqrstuvwxyz')) errObj.Title = "Title should include at least one letter"
    if (validator.isEmpty(movie.Director)) errObj.Director = "Director field is required"
    if (validator.isEmpty(movie.Genre)) errObj.Genre = "Genre field is required"
    if (!validator.isAfter(movie.Year, validator.toDate('1900') + '')) errObj.Year = "Year should be after 1900"
    if (!validator.toDate(movie.Year)) errObj.Year = "Year is not valid"
    if (validator.isEmpty(movie.Runtime)) errObj.Runtime = "Runtime field is required"


    let movies = store.getState().movies.moviesToDisplay
    if (movies.find(currMovie =>
        ((currMovie.Title.toLowerCase() === validator.whitelist(movie.Title.toLowerCase(), 'abcdefghijklmnopqrstuvwxyz ')) && currMovie.id !== movie.id)

    )) errObj.Title = "Title already exist"
    return Promise.resolve(errObj)
}