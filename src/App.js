import React, { Component } from 'react';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import Home from './Home';
import Navigation from './Navigation';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Link from './Link';
import Form from './Form';

class App extends Component {
  render() {
    return (
      <div>
        <Navigation />
      <BrowserRouter>
        <Switch>
          <Route path="/" component={Home} exact></Route>
          <Route path="/link" component={Link} ></Route>
          <Route path="/form" component={Form} ></Route>

        </Switch>
      </BrowserRouter>
      </div>
    );
  }
}

export default App;
