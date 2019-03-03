import React from "react";
import API from "../utils/API";
import { Link } from "react-router-dom";




class Clinicals extends React.Component {



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
        API.getClinicals().then((response) => {
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

                 <div className="text-center">
                <h3>Clinicals Schedule</h3>
                {this.state.viewData ? (
                    this.state.viewData.map(view =>(
                        <React.Fragment>
                            <div><strong>Class Name:</strong>{view.nameclass}</div>
                            <div><strong>Room Number:</strong> {view.room} </div>
                        </React.Fragment>





                    )
                    )
                ) : null}

                {/* <h3>Clinicals Schedule</h3> */}
                {/* {this.props.nameclass}
            {this.props.room} */}



            </div>
            </div>
        );
    }


}

export default Clinicals;