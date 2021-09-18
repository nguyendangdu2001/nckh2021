import axios from "axios";
export const baseURL = "http://localhost:8000";
axios.defaults.baseURL = baseURL;
export const configAxios = (store) => {
  axios.interceptors.request.use(
    (config) => {
      if (!config.headers.Authorization) {
        const token = store.getState().userStatus?.token;

        if (token) {
          config.headers.Authorization = `Bearer ${token}`;
        }
      }

      return config;
    },
    (error) => Promise.reject(error)
  );
};
