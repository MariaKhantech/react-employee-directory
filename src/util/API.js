import axios from "axios";

export default{ 
    getEmployees:function(){    

        return axios.get("https://randomuser.me/api/?results=15&nat=us");
    },

    getName:function(){
        return console.log("");
    }
};