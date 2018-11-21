// Include our React
import React from "react";

class Evaluate extends React.Component {

  render() {
    return (

      
      <form  className ="text-center" onSubmit={this.props.handleSubmit}>
          <h2>Evaluating Preceptors</h2>
        <label for= "Preceptor Name" className ="control-label"> Preceptor name: </label>
          <input  
            value={this.props.name} onChange={this.props.handleChange}
            name="name"
            type="text"
            placeholder="name"
          /> 
         
          <br/>
          <label for ="eval" className ="control-label"> How was your preceptor performance ? </label>
           <br/>
          <select value={this.props.value} onChange={this.props.handleChange}>
            <option value="">Choose an option</option>
            <option value="1">1(Worst)</option>
            <option value="1">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5(Excellent)</option>
          </select>


         <br/>
        <br /> 
        <input type="submit" value="Submit" className ="btn btn-primary" onClick={this.props.handleSubmit} />
      </form>
   
    );
  }
}

export default Evaluate;
