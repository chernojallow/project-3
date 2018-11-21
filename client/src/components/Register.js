

// Include React
import React, {Component} from 'react';
// var API = require("../api/users");
import API from "../api/users";

    export default class Register extends Component {

    state = {
        firstname: "",
        password: "",
        lastname:"",
        username:""
    }

    handleChange = (event) => {
        if (event.target.id === 'firstname') {
            this.setState({ firstname: event.target.value });
        }

        if (event.target.id === 'password') {
            this.setState({ password: event.target.value });

        }

        if (event.target.id === 'lastname') {
            this.setState({ lastname: event.target.value });
        }

        if (event.target.id === 'username') {
            this.setState({ username: event.target.value });
        }


    }
    handleSubmit = (event) => {
        console.log("Submit firing");
        event.preventDefault();
        API.register({
            firstname: this.state.firstname,
            password: this.state.password,
            lastname: this.state.lastname,
            username: this.state.username,

        }).then( function(response) {
            // window.location.pathname ="/"
           // console.log("RESULTS", response);

        })
        // event.preventDefault();
        window.location.pathname ="/loginUser"
    }


    // Here we render the component
    render() {

        return (




<div>
<section className="clearfix pageTitleSection">
  <div className="container">
    <div className="row">
      <div className="col-xs-12">
        <div className="pageTitle">
          <h2>Sign Up Page</h2>
        </div>
      </div>
    </div>
  </div>
</section>


<section className="clearfix signUpSection">
  <div className="container">
    <div className="row">
      <div className="col-sm-8 col-xs-12">
        <div className="signUpFormArea">
          <div className="priceTableTitle">
            <h2>Account Registration</h2>
          </div>
          <div className="signUpForm">
            <form onSubmit={this.handleSubmit}>
              <div className="formSection">
                <h3>Contact Information</h3>
                <div className="row">
                  <div className="form-group col-sm-6 col-xs-12">
                    <label for="firstName" className="control-label">First Name*</label>
                    <input
                      type="text"
                      value={this.state.firstname}
                      onChange={this.handleChange}
                      className="form-control"
                      id="firstname"
                      required
                    />
                  </div>
                  <div className="form-group col-sm-6 col-xs-12">
                    <label for="lastName" className="control-label">Last Name*</label>
                    <input
                      type="text"
                      value={this.state.lastname}
                      onChange={this.handleChange}
                      className="form-control"
                      id="lastname"
                      required
                    />
                  </div>
                </div>
              </div>
              <div className="formSection">
                <h3>Account Information</h3>
                <div className="row">
                  <div className="form-group col-xs-12">
                    <label for="usernames" className="control-label">Username*</label>
                    <input
                      type="text"
                      value={this.state.username}
                      onChange={this.handleChange}
                      className="form-control"
                      id="username"
                      required
                    />
                  </div>
                  <div className="form-group col-sm-6 col-xs-12">
                    <label for="passwordFirst" className="control-label">Password*</label>
                    <input
                      type="password"
                      value={this.state.password}
                      onChange={this.handleChange}
                      className="form-control"
                      id="password"
                      required
                    />
                  </div>
                </div>
              </div>
                <div className="row">
                  <div className="form-group col-xs-12 mb0">
                    <button type="submit" className="btn btn-primary">Create Account</button>
                  </div>
                </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
</div>
    );
  }
};






//             <div>

//  <section className="clearfix pageTitleSection">
//   <div className="container">
//     <div className="row">
//       <div className="col-xs-12">
//         <div className="pageTitle">
//           <h2>Sign Up Page</h2>
//         </div>
//       </div>
//     </div>
//   </div>
// </section>



// <section className="clearfix signUpSection">
//   <div className="container">
//     <div className="row">
//       <div className="col-sm-8 col-xs-12">
//         <div className="signUpFormArea">
//           <div className="priceTableTitle">
//             <h2>Account Registration</h2>
//           </div>
//           <div className="signUpForm">


//                 <form onSubmit={this.handleSubmit}>
//                     <div className="form-group col-sm-6 col-xs-12">
//                         <label for="firstName" className="control-label">First Name*</label>
//                         <input
//                             type="text"
//                             value={this.state.firstname}
//                             onChange={this.handleChange}
//                             className="form-control"
//                             id="firstname"
//                             required
//                         />
//                     </div>
//                     <div className="form-group col-sm-6 col-xs-12">
//                         <label for="lastName" className="control-label">Last Name*</label>
//                         <input
//                             type="text"
//                             value={this.state.lastname}
//                             onChange={this.handleChange}
//                             className="form-control"
//                             id="lastname"
//                             required
//                         />
//                     </div>

//                     <div className="formSection">
//                         <h3>Account Information</h3>
//                         <div className="row">
//                         <div className="form-group col-xs-12">
//                                 <label for="usernames" className="control-label">Username*</label>
//                                 <input
//                                     type="text"
//                                     value={this.state.username}
//                                     onChange={this.handleChange}
//                                     className="form-control"
//                                     id="username"
//                                     required
//                                 />
//                             </div>
//                             <div className="form-group col-sm-6 col-xs-12">
//                                 <label for="passwordFirst" className="control-label">Password*</label>
//                                 <input
//                                     type="password"
//                                     value={this.state.password}
//                                     onChange={this.handleChange}
//                                     className="form-control"
//                                     id="password"
//                                     required
//                                 />
//                             </div>
//                         </div>
//                     </div>
//                     <div className="row">
//                         <div className="form-group col-xs-12 mb0">
//                             <button type="submit" className="btn btn-primary">Create Account</button>
//                         </div>
//                     </div>
//                 </form>
//             </div>
//             </div>
//       </div>
//     </div>
//   </div>
// </section>
// </div>
//         );
//     }
// });

