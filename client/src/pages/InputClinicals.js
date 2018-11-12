

import React, { Component } from "react";
//import API from "../api/Users";
//import "./Form.css";

class InputClinicals extends Component {


    render() {
        return (

            <form onSubmit={this.props.handleSubmit}>
                <label>

                    <input
                        value={this.props.nameClass}
                        onChange={this.props.handleInputChange}
                        class="name"
                        type="text"
                      />
  
            
                </label>
                <input type="submit" value="Submit" onClick={this.props.handleSubmit} />
            </form>
        );

    }
}


export default InputClinicals;








