
import React from "react";

class Evaluate extends React.Component {
    constructor(props) {
      super(props);
      this.state = {value: ''};
  
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleChange(event) {
      this.setState({value: event.target.value});
    }
  
    handleSubmit(event) {
      alert('Your favorite flavor is: ' + this.state.value);
      event.preventDefault();
    }
  
    render() {
      return (
        <form onSubmit={this.handleSubmit}>
          <label>
            How is your preceptor performance this week:
            <select value={this.state.value} onChange={this.handleChange}>
              <option value="">Choose an option</option>
              <option value="1">1(Worst)</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="4">4(Excellent)</option>
            </select>
          </label>
          <input type="submit" value="Submit" />
        </form>
      );
    }
  }

 export default Evaluate;

