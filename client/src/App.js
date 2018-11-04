
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
import API from "./api/Users";


class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      value: '',
      viewclinical: []

    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    event.preventDefault();
    this.setState({ value: event.target.value });


  }

  handleSubmit(event) {
    // alert('Your favorite flavor is: ' + this.state.value);
    
    event.preventDefault();

    console.log("I'm evaluating you", this.state);
    console.log(API)


    API.view(this.state).then(function (response) {
      console.log(response);

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
            <Route exact path="/clinicals" component={Clinicals} />
    <Route exact path="/evaluate" render={ (props) => <Evaluate value={this.state.value} handleChange={this.handleChange} handleSubmit={this.handleSubmit}/>}/>
            
            <Route exact path="/view" render={ (props) => <View value={this.state.value}/>}/>
          </div>
        </Switch>
      </Router>
    )
  }

}





export default App;



