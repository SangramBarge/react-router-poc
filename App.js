import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'
import About from './view/About'
import Welcome from './view/Welcome'


const Home = () => (
    <h1>in home component</h1>

  )


/*const About = () => (
    <h1>in about component</h1>

  )*/



const Links = () => (
    <ui>
        <li><Link to="/">home</Link></li>
        <li><Link to="/about">about</Link></li>
        
    </ui>

  )

const App = () => (

      <Router>
        <div>
          <Links/>
          <Route exact path="/" component={Home} />
          <Route path="/about" exact render={props => <About {...props} />} />
          <Route exact path="/welcome" component={Welcome} />
        </div>
      </Router>

  )

export default App;
