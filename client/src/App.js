
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Navbar from "./components/Nav";
import Clinicals from "./pages/Clinicals";
import Evaluate from "./pages/Evaluate";
import View from "./pages/View";
import InputClinicals from "./pages/InputClinicals";
import Jumbotron from "./components/Jumbotron";
import API from "./utils/API";
import Search from "./pages/Search";


import Login from "./components/Login";
import Logout from "./components/Logout";
import Register from "./components/Register";
import UpdateSchedules from "./pages/UpdateSchedules";



import './styles/custom.css';


class App extends React.Component {

  state = {
    name: "",
    value: "",
    nameclass: "",
    room: "",
    instructor: "",
    classTime: ""

  }

  handleSubmit = (event) => {
    event.preventDefault();
    API.view(this.state).then(function (response) {
    })
    window.location.pathname = "/"

  }
  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
      value: event.target.value,

    })
  }

  handleSubmitForm = (event) => {
    event.preventDefault();
    API.viewClinicals(this.state).then(function (response) {
      console.log(response);
    })
    window.location.pathname = "/"

  }

  handleInputChange = (event) => {
    const { name, value } = event.target
    this.setState({
      [name]: value,

    })

  }

  onSubmit = (e) => {
    e.preventDefault();
    const obj = {
        nameclass: this.state.nameclass,
        room: this.state.room,
        classTime: this.state.classTime,
        instructor: this.state.instructor
       
    };
    API.updateSchedule(this.props.match.params.id, obj)
   
        .then(res => console.log(res.data));

    // this.props.history.push('/');
    window.location.pathname = "/clinicals"
}


  render() {
    return (

      <Router>
        <Switch>

          <div>
            <Route exact path="/" component={Login} />
            <Route exact path="/logout" component={Logout} />
            <Route exact path="/Register" component={Register} />

            <Route exact path="/navbar" component={Navbar} />
            <Route exact path="/navbar" component={Jumbotron} />
            <Route exact path ="/searchStudent" component={Search} />

          <Route exact path ="/editSchedules/" render = {(props) => 
            <UpdateSchedules
                  nameclass ={this.state.nameclass}
                  room ={this.state.room}
                  classTime = {this.classTime}
                  instructor ={this.state.instructor}
                  handleInputChange={this.handleInputChange}
                  handleSubmitForm ={this.handleSubmitForm}
                  onSubmit ={this.onSubmit} /> } /> 

            <Route exact path="/evaluate" render={(props) =>
              <Evaluate
                value={this.state.value}
                name={this.state.name}
                handleChange={this.handleChange}
                handleSubmit={this.handleSubmit} />} />

            <Route exact path="/view" render={(props) =>
              <View
                value={this.state.value}
                name={this.state.name} />} />

            <Route exact path="/inputClinicals" render={(props) =>
              <InputClinicals
                nameclass={this.state.nameclass}
                room={this.state.room}
                handleInputChange={this.handleInputChange}
                handleSubmitForm={this.handleSubmitForm}
                onSubmit ={this.onSubmit}
              />}
            />
            <Route exact path="/clinicals" render={(props) =>
              <Clinicals
                nameclass={this.state.nameclass}
                room={this.state.room} />} />
          </div>

        </Switch>
      </Router>
    )
  }

}


export default App;


