import React, { Component, Fragment } from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import Home from './Home';
import History from './History'
import Error from './Error'
import Header from './Header'
import './App.css';

class App extends Component {
  render() {
    return (
        <BrowserRouter>
          <div>
            <Header />
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/notre-histoire" component={History} />
              <Route component={Error} />
            </Switch>
          </div>
        </BrowserRouter>
    );
  }
}

export default App;
