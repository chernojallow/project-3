
// import React, { Component } from "react";
// import { Input, Col } from "mdbreact";
// class Search extends Component {


  


//   render() {

//     return (
//       <Col md="6">
//         <Input hint="Search" type="text" containerClass="mt-0" />
//       </Col>
//     );

    
//   }
// }

// export default Search;





import React, {Component} from "react";
import { Col, FormInline, Button } from "mdbreact";
// import "./style.css";

class Search extends Component {
  render() {
    return (
      <Col md="12">
        <FormInline className="md-form mr-auto mb-4">
        
          <input
            className="form-control mr-sm-2"
            type="text"
            placeholder="Search"
            aria-label="Search"
          />
          <Button
            outline
            color="warning"
            rounded
            size="sm"
            type="submit"
            className="mr-auto"
          >
            Search
          </Button>
        </FormInline>
      </Col>
    );
  }
}

export default Search;















