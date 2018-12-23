

// Include React

import React, {Component,hashHistory, Redirect} from 'react';
import API from "../api/users";



  export default class Login extends Component {

   
    state = {
        username:"",
        password:"",
        redirect: false
      
    }

  handleChange =(event) => {
   
    if(event.target.id === 'username'){
       this.setState({username: event.target.value});
    }

    if(event.target.id === 'password'){
       this.setState({password: event.target.value});
    }
  }


  handleLogin =(event) => {
    console.log("logging in")
    var username = this.state.username
    console.log(username + ' is the username inside login')
  
    API.login({ 
      username: username,
      password: this.state.password,
      //value: 55
    }).then(function(response, username, replace) {
      var user = JSON.parse(response.config.data).username
        console.log("RESULTS", response.data.authenticated);
        var isAuthenticated = response.data.authenticated;
        console.log('*'+user+'*')
        if(isAuthenticated){
          // sessionStorage.setItem('userData', JSON.stringify(response));
        
          // window.location.pathname ="/"
          window.location.pathname ="navbar"
          // document.cookie = "user="+user;
          // var x = document.cookie
          // console.log("cookie " + x)
        //    hashHistory.push('/profile/'+ user)
        } 
        else {
          // show error and stay on apge
          alert("failed to authenticate");
        }

    })
    event.preventDefault();
  }

  // Here we render the component
  render(){

   return (

<section className="clearfix loginSection homeBanner">
  <div className="container">
    <div className="row">
      <div className="center-block col-md-5 col-sm-6 col-xs-12">
        <div className="panel panel-default loginPanel">
          <div className="panel-heading text-center">Log in</div>
          <div className="panel-body">
            <form onSubmit = {this.handleLogin} className="loginForm">
              <div className="form-group">
                <label for="userName">User Name *</label>
                <input
                      type="text"
                      value={this.state.username}
                      onChange={this.handleChange}
                      className="form-control"
                      id="username"
                      required
                    ></input>
              </div>
              <div className="form-group">
                <label for="userPassword">Password *</label>
                <input
                      type="password"
                      value={this.state.password}
                      onChange={this.handleChange}
                      className="form-control"
                      id="password"
                      required
                    ></input>
                {/* <p className="help-block">Enter the password that accompanies your username.</p> */}
              </div>
              <div className="form-group">
                <button type="submit" className="btn btn-primary pull-left">Log In</button>
                {/* <a href="#" className="pull-right link">Fogot Password?</a> */}
              </div>
            </form>
          </div>
          <div className="panel-footer text-center">
            <p>Not a member yet? <a href="/registerUser" className="link">Sign up</a></p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
    );
  }
};




