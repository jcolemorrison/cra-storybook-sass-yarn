import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Widget from './components/widget/'
import Another from './components/another/'
import Something from './components/widget/something.js'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <div className="App-intro">
          <Widget />
          <Another />
          <Something />
        </div>
      </div>
    );
  }
}

export default App;
