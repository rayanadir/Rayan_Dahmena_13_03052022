import axios from "axios";

const BASE_URL="http://localhost:3001/api/v1";

const login =  (email, password) =>  (dispatch) => {
    axios.post(BASE_URL + "/user/login", {email, password})
    .then((response)=>{
        if(response.data.accessToken){
            sessionStorage.setItem("user", JSON.stringify(response.data));
        }
        console.log("Authentification réussie : ", response.data);
        dispatch({
            type:"LOGIN_SUCCESS",
            payload:response.data
        })
        return response.data;
    })
    .catch((err)=>{
        console.log("Échec de l'authentification : ", err.response.data);
        dispatch({
            type:"LOGIN_SUCCESS",
            payload:err.response.data
        })
    })
}

const logout = () => {
    sessionStorage.removeItem("user");
}

const auth_service={ login, logout }

export default auth_service