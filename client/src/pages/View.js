
import React from "react";
//import { isThisISOWeek } from "date-fns";
import API from "../api/users";


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
            <div className = "text-center" >
                <h3>Results of Evaluation</h3>
                {this.state.viewData ? (
                    this.state.viewData.map(view => (
                        <React.Fragment>
                            <div>Question1:  {view.name}</div>
                            <div>Answer: {view.value}</div>
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













