


import React, { Component } from "react";
import API from "../api/Users";
//import "./Form.css";

class InputClinicals extends Component {


  render(){
    return(

      <form onSubmit={this.props.handleSubmit}>
      <label>

       <input 
        value={this.props.class} onChange={this.props.handleChange}
        class="name"
        type="text"
      
      />

         </label>
          <input type="submit" value="Submit" />
        </form>
    );
    
    }
  }

 


export default InputClinicals;








