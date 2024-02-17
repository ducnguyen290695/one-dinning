import apiRequest from "utils/api";
import apiPath from "constants/apiPaths";
import { QueryParams } from "models/apiRequest";

export const getStores = (params: QueryParams) => async () => {
  const data = await apiRequest.get({
    url: apiPath.store,
    params,
  });

  return data?.data;
};

export const lockStore = (id: string) => {
  return apiRequest.put({
    url: `${apiPath.store}/${id}/lock`,
  });
};

export const unLockStore = (id: string) => {
  return apiRequest.put({
    url: `${apiPath.store}/${id}/unlock`,
  });
};

export const deleteStore = (id: string) => {
  return apiRequest.delete({
    url: `${apiPath.store}/${id}`,
  });
};
