
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from './components/Login.js';
import Navbar from "./components/Navbar";
import Faculty from "./pages/Faculty";
import Preceptor from "./pages/Preceptor";
import Student from "./pages/Student";
import Clinicals from "./pages/Clinicals";
import Evaluate from "./pages/Evaluate";
import View from "./pages/View";
import InputClinicals from "./pages/InputClinicals";
//import Register from "./pages/Register";

import API from "./api/Users";
import { EventEmitter } from "events";

class App extends React.Component {


  // constructor(props) {
  //   super(props);

  //   this.state = {
  //     value: '',
  //     name: ""

  //   };

  //    this.handleChange = this.handleChange.bind(this);
  //   this.handleSubmit = this.handleSubmit.bind(this);

  // }


  // handleChange(event) {
  //   event.preventDefault();

  //    this.setState( {[event.target.value]: event.target.name});


  // }

  // handleSubmit(event) {
  //   // alert('Your favorite flavor is: ' + this.state.value);

  //   event.preventDefault();

  //   console.log("I'm evaluating you", this.state);
  //   console.log(API)


  //   API.view(this.state).then(function (response) {
  //     console.log(response);

  //   })


  //   API.viewClinicals(this.state).then(function (response) {
  //     console.log(response);

  //   })

  //}




  state = {
    name: "",
    value: "",
    class: ""

  }
  handleSubmit = (event) => {
    event.preventDefault();
    console.log("I'm signingfhfhghg up baby", this.state);
    API.view(this.state).then(function (response) {
      console.log(response);
    })
  }
  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
      value: event.target.value,

    })
  }

  handleInputChange = (event) => {
    this.setState({
      class: event.target.value

    })
  }


  render() {
    return (
      <Router>
        <Switch>
          <div>
            <Login />
            <Navbar />
            
       

            <Route exact path="/faculty" component={Faculty} />
            <Route exact path="/preceptor" component={Preceptor} />
            <Route exact path="/student" component={Student} />
            <Route exact path="/evaluate" render={(props) => <Evaluate value={this.state.value}   name={this.state.name} handleChange={this.handleChange} handleSubmit={this.handleSubmit} />} />
            <Route exact path="/view" render={(props) => <View value={this.state.value} name={this.state.name} />} />


            <Route exact path="/inputClinicals" render={(props) => <InputClinicals value={this.state.class} handleInputChange={this.handleInputChange} handleSubmit={this.handleSubmit} />} />
            <Route exact path="/clinicals" render={(props) => <Clinicals class={this.state.class} />} />
          </div>
        </Switch>
      </Router>
    )
  }

}

export default App;



