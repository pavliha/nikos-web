import axios, { AxiosError, AxiosResponse } from 'axios';

const http = axios.create({
  baseURL: process.env.REACT_APP_BACKEND_URL,
  timeout: 20000
});

http.interceptors.response.use(
  (response: AxiosResponse) => response.data,
  (errors: AxiosError) => {
    if (errors?.response?.status === 404) throw errors;
    if (errors?.response?.data) throw errors.response.data;
    // eslint-disable-next-line @typescript-eslint/no-throw-literal
    if (errors?.response) throw errors.response;
    if (errors) throw errors;
  }
);

export default http;
