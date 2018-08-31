import React, { Component } from 'react';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import Home from './Home';
import Navigation from './Navigation';

class App extends Component {
  render() {
    return (
      <div>
        <Navigation />
        <div className="">
          <p className="">
            <Home />
          </p>
        </div>
      </div>
    );
  }
}

export default App;
