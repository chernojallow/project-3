
import React from "react";

class Evaluate extends React.Component {

   
    // constructor(props) {
    //   super(props);
    //   this.state = {
    //     value: '',
    //     viewclinical: []
    
    // };
  
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


    //   API.view(this.state).then(function(response){
    //     console.log(response);
        
    //   })

    // }




    render() {
      return (
        <form onSubmit={this.props.handleSubmit}>
          <label>

           <input 
            value={this.props.name} onChange={this.props.handleChange}
            name="name"
            type="text"
            placeholder="name"
          />

            How is your preceptor performance this week:
            <select value={this.props.value} onChange={this.props.handleChange}>
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

