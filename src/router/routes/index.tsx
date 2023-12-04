import type {RouteObj} from "@/router/type";
import {lazyLoad} from "@/utils/lazyload";
import { lazy } from "react";

const routes: RouteObj[] = [
    {
        path: "/home",
        element: lazyLoad(lazy(() => import("@/page/Home"))),
        meta: {
          title: "首页",
          icon: "HomeIcon"
        },
      }, 
];

export default routes;