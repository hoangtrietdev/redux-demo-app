import axios from "axios";
import queryString from "query-string";

const axiosClient = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  headers: {
    "content-type": "application/json",
  },
  paramsSerializer: (params) => queryString.stringify(params),
});

axiosClient.interceptors.request.use(async (config) => {
  // Handle token here
  return config;
});

axiosClient.interceptors.response.use(
  (respone) => {
    if (respone && respone.data) {
      return respone.data;
    }
    return respone;
  },
  (error) => {
    throw error;
  }
);

export default axiosClient;
