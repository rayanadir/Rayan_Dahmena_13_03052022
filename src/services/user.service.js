import axios from "axios";

const BASE_URL = "http://localhost:3001/api/v1";

const getUserProfile = () => {
    return axios.get(BASE_URL + "/user/profile")
}

export default getUserProfile