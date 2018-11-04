import axios from "axios";

const API = {
    login:function(newUser){
        return axios.post("/login", newUser)
    },

    view:function(newuser){
        console.log(newuser)
        return axios.post("/view", newuser)
    }

}

export default API







