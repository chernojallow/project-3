
// Include React 

import React, { Component } from "react";
import axios from "axios";

axios.defaults.withCredentials = true;


//----Login Users-----//
class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      password: "",
      email: "",
      error: null,
      valerrors: null
    };
    this.changeHandler = this.changeHandler.bind(this);
    this.submitHandler = this.submitHandler.bind(this);
  }

  changeHandler(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }
  submitHandler(e) {
    e.preventDefault();
    axios
     
      .post("api/login", this.state)
      .then(res => {
        if (res.data.error) {
          return this.setState({ error: res.data.message });
        }
        if (res.data.errors) {
          return this.setState({ valerrors: res.data.errors });
        }
        // return (window.location = "/mainpage");
        return (window.location = "/navbar");
        //  return (window.location = "/logout");

      });
  }

  //------ Component Rendering----------//
  render() {
    return (

      <div className="container">
        <div class="row">
          <div className="center-block col-md-5 col-sm-6 col-xs-12">
            <div className="panel panel-default loginPanel">
              <div className="panel-body">
                <div className="panel-heading text-center">Account login</div>


                {this.state.error && <p>{this.state.error}</p>}
                <form onSubmit={this.submitHandler}>
                  {this.state.valerrors &&
                    this.state.valerrors.email && (
                      <p>{this.state.valerrors.email.msg}</p>
                    )}


                  <input
                    onChange={this.changeHandler}
                    type="email"
                    placeholder="Enter your email"
                    name="email"
                    id="email"
                  />{" "}
                  <br />

                  {this.state.valerrors &&
                    this.state.valerrors.password && (
                      <p>{this.state.valerrors.password.msg}</p>
                    )}

                  <input
                    onChange={this.changeHandler}
                    type="password"
                    placeholder="Enter your password"
                    name="password"
                    id="password"
                  />{" "}
                  <br />

                  <button type="submit" class="btn btn-success">Login</button>

                </form>
                <hr></hr>
                <p>Not a member yet? <a href="/Register" className="link">Sign up</a></p>

              </div>
            </div>
          </div>
        </div>
      </div>


    );
  }
}

export default Login;
