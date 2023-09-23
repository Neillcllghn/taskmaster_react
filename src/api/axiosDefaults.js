import axios from "axios";

axios.defaults.baseURL = 'https://taskmaster-django-rest-5e7a6a0f075a.herokuapp.com/';
axios.defaults.headers.post['Content-Type'] = 'multipart/form-data';
axios.defaults.withCredentials = true;

export const axiosReq = axios.create();
export const axiosRes = axios.create();
