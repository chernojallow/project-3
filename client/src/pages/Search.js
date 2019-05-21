import React, { Component } from "react";
import API from "../utils/API";
// import Button from "../components/Button"

class Search extends Component {

    constructor(props) {
        super(props);
        this.state = {
            searchStudent: [],
            id: ""
        };
    }

    handleFormSubmit = event => {
        event.preventDefault();
        API.getClinicals().then((response) => {
            console.log(response);
            this.setState({
                searchStudent: response.data
            })
        })
    }

       searchStudent = (id, event) => {
           const {name, value} = event.target;
           API.searchStudent(id)
               .then(() =>this.setState({[name]: value}))
               .then(response => response.data)
               .catch(err => console.log(err));
       }

    render() {

        return (
            <div style={{ marginTop: 20 }}>

                <form>
                    <div className="form-group">
                        <div className="container">
                            <h3> Search For Student</h3>
                            <input
                                type="number"
                                name ="id"
                                className="form-control"
                                value ={this.state.id}
                                onChange ={this.searchStudent}

                            />

                            {this.state.searchStudent ? (
                                this.state.searchStudent.map(view => (
                                    <React.Fragment>
                                        <div className="container">
                                            <ul className="list-group">
                                                <li className="list-group-item">

                                                    <strong>Class Name:</strong>{view.nameclass}<br></br>
                                                    <strong>Room Number:</strong> {view.room} <br></br>
                                                    <strong>Class Time:</strong> {view.classTime}<br></br>
                                                    <strong>Instructor:</strong> {view.instructor} <br></br>

                                                </li>
                                                <br></br>
                                            </ul>
                                        </div>

                                    </React.Fragment>
                                )
                                )
                            ) : null}

                            <button onClick={this.handleFormSubmit} className="btn btn-primary btn-lg"> Search</button>
                        </div>
                    </div>

                </form>
            </div>
        );
    }

}
export default Search;