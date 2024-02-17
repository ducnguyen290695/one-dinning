import apiPath from "constants/apiPaths";
import { Policy } from "models/policy";
import apiRequest from "utils/api";

export const createPolicy = async (policy: Policy) => {
  return apiRequest.post({
    url: apiPath.policy,
    data: policy,
  });
};

export const getPolicy = async (policyKey: string) => {
  return apiRequest.get({
    url: `${apiPath.policy}/${policyKey}`,
  });
};
