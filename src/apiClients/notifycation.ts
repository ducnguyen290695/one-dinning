import apiRequest from "utils/api";
import apiPath from "constants/apiPaths";
import { QueryParams } from "models/apiRequest";

export const getNotifications = (params: QueryParams) => async () => {
  const data = await apiRequest.get({
    url: apiPath.notification,
    params,
  });

  return data?.data;
};
