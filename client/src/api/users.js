// Here we utilize the axios library to perform GET/POST request
import axios from "axios";

const API = {
    login:function(newUser){
        return axios.post("/login", newUser)

    },


    register:function(newuser){
        //  console.log(newuser)
        console.log(newuser);
          return axios.post("/register", newuser)
      },
  

    view:function(newuser){
      //  console.log(newuser)
      console.log(newuser);
        return axios.post("/api/view", newuser)
    },


    getView:function(viewData){
        return axios.get("/api/view", viewData);
    },

    viewClinicals:function(newClinical){
        return axios.post("/viewClinicals", newClinical)
    }

}

export default API







