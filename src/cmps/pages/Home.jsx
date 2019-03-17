import React, { Component } from 'react';
import AddMovie from '../movies/AddMovie';
import MoviesList from '../movies/MoviesList';
import Modal from '../general/Modal';
import { connect } from 'react-redux';

class Home extends Component {

    render() {
        return (
            <main className="home-container">
                <AddMovie />
                <MoviesList />
                <Modal />
            </main>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        general: state.general
    }
}
export default connect(mapStateToProps)(Home)