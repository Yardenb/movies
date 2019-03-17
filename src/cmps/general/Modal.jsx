import React, { Component } from 'react'
import ReactModal from 'react-modal'
import { connect } from 'react-redux'
import { setModal } from '../../actions/generalActions';
import { pickMovie } from '../../actions/moviesActions'
import AddEditModalContent from '../general/AddEditeModalContent';
import DeleteModalContent from '../general/DeleteModalContent'

ReactModal.setAppElement('#root');

class Modal extends Component {
    handleClose = () => {
        this.props.pickMovie(null)
        this.props.setModal('')
    }
    determineContent = () => {
        let { modalContent } = this.props.general
        switch (modalContent) {
            case ('add'):
                return <AddEditModalContent />
            case ('edit'):
                return <AddEditModalContent />
            case ('delete'):
                return <DeleteModalContent />
            default:
                return <h1>no content chosen</h1>
        }
    }
    render() {
        let content = this.determineContent();
        const customStyles = {
            content: {
                top: '50%',
                left: '50%',
                right: 'auto',
                bottom: 'auto',
                marginRight: '-50%',
                transform: 'translate(-50%, -50%)',
                backgroundColor: '#f4f4f4'
            }
        }
        return (
            <ReactModal
                isOpen={!!this.props.general.modalContent}
                contentLabel="Example Modal"
                onRequestClose={this.handleClose}
                shouldCloseOnOverlayClick={true}
                shouldCloseOnEsc={true}
                style={customStyles}
            >
                {content}
            </ReactModal>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        general: state.general
    }
}
const mapActionsToProps = (dispatch) => {
    return {
        setModal: (modalContent) => { dispatch(setModal(modalContent)) },
        pickMovie: (movie) => { dispatch(pickMovie(movie)) }
    }
}
export default connect(mapStateToProps, mapActionsToProps)(Modal)