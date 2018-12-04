import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import AnimatedEllipsis from 'react-animated-ellipsis';


class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h4> Website Coming Soon<AnimatedEllipsis/></h4>
          <img src={logo} className="App-logo" alt="logo" />
        </header>
      </div>
    );
  }
}

export default App;
