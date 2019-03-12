import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../actions';
import Header from '../Components/Header/Header';
import landing from '../Components/landing/landing';
import find from '../Components/find/find';

class App extends Component {
    componentDidMount() {
        this.props.fetchUser();
    }

    render() {
        return (
            <div className="app-container">
                <BrowserRouter>
                    <div>
                        <Header />
                        <Route path="/" exact component={landing} />
                        <Route path="/find" exact component={find} />
                    </div>
                </BrowserRouter>
            </div>
        );
    }
}

export default connect(null, actions)(App);
