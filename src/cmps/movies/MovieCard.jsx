import React from 'react'
import { connect } from 'react-redux'
import { setModal } from '../../actions/generalActions';
import { pickMovie } from '../../actions/moviesActions'

const MovieCard = (props) => {
    const { movie } = props
    return (
        <div className="card">
            <div className="card__top">
                <img src={movie.Poster} alt="poster" className="card-poster" />
                <div
                    className="btn btn-card btn-left"
                    onClick={() => {
                        props.pickMovie(movie)
                        props.setModal('edit')
                    }}
                >Edit</div>
                <div className="btn btn-card btn-right"
                    onClick={() => {
                        props.pickMovie(movie)
                        props.setModal('delete')
                    }}
                >x</div>
            </div>
            <div className="card__bottom">
                <div className="movie-title">{movie.Title} </div>
                <div className="movie-sub-details">{movie.Year}</div>
            </div>
        </div>
    )
}
const mapActionsToProps = (dispatch) => {
    return {
        setModal: (modalContent) => { dispatch(setModal(modalContent)) },
        pickMovie: (movie) => { dispatch(pickMovie(movie)) }

    }
}
export default connect(null, mapActionsToProps)(MovieCard);