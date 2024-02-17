import axios from "./axios";
import Cookies from "js-cookie";
import { ACCESS_TOKEN } from "constants/common";
import { AxiosRequestConfig } from "axios";
import { baseURL } from "constants/apiPaths";

interface ApiReq extends AxiosRequestConfig<any> {
  url: string;
}

const getHeaders = () => {
  const token = Cookies.get(ACCESS_TOKEN);

  if (token) {
    return {
      Accept: "application/json",
      "content-type": "application/json",
      Authorization: `Bearer ${token}`,
    };
  }
  return {
    Accept: "application/json",
    "content-type": "application/json",
  };
};

function getApi({ url, ...options }: ApiReq) {
  return axios({
    method: "GET",
    url,
    baseURL,
    headers: { ...getHeaders() },
    ...options,
  });
}

function postApi({ url, data, ...options }: ApiReq) {
  return axios({
    method: "POST",
    url: url,
    baseURL,
    data,
    headers: { ...getHeaders() },
    ...options,
  });
}

function postApiUpload({ url, data, ...options }: ApiReq) {
  return axios({
    method: "POST",
    url: url,
    baseURL,
    data,
    headers: { ...getHeaders(), "content-type": "multipart/form-data" },
    ...options,
  });
}

function putApi({ url, data, ...options }: ApiReq) {
  return axios({
    method: "PUT",
    url: url,
    baseURL,
    data,
    headers: { ...getHeaders() },
    ...options,
  });
}

function patchApi({ url, data, ...options }: ApiReq) {
  return axios({
    method: "PATCH",
    url: url,
    baseURL,
    data,
    headers: { ...getHeaders() },
    ...options,
  });
}

function deleteApi({ url, ...options }: ApiReq) {
  return axios({
    method: "DELETE",
    url: url,
    baseURL,
    headers: { ...getHeaders() },
    ...options,
  });
}

const Api = {
  get: getApi,
  post: postApi,
  postUpload: postApiUpload,
  put: putApi,
  delete: deleteApi,
  patch: patchApi,
};

export { getHeaders };
export default Api;
