
import React, { Component } from "react";

//import API from "../api/Users";
//import "./Form.css";

class InputClinicals extends Component {


    render() {
        return (


            <div>
          
            <form className="text-center" onSubmit={this.props.handleSubmitForm}>
                <h2>Input Clinical Schedules</h2>
                <label htmlFor="nameclass" className="control-label">Class name*</label>
                <input
                    value={this.props.nameclass}
                    onChange={this.props.handleInputChange}
                    // class="text-center"
                    name="nameclass"
                    placeholder="class name"
                // type="text"
                />
                <br />

                <label htmlFor="room" className="control-label">Room number*</label>
                <input
                    value={this.props.room}
                    onChange={this.props.handleInputChange}
                    // class="text-center"
                    name="room"
                    placeholder="room number"
                //  type="text"

                />


                <br />
                <input type="submit" value="Submit" className="btn btn-primary" onClick={this.props.handleSubmitForm} />
            </form>
            </div>
        );

    }
}


export default InputClinicals;
