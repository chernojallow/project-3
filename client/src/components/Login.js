import React, {Component} from 'react';
import  API from '../api/Users.js';

export default class Login extends Component {

state = {
    username:"",
    password:""
}
handleSignUp = (event) => {
    event.preventDefault();
    console.log("I'm signing up baby", this.state);
    API.login(this.state).then(function(response){
        console.log(response);
    })
}
captureInput = (event) => {

    if (event.target.id === 'username') {
    this.setState({
         username:event.target.value
    })
}

if (event.target.id === 'password') {
    this.setState({
         password:event.target.value
    })
}


}
render(){
    return(
        <form>
            <input onChange={this.captureInput} name="username"/>
            <input onChange={this.captureInput} name="password"/>
            <button onClick={this.handleSignUp}>Submit</button>
        </form>
    )
}
}