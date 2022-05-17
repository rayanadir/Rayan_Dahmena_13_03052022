import axios from "axios";
import { loginFail, loginSuccess, logoutSuccess } from "../slices/loginSlice";
import { userFail, userLogout, userSuccess, userUpdateFail, userUpdateSuccess } from "../slices/userSlice";

const BASE_URL = "http://localhost:3001/api/v1";

const login = (email, password, rememberMe) => (dispatch) => {
    console.log("email login : " , email);
    console.log("password login : ", password);
    axios.post(BASE_URL + "/user/login", { email, password })
        .then((response) => {
            if (rememberMe) {
                localStorage.setItem("token", JSON.stringify(response.data.body.token));
                localStorage.setItem("email", email);
                localStorage.setItem("password", password);
                localStorage.setItem("remember", true);
            }else{
                sessionStorage.setItem("token", JSON.stringify(response.data.body.token));
                localStorage.removeItem("email");
                localStorage.removeItem("password");
                localStorage.removeItem("remember");
            }
            dispatch(loginSuccess(response.data))
            return response.data;
        })
        .catch((err) => {
            dispatch(loginFail(err.response.data.message))
        })
}

const userProfile = (token) => (dispatch) => {
    axios.post(BASE_URL + "/user/profile", { token }, { headers: { "Authorization": `Bearer ${token}` } })
        .then((response) => {
            dispatch(userSuccess(response.data))
        })
        .catch((err) => {
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
    sessionStorage.clear();
    localStorage.removeItem("token");
    dispatch(userLogout());
    dispatch(logoutSuccess());
}

const auth_service = { login, logout, userProfile, updateProfile }

export default auth_service