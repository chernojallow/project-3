import React from "react";
import API from "../utils/API";
import { Link } from "react-router-dom";
import DeleteBtn from "../components/DeleteBtn";
import { doesNotReject } from "assert";
import { Button } from "@material-ui/core";
const mongoose = require("mongoose");


class Clinicals extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            viewData: ""
        };
    }

    componentDidMount() {
            API.getClinicals().then((response) => {
                console.log(response);
                this.setState({
                    viewData: response.data
                })
            })
        }

      delete = id => {
             API.deleteClinicals(id)
                .then(res => console.log("Deleted"))
                .catch(err =>console.log("Error checking",err));
      }

    render() {
        return (
                    
            <div>
                <Link
                    to="/">
                    Home
                </Link>

                <h3 className="text-center">Clinicals Schedule</h3>
                {this.state.viewData ? (
                    this.state.viewData.map(view => (
                        <React.Fragment>
                            <div className="container">
                                <ul className="list-group">
                                    <li className="list-group-item">

                                        <strong>Class Name:</strong>{view.nameclass}<br></br>
                                        <strong>Room Number:</strong> {view.room} <br></br>
                                        <strong>Class Time:</strong> {view.classTime}<br></br>
                                        <strong>Instructor:</strong> {view.instructor} <br></br>
                                        <DeleteBtn onClick={() => this.delete(view._id)} />
                                      
                                    </li>
                                    <br></br>
                                </ul>

                            </div>
                           
                        </React.Fragment>
                    )
                    )
                ) : null}
            </div>
        );
    }
}

export default Clinicals;