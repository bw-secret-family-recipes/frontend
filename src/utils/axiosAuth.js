import axios from "axios";

const axiosAuth = () => {

    const token = localStorage.getItem('token')

    return axios.create({
        baseURL: "https://secret-family-recipes-backend.herokuapp.com/api",
        headers: {
            authorization: token
        }
    })
}

export default axiosAuth;