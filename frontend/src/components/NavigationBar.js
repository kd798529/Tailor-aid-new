import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class NavigationBar extends Component {
    render() {
        return(
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <Link class="navbar-brand" to="/">Tailor-Aid!</Link>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item active">
        <a class="nav-link">About <span class="sr-only">(current)</span></a>
      </li>
      <li class="nav-item">
        <Link class="nav-link" to="/signup">Signup</Link>
      </li>
      <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Dropdown
        </a>
        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
          <a class="dropdown-item" >Action</a>
          <a class="dropdown-item" >Another action</a>
          <div class="dropdown-divider"></div>
          <a class="dropdown-item" >Something else here</a>
        </div>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Signin</a>
      </li>
    </ul>
  </div>
</nav>
        );
    }
}


export default NavigationBar;
