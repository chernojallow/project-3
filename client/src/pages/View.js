
import React from "react";


class View extends React.Component {

    // state = {
    //     viewclinical: [],
    //     cli: ""
    //   };

    // constructor(props) {
    //   super(props);
    //   this.state = {value: ''};

    //   this.handleChange = this.handleChange.bind(this);
    //   this.handleSubmit = this.handleSubmit.bind(this);
    // }

    // handleChange(event) {
    //   this.setState({value: event.target.value});
    // }

    // handleSubmit(event) {
    //  // alert('Your favorite flavor is: ' + this.state.value);
    //   event.preventDefault();

    //   console.log("I'm evaluating you",this.state);
    //   API.view(this.state.cli).then(function(response){
    //     console.log(response);

    //   })

    // }

    render() {
        return (
            <div>
                <h3>In VIEW</h3>
                {this.props.value}
                {this.props.name}

            </div>
        );
    }
}

export default View;

