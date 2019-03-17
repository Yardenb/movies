import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import store from './store';
import Header from './cmps/layout/Header';
import Nav from './cmps/layout/Nav';
import Home from './cmps/pages/Home';
import About from './cmps/pages/About';
import Loading from './cmps/general/Loading';
import { getInitialDetails } from './actions/moviesActions';
import './App.css';


class App extends Component {
  state = {
    isLoading: false
  }
  componentDidMount = async () => {
    this.setState({ isLoading: true })
    await store.dispatch(getInitialDetails());
    this.setState({ isLoading: false })
  }
  render() {
    return (
      <Router basename={process.env.PUBLIC_URL}>
        <div className="App">
          <Header />
          <Nav />
          {this.state.isLoading ? <Loading /> : (
            <React.Fragment>
              <Route path='/' component={Home} exact />
              <Route path='/about' component={About} />
            </React.Fragment>
          )}

        </div>
      </Router>
    );
  }
}

export default App;
