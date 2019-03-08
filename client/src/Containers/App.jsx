import React, { Component } from 'react';
import './App.scss';
// import { library } from '@fortawesome/fontawesome-svg-core'
// import { faIgloo } from '@fortawesome/free-solid-svg-icons'

// library.add(faIgloo)
import Authentication from '../Components/Authentication/Authentication';

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <Authentication /> */}
      </div>
    );
  }
  componentDidMount() {
    fetch('http://localhost:5000/auth/google', {credentials: 'include'});
  }
}

export default App;
