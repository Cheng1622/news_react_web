import {Navigate, useRoutes} from "react-router-dom";
import {lazy} from "react";
import {lazyLoad} from "@/utils/lazyload";
import type {RouteObj} from "./type";

export const routeConfig: RouteObj[] = [
  {
    path: "/",
    meta: {title: ""},
    element: (<Navigate to="/dashboard/workplace"/>),
  },
  {
    path: "/login",
    element: lazyLoad(lazy(() => import("@/page/login")))
  },
  {
    path: "*",
    element: lazyLoad(lazy(() => import("@/page/error")))
  }

];

const Router = () => {
  return useRoutes(routeConfig);
};

export default Router;