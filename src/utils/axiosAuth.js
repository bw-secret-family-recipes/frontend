import axios from "axios";

export default axiosAuth = () => {

    const token = localStorage.getItem('token')

    return axios.create({
        //baseURL: "",
        headers: {
            authorization: token
        }
    })
}