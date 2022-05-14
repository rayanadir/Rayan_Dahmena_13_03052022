import axios from "axios";
import { loginFail, loginSuccess } from "../slices/loginSlice";
import { userFail, userLogout, userSuccess, userUpdateFail, userUpdateSuccess } from "../slices/userSlice";

const BASE_URL = "http://localhost:3001/api/v1";

const login = (email, password) => (dispatch) => {
    axios.post(BASE_URL + "/user/login", { email, password })
        .then((response) => {
            if (response.data.body.token) {
                sessionStorage.setItem("user", JSON.stringify(response.data));
            }
            console.log("Authentification réussie : ", response.data);
            dispatch(userProfile(response.data.body.token))
            dispatch(loginSuccess(response.data))
            return response.data;
        })
        .catch((err) => {
            console.log("Échec de l'authentification : ", err.response.data);
            dispatch(loginFail(err.response.data.message))
        })
}

const userProfile = (token) => (dispatch) => {
    axios.post(BASE_URL + "/user/profile", { token }, { headers: { "Authorization": `Bearer ${token}` } })
        .then((response) => {
            console.log("Informations utilisateurs : ", response.data);
            dispatch(userSuccess(response.data))
        })
        .catch((err) => {
            console.log("Échec de récupération des informations utilisateurs : ", err);
            dispatch(userFail(err.response))
        })
}

const updateProfile = (firstName, lastName, token) => (dispatch) => {
    axios.put(BASE_URL + "/user/profile",
        { firstName: firstName, lastName: lastName },
        { headers: { "Authorization": `Bearer ${token}` } 
    })
    .then((res)=>{
        dispatch(userUpdateSuccess(res.data))
    })
    .catch((err)=>{
        dispatch(userUpdateFail(err.response))
    })
}

const logout = () => (dispatch) => {
    dispatch(userLogout());
    dispatch(logout());
    sessionStorage.removeItem("user");
}

const auth_service = { login, logout, userProfile, updateProfile }

export default auth_service