import defaultAxios from "axios";

const axios = defaultAxios.create({
  baseURL: "http://192.168.8.100:4550",
  withCredentials: true,
});

export default axios;
