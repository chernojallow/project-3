
import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Login from './components/Login.js';
import Navbar from "./components/Navbar";
import Faculty from "./pages/Faculty";
import Preceptor from "./pages/Preceptor";
import Student from "./pages/Student";
import Clinicals from "./pages/Clinicals";
import Evaluate from "./pages/Evaluate";



const App = () => (
  <Router>
    <div>
      <Login/>
      <Navbar />
    
   {/*<Route exact path="/" component={About} /> */ }
        <Route exact path="/faculty" component={Faculty} />
        <Route exact path="/preceptor" component={Preceptor} />
        <Route exact path="/student" component={Student} />
        <Route exact path="/clinicals" component={Clinicals} />
        <Route exact path="/evaluate" component={Evaluate} />



    </div>
  </Router>
);

export default App;



