import { ACCESS_TOKEN } from "constants/common";
import { io } from "socket.io-client";
import Cookies from "js-cookie";

const baseURL = process.env.REACT_APP_API_URL;

export const socket = io(baseURL as string, {
  extraHeaders: {
    authorization: Cookies.get(ACCESS_TOKEN) as string,
  },
});
