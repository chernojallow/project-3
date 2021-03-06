
// Here we utilize the axios library to perform GET/POST request
import axios from "axios";

const API = {
    login: function (newUser) {
        console.log(newUser)
        return axios.post("/loginUser", newUser)
    },

    register: function (newusers) {
        //console.log(newuser);
        return axios.post("/registerUser", newusers)
    },

    view: function (newuser) {
        //  console.log(newuser)
        console.log(newuser);
        return axios.post("/api/view", newuser)
    },

    getView: function (viewData) {
        return axios.get("/api/view", viewData);
    },

    getClinicals: function (viewData) {
        return axios.get("api/clinicals", viewData)
    },

    viewClinicals: function (viewClinical) {
        return axios.post("api/clinicals", viewClinical)
    },

    deleteClinicals: function (id) {
        return axios.delete("api/clinicals/:id", id);
    },

    searchStudent: function (id) {
        return axios.post("api/searchStudent/:id", id);

    },

    updateSchedule: function (id) {
        return axios.post("api/update/:id", id);
    }

}
export default API

