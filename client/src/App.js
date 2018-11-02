

/*
import React, { Component } from 'react';
//import logo from './logo.svg';
import Login from './components/Login.js';
import Navbar from './components/Navbar';
//import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
      <Login/>
      <Navbar/>
       </div>
    );
  }
}

export default App;


*/

import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Login from './components/Login.js';
import Navbar from "./components/Navbar";
import Faculty from "./pages/Faculty";
import Preceptor from "./pages/Preceptor";
import Student from "./pages/Student";


const App = () => (
  <Router>
    <div>
      <Login/>
      <Navbar />


   {/*<Route exact path="/" component={About} /> */ }
        <Route exact path="/faculty" component={Faculty} />
        <Route exact path="/preceptor" component={Preceptor} />
        <Route exact path="/student" component={Student} />

    </div>
  </Router>
);

export default App;



