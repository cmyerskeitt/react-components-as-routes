import React from 'react';
import ReactDOM from 'react-dom';
import Home from './Home'
import About from './About'
import Signup from './Signup'
import Login from './Login'
import Navbar from './Navbar'
import {BrowserRouter as Router, Route } from 'react-router-dom'

ReactDOM.render((
  <Router>
    <div>
      <Navbar/>
      <Route path="/" component={Home}/>
      <Route exact path="/about" component={About}/>
      <Route exact path="/login" component={Login}/>
      <Route exact path="/signup" component={Signup}/>
    </div>
  </Router>),
  document.getElementById('root')
);
