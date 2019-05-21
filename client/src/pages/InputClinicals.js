
import React, { Component } from "react";
import { MDBContainer, MDBRow, MDBCol, MDBBtn } from 'mdbreact';

//import API from "../api/Users";
//import "./Form.css";

class InputClinicals extends Component {


    render() {
        return (

            <div>

                <MDBContainer>
                    <MDBRow>
                        <MDBCol md="6">
                            <form>
                                <p className="h4 text-center mb-4">Input Clinicals Schedules</p>
                                <label htmlFor="defaultFormRegisterNameEx" className="grey-text">
                                    Class name
                                 </label>
                                <input
                                    value={this.props.className}
                                    onChange={this.props.handleInputChange}
                                    name="nameclass"
                                    id="defaultFormRegisterNameEx"
                                    className="form-control"
                                />
                                <br />
                                <label htmlFor="defaultFormRegisterEmailEx" className="grey-text">
                                    Room Number
                                 </label>
                                <input
                                    value={this.props.room}
                                    onChange={this.props.handleInputChange}
                                    name="room"
                                    id="defaultFormRegisterEmailEx"
                                    className="form-control"
                                />
                                <br />
                                
                                <label
                                    htmlFor="defaultFormRegisterConfirmEx"
                                    className="grey-text"
                                >
                                    Class Time 
                                  </label>
                                <input
                                    value ={this.props.classTime}
                                    onChange ={this.props.handleInputChange}
                                    name ="classTime"
                                    id="defaultFormRegisterConfirmEx"
                                    className="form-control"
                                />
                                <br />
                                <label
                                    htmlFor="defaultFormRegisterPasswordEx"
                                    className="grey-text"
                                >
                                    Instructor 
                          </label>
                                <input
                                    value = {this.props.instructor}
                                    onChange ={this.props.handleInputChange}
                                    name ="instructor"
                                    id="defaultFormRegisterPasswordEx"
                                    className="form-control"
                                /> 
                                <div className="text-center mt-4">
                                    <MDBBtn color="unique" type="submit" value="submit" onClick={this.props.handleSubmitForm}>
                                        Submit
                  </MDBBtn>
                                </div>
                            </form>
                        </MDBCol>
                    </MDBRow>
                </MDBContainer>

            </div>


        );

    }
}


export default InputClinicals;
