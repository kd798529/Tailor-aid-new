import React, { Component } from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Signup from './pages/Signup';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Route exact path='/' component={Home} />
          <Route path='/signup' component={Signup} />
        </div>
      </BrowserRouter>
      
    );
  }
}

export default App;
