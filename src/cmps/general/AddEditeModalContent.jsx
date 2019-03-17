import React, { Component } from 'react'
import { connect } from 'react-redux'
import cn from 'classnames'
import uuid from 'uuid'
import validator from 'validator'
import { setModal } from '../../actions/generalActions';
import { pickMovie, addMovie, updateMovie } from '../../actions/moviesActions'
import { checkErr } from '../../actions/errorActions'
class AddEditModalContent extends Component {
    state = {
        Title: '',
        Year: '',
        Director: '',
        Genre: '',
        Runtime: '',
        Poster: '',
        id: '',
        modalTitle: 'Add a movie',
        errors: {},
        isvAlid: false
    }
    componentDidMount = () => {
        if (this.props.general.modalContent === 'edit') {
            let { pickedMovie } = this.props.movies
            this.setState({ ...pickedMovie, modalTitle: 'Edit your movie' })
        }

    }
    checkInput = async () => {
        let movie = Object.assign({}, this.state)
        delete movie.modalTitle
        delete movie.isvAlid
        delete movie.errore
        await this.props.checkErr(movie)
        let errors = this.props.errors
        this.setState({ errors })
        if (Object.keys(errors).length === 0) {
            let movie = this.createMovieObj()
            if (this.props.general.modalContent === 'add') {
                this.props.addMovie(movie)
            }
            else {
                this.props.updateMovie(movie)
            }
            this.setState({ isValid: true })
            setTimeout(() => {
                this.props.setModal('')
            }, 2000);
        }
    }
    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }
    handleCancel = () => {
        this.props.pickMovie(null)
        this.props.setModal('')
    }
    createMovieObj = () => {
        let movie = Object.assign({}, this.state)
        delete movie.errors
        delete movie.modalTitle
        delete movie.isvAlid
        if (this.props.general.modalContent === 'add') {
            movie.id = uuid.v4()
        }
        if (!(validator.isURL(movie.Poster) && (movie.Poster.match(/\.(jpeg|jpg|gif|png)$/) != null))) {
            movie.Poster = "https://images.freeimages.com/images/large-previews/5eb/movie-clapboard-1184339.jpg"
        }
        movie.Title = validator.whitelist(movie.Title.toLowerCase(), 'abcdefghijklmnopqrstuvwxyz ');
        movie.Title = movie.Title.split(' ').map(word => {
            return word.charAt(0).toUpperCase() + word.slice(1)
        }).join(' ')
        return movie;
    }
    render() {
        return (
            <div className="modal-content">
                <h2 className="modal-title">{this.state.modalTitle}</h2>
                <form noValidate>
                    <div className="form-item">
                        <label
                            className="form-label">Title:</label>
                        <div className="input-container">
                            <input name="Title"
                                onChange={this.handleChange}
                                placeholder="Title"
                                value={this.state.Title}
                                className="form-input"
                            />
                            <div className={cn("error-msg", { 'hidden': !this.state.errors.Title })}>{this.state.errors.Title}</div>
                        </div>
                    </div>
                    <div className="form-item">
                        <label className="form-label">Year:</label>
                        <div className="input-container">
                            <input name="Year"
                                onChange={this.handleChange}
                                placeholder="Year"
                                value={this.state.Year}
                                className="form-input"
                            />
                            <div className={cn("error-msg", { 'hidden': !this.state.errors.Year })}>{this.state.errors.Year}</div>
                        </div>
                    </div>
                    <div className="form-item">
                        <label
                            className="form-label">Director:</label>
                        <div className="input-container">
                            <input name="Director"
                                onChange={this.handleChange}
                                placeholder="Director"
                                value={this.state.Director}
                                className="form-input"
                            />
                            <div className={cn("error-msg", { 'hidden': !this.state.errors.Director })}>{this.state.errors.Director}</div>
                        </div>
                    </div>
                    <div className="form-item">
                        <label
                            className="form-label">Genre:</label>
                        <div className="input-container">
                            <input name="Genre"
                                onChange={this.handleChange}
                                placeholder="Genre"
                                value={this.state.Genre}
                                className="form-input"
                            />
                            <div className={cn("error-msg", { 'hidden': !this.state.errors.Genre })}>{this.state.errors.Genre}</div>
                        </div>
                    </div>
                    <div className="form-item">
                        <label
                            className="form-label">Runtime:</label>
                        <div className="input-container">
                            <input name="Runtime"
                                onChange={this.handleChange}
                                placeholder="Runtime in minutes"
                                value={this.state.Runtime}
                                className="form-input"
                            />
                            <div className={cn("error-msg", { 'hidden': !this.state.errors.Runtime })}>{this.state.errors.Runtime}</div>
                        </div>
                    </div>
                    <div className="form-item">
                        <label
                            className="form-label">Poster:</label>
                        <div className="input-container">
                            <input name="Poster"
                                onChange={this.handleChange}
                                placeholder="Optional, url"
                                value={this.state.Poster}
                                className="form-input"
                            />
                        </div>
                    </div>
                </form>
                <div className="modal-actions">
                    <div className="btn btn-cancel"
                        onClick={this.handleCancel}
                    >Cancel</div>
                    <div className="btn btn-apply"
                        onClick={this.checkInput}
                    >
                        Ok
                    </div>
                </div>
                <div className={cn('success-msg', { 'hidden': !this.state.isValid })}>
                    The movie was {this.props.general.modalContent === 'add' ? 'added' : 'edited'}
                </div>
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        general: state.general,
        movies: state.movies,
        errors: state.errors
    }
}
const mapActionsToProps = (dispatch) => {
    return {
        setModal: (modalContent) => { dispatch(setModal(modalContent)) },
        pickMovie: (movie) => { dispatch(pickMovie(movie)) },
        checkErr: (movie) => { dispatch(checkErr(movie)) },
        addMovie: (movie) => { dispatch(addMovie(movie)) },
        updateMovie: (movie) => { dispatch(updateMovie(movie)) }
    }
}
export default connect(mapStateToProps, mapActionsToProps)(AddEditModalContent);