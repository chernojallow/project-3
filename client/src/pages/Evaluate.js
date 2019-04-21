// Include our React
import React from "react";
import { MDBContainer, MDBRow, MDBCol, MDBBtn } from 'mdbreact';
class Evaluate extends React.Component {


  render() {
    return (

  //              <div>
               

  //     <form  className ="text-center" onSubmit={this.props.handleSubmit}>
  //         <h2>Evaluating Preceptors</h2>
  //       <label htmlFor= "Preceptor Name" className ="control-label"> Preceptor name: </label>
  //         <input  
  //           value={this.props.name} onChange={this.props.handleChange}
  //           name="name"
  //           type="text"
  //           placeholder="name"
  //         /> 
         
  //         <br/>
  //         <label htmlFor ="eval" className ="control-label"> How was your preceptor performance ? </label>
  //          <br/>
  //         <select value={this.props.value} onChange={this.props.handleChange}>
  //           <option value="">Choose an option</option>
  //           <option value="1">1(Worst)</option>
  //           <option value="1">2</option>
  //           <option value="3">3</option>
  //           <option value="4">4</option>
  //           <option value="5">5(Excellent)</option>
  //         </select>


  //        <br/>
  //       <br /> 
  //       <input type="submit" value="Submit" className ="btn btn-primary" onClick={this.props.handleSubmit}  />
        
  //     </form>
   
   
  //  </div>



  <div>

<MDBContainer>
<MDBRow>
    <MDBCol md="6">
        <form>
            <p className="h4 text-center mb-4">Input Clinicals Schedules</p>
            <label htmlFor="defaultFormRegisterNameEx" className="grey-text">
                Class name
             </label>
            <input
                value={this.props.className}
                onChange={this.props.handleChange}
                name="nameclass"
                id="defaultFormRegisterNameEx"
                className="form-control"
            />
            <br />
            <label htmlFor="defaultFormRegisterEmailEx" className="grey-text">
                Precepor Name
             </label>
            <input
                value={this.props.name}
                onChange={this.props.handleChange}
                name="name"
                id="defaultFormRegisterEmailEx"
                className="form-control"
            />
            <br />

            <label 
            htmlFor ="eval" 
            className ="control-label"> How was your preceptor performance ? 
            
            </label>

           <br/>
          <select value={this.props.value} onChange={this.props.handleChange}>
            <option value="">Choose an option</option>
            <option value="1">1(Worst)</option>
            <option value="1">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5(Excellent)</option>
          </select>
            
            <div className="text-center mt-4">
                <MDBBtn color="unique" type="submit" value="submit" onClick={this.props.handleSubmit}>
                    Submit
</MDBBtn>
            </div>
        </form>
    </MDBCol>
</MDBRow>
</MDBContainer>



</div>




    );
    
  }

}

export default Evaluate;
