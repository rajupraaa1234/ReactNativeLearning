import axios from 'axios';

const axiosAuth = () => {
    const BaseURL = "https://reqres.in/api/";
    const instance = axios.create({
        baseURL : BaseURL,
    });
    //instance.defaults.headers.common['config_key'] = Config.CONFIG_KEY;
    instance.defaults.headers.common['Content-Type'] = 'application/json';

    instance.interceptors.request.use(
        request => {
            console.log(`baseUrl --------> ${BaseURL}`);
            return request;
        },
        error =>{
            console.log(`request error -----> ${error}`);
            return Promise.reject(error);
        },
    );

    instance.interceptors.response.use(
       async response => {
           //console.log(`response --------> ${JSON.stringify(response)}`);
           return response;
       },
       async error => {
            console.log(`response error --------> ${error}`);
            return error;
       },
    );
    return instance;
}

export default axiosAuth;