import {Navigate, useRoutes} from "react-router-dom";
import {lazy} from "react";
import {lazyLoad} from "@/utils/lazyload";
import type {RouteObj} from "./type";
import routes from "./routes";

export const routeConfig: RouteObj[] = [
  {
    path: "/",
    meta: {title: ""},
    element: (<Navigate to="/home"/>),
  },
  {
    path: "/login",
    element: lazyLoad(lazy(() => import("@/page/Login")))
  },
  {
    element: lazyLoad(lazy(() => import("@/page/Layout"))),
    children: [
      ...routes
    ]
  },
  {
    path: "*",
    element: lazyLoad(lazy(() => import("@/page/Error")))
  }

];

const Router = () => {
  return useRoutes(routeConfig);
};

export default Router;