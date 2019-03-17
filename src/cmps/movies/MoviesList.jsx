import React, { Component } from 'react'
import MovieCard from './MovieCard';
import { connect } from 'react-redux'
class MoviesList extends Component {

    render() {
        let moviesList = this.props.movies.moviesToDisplay.map((movie, idx) => <MovieCard key={idx} movie={movie} />)
        return (
            <section className="movies-section">
                <h2 className="movies-title">Edit your movies</h2>
                <div className="movies-container">
                    {moviesList}
                </div>
            </section>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        movies: state.movies,
        errors: state.errors
    }
}
export default connect(mapStateToProps)(MoviesList);