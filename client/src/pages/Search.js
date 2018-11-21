
import React, { Component } from "react";


class Search extends Component {
  state = {
    
    firstName: "",
    lastName:""
    
  };

  // When the component mounts, get a list of all available base breeds and update this.state.breeds
 
  handleInputChange = event => {
      if(event.target.id ==="firstName")
    this.setState({ firstName: event.target.value });


    if(event.target.id ==="LastName")
    this.setState({ LastName: event.target.value });
  };

  render() {
    return (
      <div>
     
      </div>
    );
  }
}

export default Search;
















