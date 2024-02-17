const apiPath = {
  store: "/api/v1/admin/stores",
  user: "/api/v1/admin/users",
  notification: "/api/v1/notifications",
  login: "/api/v1/auth/login",
  me: "/api/v1/auth/me",
  policy: "/api/privacy-policy",
};

export const baseURL = process.env.REACT_APP_API_URL;

export default apiPath;
