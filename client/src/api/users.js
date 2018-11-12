// Here we utilize the axios library to perform GET/POST request
import axios from "axios";

const API = {
    login:function(newUser){
        return axios.post("/login", newUser)

    },

    register:function(newuser){
        //console.log(newuser);
          return axios.post("users/register", newuser)
      },
  
    view:function(newuser){
      //  console.log(newuser)
      console.log(newuser);
        return axios.post("/api/view", newuser)
    },

    getView:function(viewData){
        return axios.get("/api/view", viewData);
    },

    getClinicals:function(viewData){
        return axios.post("api/clinicals", viewData)
    },

     viewClinicals:function(viewClinical){
        return axios.post("api/clinicals", viewClinical)
    }


}
export default API









