import React, { Component } from 'react'
import { connect } from 'react-redux'
import { setModal } from '../../actions/generalActions'
class AddMovie extends Component {
    setModal = () => {
        this.props.setModal('add')
    }
    render() {
        return (
            <section className="add-section">
                <div className="add-container">
                    <h2 className="add-title">Add a movie</h2>
                    <div className="btn btn-add"
                        onClick={this.setModal}
                    >Add</div>
                </div>
            </section>
        )
    }
}
const mapActionsToProps = (dispatch) => {
    return {
        setModal: (modalContent) => { dispatch(setModal(modalContent)) }
    }
}
export default connect(null, mapActionsToProps)(AddMovie);