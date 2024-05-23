import { axios } from "../../helper/axios";
import { LOGIN_API } from "./authConstants";


export const loginApi = async (payload) => {
    return axios.post(LOGIN_API,payload);
}