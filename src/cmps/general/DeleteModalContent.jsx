import React, { Component } from 'react'
import { connect } from 'react-redux'
import { setModal } from '../../actions/generalActions';
import { removeMovie, pickMovie } from '../../actions/moviesActions'

class DeleteModalContent extends Component {
    handleDelete = () => {
        this.props.removeMovie(this.props.movies.pickedMovie.id)
        this.props.pickMovie()
        this.props.setModal()
    }
    handleCancel = () => {
        this.props.pickMovie()
        this.props.setModal()
    }
    render() {
        return (
            <div className="modal-content">
                <h2 className="modal-title">Delete?</h2>
                <div className="modal-actions">
                    <div className="btn btn-cancel"
                        onClick={this.handleCancel}
                    >Cancel</div>
                    <div className="btn btn-apply"
                        onClick={this.handleDelete}
                    >
                        Ok
                    </div>
                </div>
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        movies: state.movies
    }
}
const mapActionsToProps = (dispatch) => {
    return {
        removeMovie: (id) => { dispatch(removeMovie(id)) },
        pickMovie: () => { dispatch(pickMovie(null)) },
        setModal: () => { dispatch(setModal('')) }
    }
}
export default connect(mapStateToProps, mapActionsToProps)(DeleteModalContent);