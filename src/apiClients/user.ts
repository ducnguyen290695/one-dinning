import apiRequest from "utils/api";
import apiPath from "constants/apiPaths";
import { QueryParams } from "models/apiRequest";

export const getUsers = (params: QueryParams) => async () => {
  const data = await apiRequest.get({
    url: apiPath.user,
    params,
  });

  return data?.data;
};

export const lockUser = (id: string) => {
  return apiRequest.put({
    url: `${apiPath.user}/${id}/lock`,
  });
};

export const unLockUser = (id: string) => {
  return apiRequest.put({
    url: `${apiPath.user}/${id}/unlock`,
  });
};

export const deleteUser = (id: string) => {
  return apiRequest.delete({
    url: `${apiPath.user}/${id}`,
  });
};
