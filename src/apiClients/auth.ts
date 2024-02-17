import apiPath from "constants/apiPaths";
import { ACCESS_TOKEN } from "constants/common";
import Cookies from "js-cookie";
import { LoginFormI } from "models/auth";
import apiRequest from "utils/api";
import { jwtDecode } from "jwt-decode";
import { timestampToDate } from "utils/date";
import { routePath } from "router/paths";

export const login = async (payload: LoginFormI) => {
  const res = await apiRequest.post({
    url: apiPath.login,
    data: payload,
  });

  const accessToken = res?.data?.accessToken;
  const decoded = jwtDecode(accessToken);
  const expiredDate = timestampToDate(Number(decoded?.exp));

  if (!!accessToken) {
    Cookies.set(ACCESS_TOKEN, accessToken, {
      expires: expiredDate,
    });
  }

  return res;
};

export const getUserProfile = async () => {
  const { data } = await apiRequest.get({
    url: apiPath.me,
  });

  return data;
};

export const logout = () => {
  Cookies.remove(ACCESS_TOKEN);
  window.location.replace(routePath.Login);
};
