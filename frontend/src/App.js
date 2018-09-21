import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './pages/Home';
import Signup from './pages/Signup';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Signup />
      </div>
    );
  }
}

export default App;
