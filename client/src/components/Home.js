
import React, { Component } from "react";
import Login from "./Login";
import Register from "./Register";
class Home extends Component {
  render() {
    return (
      <div>
        <Login />
        {/* <Register /> */}

        <p>Not a member yet? <a href="/Register" className="link">Sign up</a></p>
      </div>
    );
  }
}

export default Home;
