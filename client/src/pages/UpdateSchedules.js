import React, { Component } from "react";
import { MDBContainer, MDBRow, MDBCol, MDBBtn } from 'mdbreact'
import API from "../utils/API";

//import API from "../api/Users";
//import "./Form.css";

class UpdateSchedule extends Component {

    constructor(props) {
        super(props);

    }
//         this.handleInputChange = this.handleInputChange.bind(this);
//         this.onSubmit = this.onSubmit.bind(this);

//     this.state = {
//         nameclass: '',
//         room: '',
//         classTime: '',
//         instructor: false
//     }
// }

//     componentDidMount() {
//         API.getClinicals(this.props.match.params.id)
//             .then(response => {
//                 this.setState({
//                     nameclass: response.data.nameclass,
//                     room: response.data.room,
//                     classTime: response.classTime,
//                     instructor: response.instructor
//                 })         
//             })
//             .catch(function(error) {
//                 console.log(error)
//             })
//     }

//     handleInputChange = (event) => {
//         const { name, value } = event.target
//         this.setState({
//           [name]: value,
    
//         })   
//       }

//     onSubmit(e) {
//         e.preventDefault();
//         const obj = {
//             nameclass: this.state.nameclass,
//             room: this.state.room,
//             classTime: this.state.classTime,
//             instructor: this.state.instructor
//         };
//         API.updateSchedule(this.props.match.params.id, obj)
//             .then(res => console.log(res.data));

//         window.location.pathname = "/clinicals"
//     }





    render() {
        return (

            <div>

                <MDBContainer>
                    <MDBRow>
                        <MDBCol md="6">
                            <form onSubmit ={this.props.onSubmit}>
                                <p className="h4 text-center mb-4">Update Clinicals Schedules</p>
                                <label htmlFor="defaultFormRegisterNameEx" className="grey-text">
                                    Class name
                                 </label>
                                <input
                                    value={this.props.nameclass}
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
                                    <MDBBtn color="unique" type="submit" value="submit" onClick={this.props.handleSubmitForm }>
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


export default UpdateSchedule;
