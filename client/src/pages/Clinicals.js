

import React from "react";
import API from "../api/Users";

class Clinicals extends React.Component {

  

    render() {
        return (
            <div>
                <h3>Viewing clinicals</h3>
                {this.props.class}
                

            </div>
        );
    }
}

export default Clinicals;
