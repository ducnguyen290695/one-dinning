import { routePath } from "./../router/paths";
import axios from "axios";

const instance = axios.create({});

instance.interceptors.response.use(
  (response) => response,
  async (error) => {
    if ([401, 403]?.includes(error?.response?.status)) {
      window.location.replace(routePath.Login);
    }

    return Promise.reject(error.response);
  }
);

export default instance;
