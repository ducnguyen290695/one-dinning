import { lazy } from "react";
import { routePath } from "./paths";

const Store = import("pages/store");
const User = import("pages/user");
const Notification = import("pages/notification");
const Policy = import("pages/policy");
const Login = import("pages/login");
const PolicyPublic = import("pages/policy-public");

interface RouteI {
  path: string;
  Component: React.ElementType;
  isCheckAuth?: Boolean;
  props?: Object;
  privateRouteProps?: Object;
  children?: RouteI[];
}

export const publicRoutes: RouteI[] = [
  {
    path: routePath.Login,
    Component: lazy(() => Login),
  },
  {
    path: routePath.PolicyPublic,
    Component: lazy(() => PolicyPublic),
  },
];

export const appRoutes: RouteI[] = [
  {
    path: routePath.Store,
    Component: lazy(() => Store),
  },
  {
    path: routePath.User,
    Component: lazy(() => User),
  },
  {
    path: routePath.Notification,
    Component: lazy(() => Notification),
  },
  {
    path: routePath.Policy,
    Component: lazy(() => Policy),
  },
];
