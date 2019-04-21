
import React from "react";
//import { isThisISOWeek } from "date-fns";
import API from "../utils/API";
import { Link } from "react-router-dom";

class View extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            viewData: ""
        };
    }

    componentDidMount() {
        // this.setState({
        //     res: "testing"
        // })
        API.getView().then((response) => {
            console.log(response);
            this.setState({
                viewData: response.data
            })
        })
    }

    render() {
        return (

            <div>
                <Link
                    to="/">
                    Home
                </Link>

                <h3 className="text-center">Evaluation Results</h3>

                {this.state.viewData ? (
                    this.state.viewData.map(view => (
                        <React.Fragment>
                            <div className="container">


                                <ul className="list-group">
                                    <li className="list-group-item">

                                        <strong>Preceptor Name:</strong>{view.name} <br></br>
                                        <strong>Class Name:</strong>{view.nameclass} <br></br>
                                        <strong>Question Answer:</strong>{view.value} <br></br>

                                    </li>
                                </ul>

                            </div>


                        </React.Fragment>
                    )
                    )
                ) : null}
                {/*
                <h3>In VIEW</h3>
                {this.props.name}
                <br />
                {this.props.value}  */}

            </div>
        );
    }
}

export default View;