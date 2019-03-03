// import axios from "axios";

// export default {
//   // Gets all books
//   getBooks: function() {
//     return axios.get("/api/books");
//   },
//   // Gets the book with the given id
//   getBook: function(id) {
//     return axios.get("/api/books/" + id);
//   },
//   // Deletes the book with the given id
//   deleteBook: function(id) {
//     return axios.delete("/api/books/" + id);
//   },
//   // Saves a book to the database
//   saveBook: function(bookData) {
//     return axios.post("/api/books", bookData);
//   }
// };





// Here we utilize the axios library to perform GET/POST request
import axios from "axios";

const API = {
    login:function(newUser){
        console.log(newUser)
        return axios.post("/loginUser", newUser)
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


}
export default API

