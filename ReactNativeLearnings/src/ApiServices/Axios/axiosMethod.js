
import axiosAuth from './axiosAuth';

export const AxiosGet = async (endPoint) => {
     let axios = axiosAuth(endPoint);
     const response = await axios.get(endPoint);
     return response;
}

export const AxiosPost = async (endPoint,req) => {
    let axios = axiosAuth(endPoint);
    const response = await axios.post(endPoint,req);
    return response;
}

export const AxiosDelete = async (endPoint) => {
    let axios = axiosAuth(endPoint);
    const response = await axios.delete(endPoint);
    return response;
}