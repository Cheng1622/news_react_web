import {Suspense} from "react";
import Loading from "@/components/loading";
import type {LazyExoticComponent} from "react";

export function lazyLoad(Comp: LazyExoticComponent<any>) {
  return (
    <Suspense fallback={<Loading/>}>
      <Comp/>
    </Suspense>
  );
}