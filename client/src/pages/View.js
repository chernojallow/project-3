
import React from "react";
import { isThisISOWeek } from "date-fns";
import API from "../api/Users";


class View extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            viewData: ""
        };
    }


    //  List = (props) => (
    //     <ul className="list-group">
    //       {props.map(item => (
    //         <li className="list-group-item">
    //           {item.name} {item.value}
    //         </li>
    //       ))}
    //     </ul>
    //       );

    // handleInputChange = (event) => {
    //     this.setState(
    //         {name: event.target.value },
    //         {value: event.target.value}

    //         )
    //     }                        

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
                {this.state.viewData ? (
                    this.state.viewData.map(view => (
                        <React.Fragment>
                            <div>{view.name}</div>
                            <div>{view.value}</div>
                        </React.Fragment>
                    )
                    )
                ) : null}
                <h3>In VIEW</h3>
                {this.props.name}
                <br />
                {this.props.value}
            </div>
        );
    }
}

export default View;

