import axios from 'axios';
import uuid from 'uuid';
const getMovieDetails = (movieName) => {
    let url = 'http://www.omdbapi.com/?apikey=ff880c11&t=';
    return axios.get(url + movieName)
}
const getInitialData = () => {
    let movies = ['The+Princess+Bride', 'Toy+Story', 'Thor ', 'Trainspotting', 'Guardians+Of+The+Galaxy', 'Seven', 'The+Matrix', 'The+Lord+Of+The+Rings:+The+Two+Towers', 'Fight+Club', 'Pulp+Fiction', 'The+Dark+Knight', 'wonder+woman'];

    let prms = movies.map(name => getMovieDetails(name))
    return Promise.all(prms)
        .then(res => res.map(item => {
            let data = item.data;
            let { Title, Year, Runtime, Genre, Director, Poster } = data;
            return {
                Title,
                Year,
                Runtime,
                Genre,
                Director,
                Poster,
                id: uuid.v4()
            }
        }))
        .then(res => res)
        .catch(err => console.log('error!', err))

}
export default {
    getMovieDetails,
    getInitialData
}