//Include React


import React, {Component} from 'react';
import API from "../api/users";

export default class Profile extends Component {

    state = {
        userData:"",
          };
    


  // Here we render the component
  componentDidMount = () => {

   //  var username = this.props.params.username;
    // console.log('+'+username+'+')
   
       var username = document.cookie.split('=')[1]
          console.log("cookie " + username)
    if (username !== undefined && username !== ""){
      console.log("line 17")
      API.profile(
      {
        username: username,
   
      }
      ).then(function (response) {
          console.log("RESPONSE " + JSON.stringify(response.data));
        
          console.log("name " + response.data[0].username)
          console.log("RESPONSE LENGTH " + response.data.length);
          this.setState({userData: response.data[0]}) 

      }.bind(this));
    }

  }

  render() {


    return (

<section >
  <div className="container">
    <div className="row">
      <div className="col-md-4 col-sm-5 col-xs-12">
        <div className="dashboardBoxBg mb30">
          <div className="profileImage">
            {/* <img src="img/dashboard/user-2.jpg" alt="Image User" className="img-circle"></img> */}
            <div className="file-upload profileImageUpload">
              <div className="upload-area">
                <input type="file" name="img[]" className="file"></input>
                <button className="browse" type="button">Upload a Picture <i className="icon-listy icon-upload"></i></button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-md-8 col-sm-7 col-xs-12">
        <form>
          <div className="dashboardBoxBg">
            <div className="profileIntro">
              <h2>Your Profile: {this.props.username}</h2>
{/*<!--               <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form Ipsum available.</p> -->*/}
            </div>
          </div>
         
        
              <h3>About You</h3>
              <div className="row"> 
                <div className="form-group col-sm-6 col-xs-12">
                  <label htmlFor="firstNameProfile">First Name</label>
                  <p className="form-control" id="firstNameProfile"> {this.state.userData.firstname} </p>
                </div>
                <div className="form-group col-sm-6 col-xs-12">
                  <label htmlFor="lastNameProfile">Last Name</label>
                  <p className="form-control" id="lastNameProfile">{this.state.userData.lastname}</p> 
                </div>
               
                <div className="form-group col-xs-12">
                  <label htmlFor="aboutYou">About You</label>
                  <textarea className="form-control" rows="5" id="aboutYou" placeholder="About You"></textarea>
                </div>
              </div>
       
          
          <div className="btn-area mt30">
            <button className="btn btn-primary" type="button">Save Change</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</section>

    );
    }
};

// Export the component back for use in other files
//module.exports = Profile;



