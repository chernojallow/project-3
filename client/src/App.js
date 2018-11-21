import React from "react";
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import Navbar from "./components/Navbar";
import Nav from "./components/Nav";
import Faculty from "./pages/Faculty";
import Preceptor from "./pages/Preceptor";
import Student from "./pages/Student";
import Clinicals from "./pages/Clinicals";
import Evaluate from "./pages/Evaluate";
import View from "./pages/View";
import InputClinicals from "./pages/InputClinicals";
import Jumbotron from "./components/Jumbotron";
import Register from "./components/Register";
import Login from './components/Login';
import API from "./api/users";
import Footer from "./components/Footer";
import Wrapper from "./components/Wrapper";




//import { EventEmitter } from "events";

class App extends React.Component {

  state = {
    name: "",
    value: "",
    nameclass: "",
    room: ""
  
  }


 

  handleSubmit = (event) => {
    event.preventDefault();
    //console.log("I'm signingfhfhghg up baby", this.state);
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


  handleSubmitForm = (event) => {
    event.preventDefault();
    //console.log("I'm signingfhfhghg up baby", this.state);
    API.viewClinicals(this.state).then(function (response) {
      console.log(response);
    })

  }


  handleInputChange = (event) => {
    const {name, value} = event.target
    this.setState({
      // nameClass: event.target.value,
     // room: event.target.room,
      //nameclass: event.target.value,
      [name]: value,
    
    })

   
  }



 render() {

    return (
      <Router >
        <Switch>
          <div>
        {/* <Navbar /> */}
           <Nav/>
          
            {/* <Login />
            <Register/>
         */}
         <Route exact path="/navbar" component={Navbar} /> 
            <Route exact path="/" component={Jumbotron} /> 
            <Route exact path="/faculty" component={Faculty} />
            <Route exact path="/preceptor" component={Preceptor} />
            <Route exact path="/student" component={Student} />
            <Route exact path="/loginUser" component={Login} />
            <Route exact path="/registerUser" component={Register} />

 
            
            <Route exact path="/evaluate" render={(props) => <Evaluate value={this.state.value}  name={this.state.name}    handleChange={this.handleChange} handleSubmit={this.handleSubmit} />} />
     
            <Route exact path="/view" render={(props) => <View value={this.state.value}  name={this.state.name}    />} />


            <Route exact path="/inputClinicals" render={(props) => <InputClinicals nameclass={this.state.nameclass}  room={this.state.room}  handleInputChange={this.handleInputChange} handleSubmitForm={this.handleSubmitForm} />} />

            <Route exact path="/clinicals" render={(props) => <Clinicals nameclass={this.state.nameclass}  room={this.state.room}  />} /> 

            <Footer />
            <Wrapper/>

          </div>

        </Switch>
       
      </Router>
    )
  }

}

export default App;

