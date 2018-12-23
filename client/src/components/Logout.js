
import React, {Component} from 'react';

export default class Logout extends Component{
   

        logout =() => {
            console.log("cherno is struggling like hell");
            sessionStorage.setItem("userData");
            sessionStorage.clear();
            window.location.pathname ="/"
            
          }
       


    render(){
        return(
            <div>
                 {this.logout()}

                 <div>
   <a href="#" onClick={this.logout()}>LOGOUT</a>
</div>
                Now loggedOut;
            </div>
        )
    }
}