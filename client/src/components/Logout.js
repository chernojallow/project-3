
// Include React

import React, { Component } from "react";
import axios from "axios";

class Logout extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      isloggedin: true
    };

  }

  //---- Component Rendering------//


  render() {
    return this.state.isloggedin ? (
      <div>
        <button
          onClick={() =>
            axios
              .get("api/logout")
              .then(res => (window.location = "/"))
          }
        >
          Logout
        </button>
      </div>
    ) : (
      <h3>Please login</h3>
    );
  }
}
export default Logout;












