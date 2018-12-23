
// Here we utilize the axios library to perform GET/POST request
import axios from "axios";

const API = {
    login:function(newUser){
        console.log(newUser)
        return axios.post("/loginUser", newUser)
    },

    logout:function(User){
        console.log(User)
        return axios.post("/logoutData", User)
    },

    register:function(newusers){
        //console.log(newuser);
          return axios.post("/registerUser", newusers)
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
        return axios.get("api/clinicals", viewData)
    },

     viewClinicals:function(viewClinical){
        return axios.post("api/clinicals", viewClinical)
    },


    profile:function(searchParams){
        return axios.get("/users/profile" + searchParams.username);
    },





 // Gets all books
 getBooks: function() {
    return axios.get("/api/books");
  },
  // Gets the book with the given id
  getBook: function(id) {
    return axios.get("/api/books/" + id);
  },




}
export default API









